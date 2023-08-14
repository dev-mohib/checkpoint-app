import { ErrorMessage } from '@/Components/daisy/ErrorMessage'
import AppLayout from '@/Layouts/AppLayout'
import { Organization, PageProps } from '@/types'
import { useForm, usePage } from '@inertiajs/react'
import React, { FormEventHandler, useState } from 'react'
import { FilePond } from 'react-filepond'

const EditOrganization = () => {
  const [timestamp] = useState(Date.now())
  const { organization } = usePage<PageProps<{organization : Organization}>>().props
  console.log({organization})
  const { data, setData,post, errors } = useForm({
    name: organization.name,
    email: organization.users.email,
    address : organization.users.address,
    contact_number : organization.users.contact_number,
    username: organization.users.username,
    password : '',
    regDocRef : '',
    logoRef : ''
});

const [docFiles, setDocFiles] = React.useState<any[]>([])
const [logoFiles, setLogoFiles] = React.useState<any[]>([])

const submit: FormEventHandler = (e) => {
  e.preventDefault();
  post(route('organization.update'));
};
  return (
    <div> 
     <div className="w-full mx-auto mt-8">
      <div className="bg-base-100 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Edit Organization</h2>
        {/* <form> */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">Name</label>
            <ErrorMessage message={errors.name}/>
            <input type="text" id="name" name="name" 
              placeholder='Hauck PLC' className="input border-2 border-base-200 input-ghost w-full" 
              value={data.name}
              onChange={(e) => setData('name', e.target.value)}
              />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="address">Address</label>
            <ErrorMessage message={errors.address}/>
            <textarea id="address" name="address" rows={2} placeholder='Apt. 750, West Reeseberg'
            className="input border-2 border-base-200 input-ghost w-full"
            value={data.address}
              onChange={(e) => setData('address', e.target.value)}
            ></textarea>
          </div>
          <div className="mb-6 flex">
            <div className="mr-2">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="contact">Contact</label>
              <ErrorMessage message={errors.contact_number}/>
              <input type="tel" id="contact" name="contact" placeholder='+42 303 5214014'  
                className="input border-2 border-base-200 input-ghost w-full" 
                value={data.contact_number}
                onChange={(e) => setData('contact_number', e.target.value)}
                />
            </div>
          </div>
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="logo">Organization Logo</label>
          <ErrorMessage message={errors.logoRef}/>
          <FilePond
            files={logoFiles}
            onupdatefiles={setLogoFiles}
            acceptedFileTypes={["image/jpg", "jpg", '.jpg']}
            maxFiles={1}
            server={`/api/upload/organization-logo?key=IMG-${timestamp}`}
            name="organization-logo" 
            labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
            onprocessfile={(err, file) => {
              if(!err){
                // setLogoUploaded(true)
                setData("logoRef", 'IMG-' + timestamp + '.' + file.fileExtension)
              }
            }}
            />
            <div>
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="organization-document">Registration Document</label>
              <ErrorMessage message={errors.regDocRef}/>
              <FilePond
                files={docFiles}
                onupdatefiles={setDocFiles}
                acceptedFileTypes={["image/jpg", "jpg", '.jpg']}
                maxFiles={1}
                server={`/api/upload/organization-document?key=doc-${timestamp}`}
                name="organization-document" 
                labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                onprocessfile={(err, file) => {
                  if(!err){
                    setData("regDocRef",'doc-' + timestamp + '.' + file.fileExtension)
                  }
                }}
              />
            </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">Email</label>
            <ErrorMessage message={errors.email}/>
            <input type="email" id="email" name="email" placeholder='abc@example.com'
              className="input border-2 border-base-200 input-ghost w-full" 
              value={data.email}
              onChange={(e) => setData('email', e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="username">Username</label>
            <ErrorMessage message={errors.username}/>
            <input type="text" id="username" name="username" placeholder='hauk.plc'
              className="input border-2 border-base-200 input-ghost w-full"
              value={data.username}
              onChange={(e) => setData('username', e.target.value)}
              />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">Password</label>
            <ErrorMessage message={errors.password}/>
            <input type="password" id="password" name="password" placeholder='****'
              className="winput border-2 border-base-200 input-ghost w-full" 
              value={data.password}
              onChange={(e) => setData('password', e.target.value)}
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


const Index = () => {

  return (
    <AppLayout
      AdminComponent={<EditOrganization />}
      breadcrumb={[{title : 'Home', href: "/dashboard"},{title : 'Organization', href: '/organization'}, {title : 'Edit', href : null}]}
    >

    </AppLayout>
  )
}

export default Index