import { ErrorMessage } from '@/Components/daisy/ErrorMessage';
import Breadcrumb from '@/Components/daisy/breadcrumb';
import AppLayout from '@/Layouts/AppLayout'
import { Instructor, PageProps } from '@/types';
import { Head, useForm, usePage } from '@inertiajs/react'
import React, { FormEventHandler } from 'react'
import { FilePond } from 'react-filepond'

const AdminEdit = () => {

  const [timestamp] = React.useState(Date.now())
  const { instructor } = usePage<PageProps<{instructor : Instructor}>>().props
  console.log({instructor})

  const [photoFront, setPhotoFront] = React.useState<any[]>([])
  const [photoBack, setPhotoBack] = React.useState<any[]>([])

  const formData = {
    id: instructor.id,
    name: instructor.users.name,
    email: instructor.users.email,
    address : instructor.users.address,
    contact_number : instructor.users.contact_number,
    username: instructor.users.username,
    password : '',
    qualification : instructor.qualification,
    photo_id_front : '',
    photo_id_back  :''
}
const local = localStorage.getItem('rememberInstructor')
const { data, setData, put, errors } = useForm<typeof formData>(local ? JSON.parse(local) : formData);


const submit: FormEventHandler = (e) => {
  e.preventDefault();
  
  put(route('instructor.edit'));
  localStorage.removeItem('rememberInstructor')
};

  return (
    <div> 
      <Head title='Create Instructor'/>
      <Breadcrumb list={[{title : 'Home', href: "/dashboard"},{title : 'Instructor', href: '/instructor'}, {title : 'Edit', href : null}]}/>
      <div className="w-full mx-auto mt-8">
      <div className="bg-base-100 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Edit Instructor</h2>
        {/* <form> */}
          <div className="mb-6">
            <label className="block font-semibold mb-2" htmlFor="name">Name</label>
            <ErrorMessage message={errors.name}/>
            <input type="text" id="name" name="name" 
              placeholder='Mr. Stephan Mertz' className="input border-2 border-base-200 input-ghost w-full" 
              value={data.name}
              onChange={(e) => setData("name" ,e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block font-semibold mb-2" htmlFor="address">Address</label>
            <ErrorMessage message={errors.address}/>
            <textarea id="address" name="address" rows={2} placeholder='	Apt. 750, West Reeseberg'
            className="input border-2 border-base-200 input-ghost w-full"
            value={data.address}
              onChange={(e) => setData("address" ,e.target.value)}
            ></textarea>
          </div>
          <div className="mb-6">
            <label className="block font-semibold mb-2" htmlFor="address">Qaulifications</label>
            <ErrorMessage message={errors.qualification}/>
            <input type="text" id="qualification" name="qualification" 
              placeholder='MSc. Data Science..' className="input border-2 border-base-200 input-ghost w-full" 
              value={data.qualification}
              onChange={(e) => setData("qualification" ,e.target.value)}
            />
          </div>
          <div className="mr-2">
            <label className="block font-semibold mb-2" htmlFor="contact">Contact</label>
            <ErrorMessage message={errors.contact_number}/>
            <input type="tel" id="contact" name="contact" placeholder='+42 303 5214014'  
              className="input border-2 border-base-200 input-ghost w-full" 
              value={data.contact_number}
              onChange={(e) => setData("contact_number" ,e.target.value)}
            />
          </div>
          <div className='mt-5'>
            <label className="block font-semibold mb-2" htmlFor="photo-id-front">Photo ID Front</label>
            <ErrorMessage message={errors.photo_id_front}/>
            <FilePond
              files={photoFront}
              onupdatefiles={setPhotoFront}
              maxFiles={1}
              server={`/api/upload/photo-id-front?key=IMG-${timestamp}`}
              name="instructor-photo-front"
              labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
              onprocessfile={(err, file) => {
                if(!err){
                  setData("photo_id_front", 'IMG-' + timestamp + '.' + file.fileExtension)
                }
              }}
            />
            </div>
            <div>
              <label className="block font-semibold mb-2" htmlFor="photo-id-back">Photo ID Back</label>
            <ErrorMessage message={errors.photo_id_back}/>
              <FilePond
                files={photoBack}
                onupdatefiles={setPhotoBack}
                maxFiles={1}
                server={`/api/upload/photo-id-back?key=IMG-${timestamp}`}
                name="instructor-photo-back"
                labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                onprocessfile={(err, file) => {
                  if(!err){
                    setData("photo_id_back", 'IMG-' + timestamp + '.' + file.fileExtension)
                  }
                }}
              />
            </div>
          <div className="mb-6">
            <label className="block font-semibold mb-2" htmlFor="email">Email</label>
            <ErrorMessage message={errors.email}/>
            <input type="email" id="email" name="email" placeholder='abc@example.com'
              className="input border-2 border-base-200 input-ghost w-full" 
              value={data.email}
              onChange={(e) => setData("email" ,e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label className="block font-semibold mb-2" htmlFor="username">Username</label>
            <ErrorMessage message={errors.username}/>
            <input type="text" id="username" name="username" placeholder='john123'
              className="input border-2 border-base-200 input-ghost w-full"
              value={data.username}
              onChange={(e) => setData("username" ,e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label className="block font-semibold mb-2" htmlFor="password">Password</label>
            <ErrorMessage message={errors.password}/>
            <input type="password" id="password" name="password" placeholder='****'
              className="winput border-2 border-base-200 input-ghost w-full" 
              value={data.password}
              onChange={(e) => setData("password" ,e.target.value)}
            />
          </div>
          <div className="flex justify-end">
            <button className="btn btn-primary" onClick={submit}>Submit</button>
          </div>
        {/* </form> */}
      </div>
    </div>
    </div>
  )
}

const IndexView = () => {
  return(
    <AppLayout
      AdminComponent={<AdminEdit />}
      OrganizationComponent={<AdminEdit />}
    >

    </AppLayout>
  )
}
export default IndexView