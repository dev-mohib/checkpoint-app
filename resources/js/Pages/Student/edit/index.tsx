import Breadcrumb from '@/Components/daisy/breadcrumb';
import AppLayout from '@/Layouts/AppLayout'
import { PageProps, Student } from '@/types';
import { Head, useForm, usePage } from '@inertiajs/react'
import React, { FormEventHandler, useEffect } from 'react'

const Index = () => {
  const { student } = usePage<PageProps<{student : Student}>>().props
  if(!student)
  return(
    <AppLayout>
      <Head title='Edit'/>
      <Breadcrumb list={[{title : 'Home', href: "/dashboard"},{title : 'Student', href: '/student'}, {title : 'Edit', href : null}]}/>
      <div className='h-screen flex-c-c'>
        <h1 className='text-3xl font-extrabold'>Not Found</h1>
      </div>
    </AppLayout>
  )
  
  const { data, setData,put, errors, processing, recentlySuccessful } = useForm({
    id: student.id,
    name: student.users.name,
    email: student.users.email,
    address : student.users.address,
    contact_number : student.users.contact_number,
    username: student.users.username,
    password : ''
});

  // useEffect(() => {
  //   console.log({auth})
  // },[data])

const submit: FormEventHandler = (e) => {
  // e.preventDefault();
  console.log("sending patch request")
  put(route('student.edit', data));
};


  return (
    <AppLayout> 
      <Head title='Edit'/>
      <Breadcrumb list={[{title : 'Home', href: "/dashboard"},{title : 'Student', href: '/student'}, {title : 'Edit', href : null}]}/>
      
      
      <div className="w-full mx-auto mt-8">
      <div className="bg-base-100 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Student Edit</h2>

        {/* <form> */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">Name</label>
            <input type="text" id="name" name="name" 
              placeholder='Organization' className="input border-2 border-base-200 input-ghost w-full" 
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
            <div className="ml-2">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="logo">Logo</label>
              <input type="file" id="logo" name="logo" accept="image/*" className="file-input  w-full  " />
            </div>
          </div>

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
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">New Password</label>
            <input type="password" id="password" name="password" 
              className="winput border-2 border-base-200 input-ghost w-full" 
              value={data.password}
              onChange={(e) => setData('password', e.target.value)}
              />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="image">Image Upload</label>
            <input type="file" id="image" name="image" accept="image/*" className="w-full py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
          </div>

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