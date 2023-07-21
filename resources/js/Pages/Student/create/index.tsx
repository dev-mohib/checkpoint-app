import Breadcrumb from '@/Components/daisy/breadcrumb';
import AppLayout from '@/Layouts/AppLayout'
import { Head, Link, useForm, usePage } from '@inertiajs/react'
import React, { FormEventHandler, useEffect, useState } from 'react'
import { FilePond } from 'react-filepond'
import { PlusIcon } from '@/Components/icons';
import Modal from '@/Components/daisy/modal';
import { XmarkIcon } from '@/Components/icons'
import { PageProps } from '@/types';

const AdminCreate = () => {
  const [input, setInput] = useState('')
  const [searchBy, setSearchBy] = useState('name')

  const [files, setFiles] = React.useState<any[]>([])

  const formData = {
    name: '',
    email: '',
    address : '',
    contact_number : '',
    username: '',
    password : '',
    qualification : '',
}
const local = localStorage.getItem('rememberStudent')
const { data, setData, post } = useForm<typeof formData>(local ? JSON.parse(local) : formData);


const submit: FormEventHandler = (e) => {
  e.preventDefault();
  post(route('student.store'));
  localStorage.removeItem('rememberStudent')
};

  return (
    <div> 
      <Head title='Create Student'/>
      <Breadcrumb list={[{title : 'Home', href: "/dashboard"},{title : 'Student', href: '/student'}, {title : 'Create New', href : null}]}/>

      <div className="w-full mx-auto mt-8">
      <div className="bg-base-100 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Create Student</h2>

        {/* <form> */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">Name</label>
            <input type="text" id="name" name="name" 
              placeholder='Hauck PLC' className="input border-2 border-base-200 input-ghost w-full" 
              value={data.name}
              onChange={(e) => setData("name" ,e.target.value)}
              />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="address">Address</label>
            <textarea id="address" name="address" rows={2} 
            className="input border-2 border-base-200 input-ghost w-full"
            value={data.address}
              onChange={(e) => setData("address" ,e.target.value)}
            ></textarea>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="address">Qaulifications</label>
            <input type="text" id="qualification" name="qualification" 
              placeholder='MSc. Data Science..' className="input border-2 border-base-200 input-ghost w-full" 
              value={data.qualification}
              onChange={(e) => setData("qualification" ,e.target.value)}
              />
          </div>
          <div className="mb-6 flex">
            <div className="mr-2">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="contact">Contact</label>
              <input type="tel" id="contact" name="contact" placeholder='+42'  
                className="input border-2 border-base-200 input-ghost w-full" 
                value={data.contact_number}
                onChange={(e) => setData("contact_number" ,e.target.value)}
              />
            </div>
            <div className="ml-2">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="logo">Logo</label>
              <input type="file" id="logo" name="logo" accept="image/*" className="file-input  w-full  file-input-primary" />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">Email</label>
            <input type="email" id="email" name="email" 
              className="input border-2 border-base-200 input-ghost w-full" 
              value={data.email}
              onChange={(e) => setData("email" ,e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="username">Username</label>
            <input type="text" id="username" name="username" 
              className="input border-2 border-base-200 input-ghost w-full"
              value={data.username}
              onChange={(e) => setData("username" ,e.target.value)}
              />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">Password</label>
            <input type="password" id="password" name="password" 
              className="winput border-2 border-base-200 input-ghost w-full" 
              value={data.password}
              onChange={(e) => setData("password" ,e.target.value)}
              />
          </div>
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="logo">Registration Document</label>
          <FilePond
            files={files}
            onupdatefiles={setFiles}
            allowMultiple={true}
            maxFiles={3}
            server="/api/upload/organization-document"
            name="organization-document" /* sets the file input name, it's filepond by default */
            labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
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


const IndexView = () => {
  return(
    <AppLayout
      AdminComponent={<AdminCreate />}
      OrganizationComponent={<AdminCreate />}
    >

    </AppLayout>
  )
}
export default IndexView