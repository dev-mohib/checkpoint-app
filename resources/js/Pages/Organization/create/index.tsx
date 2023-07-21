import AppLayout from '@/Layouts/AppLayout'
import { useForm, usePage } from '@inertiajs/react'
import React, { FormEventHandler, useState } from 'react'
import { FilePond } from 'react-filepond'

const CreateOrganization = () => {
  const [timestamp] = useState(Date.now())
  const [isDocUploaded, setDocUploaded] = useState(false)
  const [isLogoUploaded, setLogoUploaded] = useState(false)
  const {errorMessage, hasError } = usePage<{hasError : boolean, errorMessage : string}>().props
  const { data, setData,post } = useForm({
    name: '',
    email: '',
    address : '',
    contact_number : '',
    username: '',
    password : '',
    regDocRef : '',
    logoRef : ''
});

const [docFiles, setDocFiles] = React.useState<any[]>([])
const [logoFiles, setLogoFiles] = React.useState<any[]>([])

const submit: FormEventHandler = (e) => {
  // e.preventDefault();
  post(route('organization.store'));
};
  return (
    <div> 
     {hasError && <div className="alert alert-error my-5">
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>Error! {errorMessage}.</span>
      </div>
     }
     <div className="w-full mx-auto mt-8">
      <div className="bg-base-100 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Create Organization</h2>

        {/* <form> */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">Name</label>
            <input type="text" id="name" name="name" 
              placeholder='Hauck PLC' className="input border-2 border-base-200 input-ghost w-full" 
              value={data.name}
              onChange={(e) => setData('name', e.target.value)}
              />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="address">Address</label>
            <textarea id="address" name="address" rows={2} 
            className="input border-2 border-base-200 input-ghost w-full"
            value={data.address}
              onChange={(e) => setData('address', e.target.value)}
            ></textarea>
          </div>

          <div className="mb-6 flex">
            <div className="mr-2">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="contact">Contact</label>
              <input type="tel" id="contact" name="contact" placeholder='+42'  
                className="input border-2 border-base-200 input-ghost w-full" 
                value={data.contact_number}
                onChange={(e) => setData('contact_number', e.target.value)}
                />
            </div>
          </div>
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="logo">Logo</label>
            <FilePond
              files={logoFiles}
              onupdatefiles={setLogoFiles}
              // allowMultiple={true}
              acceptedFileTypes={["image/jpg", "jpg", '.jpg']}
              maxFiles={1}
              server={`/api/upload/organization-logo?key=IMG-${timestamp}`}
              name="organization-logo" /* sets the file input name, it's filepond by default */
              labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
              onprocessfile={(err, file) => {
                if(!err){
                  setLogoUploaded(true)
                  setData("logoRef", 'IMG-' + timestamp + '.' + file.fileExtension)
                }
              }}
            />
          {/* <div>
            <h1 className='block text-gray-700 font-semibold mb-2'>Belongs to</h1>
            <div className='p-3 w-full border-2 rounded-lg bg-base-200 flex items-center'>
              <div className="badge badge-primary  gap-1 rounded py-4 pl-3 pr-1">
                <p className='font-bold text-md'>
                  Hauck PLC
                </p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-4 h-4 stroke-current cursor-pointer"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </div>
              <div className='mx-2'>
                <PlusIcon className='w-6 h-6 cursor-pointer hover:opacity-70' />
              </div>
            </div>
          </div> */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">Email</label>
            <input type="email" id="email" name="email" 
              className="input border-2 border-base-200 input-ghost w-full" 
              value={data.email}
              onChange={(e) => setData('email', e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="username">Username</label>
            <input type="text" id="username" name="username" 
              className="input border-2 border-base-200 input-ghost w-full"
              value={data.username}
              onChange={(e) => setData('username', e.target.value)}
              />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">Password</label>
            <input type="password" id="password" name="password" 
              className="winput border-2 border-base-200 input-ghost w-full" 
              value={data.password}
              onChange={(e) => setData('password', e.target.value)}
              />
          </div>

          {/*<div className="ml-2 mb-6">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="logo">Registration Document</label>
              <input type="file" id="org_image" name="org_image" accept="image/*" className="file-input  w-full  " />
            </div> */}
      <label className="block text-gray-700 font-semibold mb-2" htmlFor="organization-document">Registration Document</label>
      <FilePond
        files={docFiles}
        onupdatefiles={setDocFiles}
        // allowMultiple={true}
        acceptedFileTypes={["image/jpg", "jpg", '.jpg']}
        maxFiles={1}
        server={`/api/upload/organization-document?key=doc-${timestamp}`}
        name="organization-document" /* sets the file input name, it's filepond by default */
        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
        onprocessfile={(err, file) => {
          if(!err){
            setDocUploaded(true)
            setData("regDocRef",'doc-' + timestamp + '.' + file.fileExtension)
          }
        }}
      />
          <div className="flex justify-end">
            <button className="btn btn-primary" onClick={submit}>Submit</button>
          </div>
        {/* </form> */}
      </div>
    </div>
    </div>
  )
}


const Index = () => {

  return (
    <AppLayout
      AdminComponent={<CreateOrganization />}
      breadcrumb={[{title : 'Home', href: "/dashboard"},{title : 'Organization', href: '/organization'}, {title : 'Create New', href : null}]}
    >

    </AppLayout>
  )
}
const OrganizationForm = () => {
  return (
    <div className="w-full mx-auto mt-8">
      <div className="bg-base-100 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Organization Form</h2>

        <form action="/organization/new" method="POST" encType="multipart/form-data">
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder='Organization' className="input border-2 border-base-200 input-ghost w-full" />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="address">Address</label>
            <textarea id="address" name="address" rows={2} className="input border-2 border-base-200 input-ghost w-full"></textarea>
          </div>

          <div className="mb-6 flex">
            <div className="mr-2">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="contact">Contact</label>
              <input type="tel" id="contact" name="contact" placeholder='+42'  className="input border-2 border-base-200 input-ghost w-full" />
            </div>
            <div className="ml-2">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="logo">Logo</label>
              <input type="file" id="logo" name="logo" accept="image/*" className="file-input  w-full  " />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">Email</label>
            <input type="email" id="email" name="email" className="input border-2 border-base-200 input-ghost w-full" />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="username">Username</label>
            <input type="text" id="username" name="username" className="input border-2 border-base-200 input-ghost w-full" />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">Password</label>
            <input type="password" id="password" name="password" className="winput border-2 border-base-200 input-ghost w-full" />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="image">Image Upload</label>
            <input type="file" id="image" name="image" accept="image/*" className="w-full py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
          </div>

          <div className="flex justify-end">
            <input type='submit' className="btn btn-primary" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Index