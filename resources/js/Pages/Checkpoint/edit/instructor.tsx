import { ErrorMessage } from '@/Components/daisy/ErrorMessage';
import Breadcrumb from '@/Components/daisy/breadcrumb';
import { XmarkIcon } from '@/Components/icons';
import AppLayout from '@/Layouts/AppLayout'
import { Checkpoint, PageProps } from '@/types';
import { Head, Link, useForm, usePage } from '@inertiajs/react'
import { FilePondFile } from 'filepond';
import React, { FormEventHandler, useRef, useState } from 'react'
import { FilePond } from 'react-filepond'

const Index = () => {
  const [timestamp] = React.useState(Date.now())
  const [imageNumber, setImageNumber] = useState(1)
  const [checkpointBadge, setCheckpointBadge] = React.useState<any[]>([])
  const [checkpointImages, setCheckpointImages] = React.useState<any>([])
  const [checkpointCert, setCheckpointCert] = React.useState<any[]>([])
  const { checkpoint } = usePage<PageProps<{checkpoint : Checkpoint}>>().props
  const [images, setImages] = React.useState<string[]>(checkpoint.images??[])
  const formData : {
    id: any,
    images : {src : string, action : string | null}[]
    description: string,
    name : string,
    validity_period?: any,
    type : string
    instructor_recommendation? : string
    instructor_input?: string
    achieved_gradepoints: string
    badge? : string | null,
    certificate?: string | null
  } = {
    id: checkpoint.id,
    name: checkpoint.name,
    description: checkpoint.description,
    validity_period : checkpoint.validity_period,
    type : checkpoint.type,
    badge : checkpoint.badge,
    certificate : checkpoint.certificate,
    achieved_gradepoints : checkpoint.achieved_gradepoints,
    instructor_recommendation : checkpoint.instructor_recommendation,
    instructor_input: checkpoint.instructor_input,
    images : checkpoint.images.map(i => ({src:i, action : null}))
}

const local = localStorage.getItem('rememberCheckpoint')
const { data, setData, put, errors } = useForm<typeof formData>(local ? JSON.parse(local) : formData);

const submit: FormEventHandler = (e) => {
  e.preventDefault();
  console.log({data})
  put(route('checkpoint.edit'));
  localStorage.removeItem('rememberCheckpoint')
};
const DisableInput = ({label, placeholder="Not Allowed"}:any) => (
  <div className="mb-6">
    <label className="block font-semibold mb-2" htmlFor="instructorInput">{label}</label>
    <input type="text" name="name" disabled
      placeholder={placeholder} className="input border-2 border-base-200 input-ghost w-full input-disabled" 
    />
  </div>
)

  return (
    <AppLayout> 
      <Head title='Create Student'/>
      <Breadcrumb list={[{title : 'Home', href: "/dashboard"},{title : 'Checkpoint', href: '/checkpoint'}, {title : 'Edit', href : null}]}/>
      <div className="w-full mx-auto mt-8">
      <div className="bg-base-100 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Edit Checkpoint (Instructor)</h2>

        <div className="mb-6">
          <DisableInput placeholder={data.name} label="Name"/>
        </div>
        <div className="mb-6">
          <DisableInput placeholder={data.description} label="Description"/>
        </div>

        <div className="mb-6">
          <label className="block font-semibold mb-2" htmlFor="Type">Type</label>
          <ErrorMessage message={errors.type}/>
          <select className="select select-disabled select-bordered w-full max-w-xs" onChange={e => setData("type", e.target.value)}>
            <option disabled>Select Checkpoint Type</option>
            <option disabled  selected={checkpoint.type == 'General' ? true : false}  value="General">General</option>
            <option disabled  selected={checkpoint.type == 'Grade Based' ? true : false}  value="Grade Based">Grade Based</option>
            <option disabled  selected={checkpoint.type == 'Completion' ? true : false}  value="Completion">Completion</option>
          </select>
        </div>
        <div>
          <label className="block font-semibold mb-2">Images</label>
          <div className='flex'>
            {
              data.images.map((image, i : number) => (!image.action && <div onClick={() => {
                setData("images", data.images.map((img, _i) => ({
                  src : img.src, 
                  action :  i == _i ? "remove" : img.action
                })))
              }}  key={i} className='m-2 relative'>
                <div className='absolute right-2 top-2 cursor-pointer hover:opacity-60'>
                  <XmarkIcon />
                </div>
                <img src={`/storage/checkpoint-image/${image.src}`} alt={image.src} className='h-28 w-28' />
              </div>)
              )
            }
          </div>
          <label className="block font-semibold mb-2" htmlFor="checkpoint-image">Upload More Images</label>
          <FilePond
            files={checkpointImages}
            onupdatefiles={setCheckpointImages}
            allowMultiple
            maxFiles={5 - checkpoint?.images.length??0}
            server={`/api/upload/checkpoint-image?key=IMG-${timestamp}-${imageNumber}`}
            name="checkpoint-image"
            labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
            onprocessfile={(err, file) => {
              if(!err && data.images.length <= 5){
                setData("images", [...data.images,{
                  src : 'IMG-'+timestamp+'-'+(imageNumber)+'.'+file.fileExtension,
                  action : "add"
                }])
                setImageNumber(i => i+1)
                // setData("photo_id_back", 'IMG-' + timestamp + '.' + file.fileExtension)
              }
            }}
          />
        </div>
        <div className="mb-6">
          <label className="block font-semibold mb-2" htmlFor="instructor_input">Instructor Input</label>
          <ErrorMessage message={errors.name}/>
          <input type="text" id="instructor_input" name="instructor_input" 
            placeholder='Human Computer Interaction' className="input border-2 border-base-200 input-ghost w-full" 
            value={data.instructor_input}
            onChange={(e) => setData("instructor_input" ,e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block font-semibold mb-2" htmlFor="instructor_recommendation">Instructor Recommendation</label>
          <ErrorMessage message={errors.instructor_recommendation}/>
          <input type="text" id="name" name="instructor_recommendation" 
            placeholder='Instructor Recommendation' className="input border-2 border-base-200 input-ghost w-full" 
            value={data.instructor_recommendation}
            onChange={(e) => setData("instructor_recommendation" ,e.target.value)}
            />
        </div>
        {/* Grade Based Field */}
        <div className={`mb-6 ${data.type !== "Grade Based" && 'hidden'}`}>
          <label className="block font-semibold mb-2" htmlFor="grade_achieve">Achieved Gradepoints</label>
          <ErrorMessage message={errors.achieved_gradepoints}/>
          <input type="text" id="grade_achieve" name="grade_achieve" 
            placeholder='Achieved Gradepoints' className="input border-2 border-base-200 input-ghost w-full" 
            value={data.achieved_gradepoints}
            onChange={(e) => setData("achieved_gradepoints" ,e.target.value)}
            />
        </div>
        <div className={`${data.type !== "Completion" && 'hidden'}`}>
          <div className={`mb-6 ${data.type !== "Completion" && 'hidden'}`}>
            <label className="block font-semibold mb-2" htmlFor="validity_period">Validity Period</label>
            <ErrorMessage message={errors.validity_period}/>
            <select className="select select-bordered w-full max-w-xs" onChange={e => setData("validity_period", e.target.value)}>
              <option selected disabled>Select Validity Period</option>
              <option value="1 Year">1 Year</option>
              <option value="2 Years">2 Years</option>
              <option value="3 Years">3 Years</option>
              <option value="Permanent">Permanent</option>
            </select>
          </div>
          
          {data.badge && 
          <div className='m-2 relative w-36'>
              <img src={`/storage/checkpoint-badge/${checkpoint.badge}`} alt="Badge Image" className='h-36 w-36' />
          </div>}
          <label className="block font-semibold mb-2" htmlFor="validity_period">Change Badge Image</label>
          <FilePond
            files={checkpointBadge}
            onupdatefiles={setCheckpointBadge}
            // maxFiles={5}
            allowMultiple={false}
            server={`/api/filepond/checkpoint-badge??id=IMG-${timestamp}`}
            name="checkpoint-badge"
            labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
            onprocessfile={(err, file) => {
              if(!err){
                setData("badge", 'IMG-' + timestamp + '.' + file.fileExtension)
              }
            }}
          />
          {data.certificate && <div 
             className='m-2 relative w-36'>
              <img src={`/storage/checkpoint-certificate/${checkpoint.certificate}`} alt="Badge Certificate" className='h-36 w-36' />
          </div>}
          <label className="block font-semibold mb-2" htmlFor="validity_period">Change Certificate Image</label>
          <FilePond
            files={checkpointCert}
            onupdatefiles={setCheckpointCert}
            allowMultiple={false}
            acceptedFileTypes={["Image/*"]}
            server={`/api/filepond/checkpoint-certificate??id=IMG-${timestamp}`}
            name="checkpoint-certificate"
            labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
            onprocessfile={(err, file) => {
              if(!err){
                setData("certificate", 'IMG-' + timestamp + '.' + file.fileExtension)
              }
            }}
          />
        </div>
        <div className="flex justify-end">
          <button className="btn btn-primary mt-2" onClick={submit}>Save</button>
        </div>
      </div>
    </div>

    </AppLayout>
  )
}

export default Index