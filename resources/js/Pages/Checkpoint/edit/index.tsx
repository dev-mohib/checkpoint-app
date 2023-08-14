import { ErrorMessage } from '@/Components/daisy/ErrorMessage';
import Breadcrumb from '@/Components/daisy/breadcrumb';
import AppLayout from '@/Layouts/AppLayout'
import { Checkpoint, PageProps } from '@/types';
import { Head, Link, useForm, usePage } from '@inertiajs/react'
import React, { FormEventHandler, useEffect, useState } from 'react'
import { FilePond } from 'react-filepond'

const Index = () => {
  const [timestamp] = React.useState(Date.now())
  const [checkpointBadge, setCheckpointBadge] = React.useState<any[]>([])
  // const [checkpointCert, setCheckpointCert] = React.useState<any[]>([])
  const { checkpoint } = usePage<PageProps<{checkpoint : Checkpoint}>>().props
  const formData = {
    name: checkpoint.name,
    description: checkpoint.description,
    validity_period : checkpoint.validity_period,
    type : checkpoint.type
}
const local = localStorage.getItem('rememberCheckpoint')
const { data, setData, post, errors } = useForm<typeof formData>(local ? JSON.parse(local) : formData);

const submit: FormEventHandler = (e) => {
  e.preventDefault();
  post(route('checkpoint.store'));
  localStorage.removeItem('rememberCheckpoint')
};

const DisableInput = ({label}:any) => (
  <div className="mb-6">
    <label className="block font-semibold mb-2" htmlFor="instructorInput">{label}</label>
    <input type="text" id="name" name="name" 
      placeholder='Filled by instrtuctor' className="input border-2 border-base-200 input-ghost w-full input-disabled" 
    />
  </div>
)
const DisableFileInput = ({label}:any) => (
  <div className='mb-6'>
    <div className="form-control w-full max-w-xs">
      <label className="label font-bold">
        <span className=" font-normal"><span className='font-bold '>{label}: </span>(Uploaded by Instructor)</span>
      </label>
      <input type="file" className="file-input file-input-bordered w-full max-w-xs file-input-disabled" placeholder='Not Allowed' />
    </div>
  </div>
)
const ImageInput = () => (
  <div className="mb-6">
      <div className="mr-2">
        <label className="block font-semibold mb-2" htmlFor="badge">Badge</label>
        {/* <ErrorMessage message={errors.badge}/> */}
      </div>
        <FilePond
          files={checkpointBadge}
          onupdatefiles={setCheckpointBadge}
          maxFiles={1}
          server={`/api/upload/checkpoint-badge??key=IMG-${timestamp}`}
          name="checkpoint-badge" /* sets the file input name, it's filepond by default */
          labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
          onprocessfile={(err, file) => {
            if(!err){
              // setLogoUploaded(true)
              // setData("badge", 'IMG-' + timestamp + '.' + file.fileExtension)
            }
          }}
        />
    </div>
)
  return (
    <AppLayout> 
      <Head title='Create Student'/>
      <Breadcrumb list={[{title : 'Home', href: "/dashboard"},{title : 'Checkpoint', href: '/checkpoint'}, {title : 'Edit', href : null}]}/>
      <div className="w-full mx-auto mt-8">
      <div className="bg-base-100 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Edit Checkpoint</h2>

        {/* <form> */}
          <div className="mb-6">
            <label className="block font-semibold mb-2" htmlFor="name">Name</label>
            <ErrorMessage message={errors.name}/>
            <input type="text" id="name" name="name" 
              placeholder='Human Computer Interaction' className="input border-2 border-base-200 input-ghost w-full" 
              value={data.name}
              onChange={(e) => setData("name" ,e.target.value)}
              />
          </div>
          <div className="mb-6">
            <label className="block font-semibold mb-2" htmlFor="description">Description</label>
            <ErrorMessage message={errors.description}/>
            <textarea id="description" name="description" rows={2} placeholder='Computer Science Subject'
              className="input border-2 border-base-200 input-ghost w-full"
              value={data.description}
              onChange={(e) => setData("description" ,e.target.value)}
            ></textarea>
          </div>

          <div className="mb-6">
            <label className="block font-semibold mb-2" htmlFor="Type">Type</label>
            <ErrorMessage message={errors.type}/>
            <select className="select select-bordered w-full max-w-xs" onChange={e => setData("type", e.target.value)}>
              <option disabled>Select Checkpoint Type</option>
              <option selected={checkpoint.type == 'General' ? true : false}  value="General">General</option>
              <option selected={checkpoint.type == 'Grade Based' ? true : false}  value="Grade Based">Grade Based</option>
              <option selected={checkpoint.type == 'Completion' ? true : false}  value="Completion">Completion</option>
            </select>
          </div>

          {
            data.type == 'General' ? <>
              <DisableInput label="Instructor Input"/>
              <DisableInput label="Instructor Recommendation"/>
              <DisableFileInput label="Images"/>
            </>:
            data.type == 'Grade Based' ? <>
              <DisableInput label="Instructor Input"/>
              <DisableInput label="Instructor Recommendation"/>
              <DisableInput label="Grade Points"/>
              <DisableFileInput label="Images"/>
            </>
            :data.type == 'Completion' ? <>
              <div className="mb-6">
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
              <DisableFileInput label="Badge"/>
              <DisableFileInput label="Certificate"/>
            </>
            :null
          }
          <div className="flex justify-end">
            <button className="btn btn-primary" onClick={submit}>Submit</button>
          </div>
        {/* </form> */}
      </div>
    </div>

    </AppLayout>
  )
}

export default Index