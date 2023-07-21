import Breadcrumb from '@/Components/daisy/breadcrumb';
import AppLayout from '@/Layouts/AppLayout'
import { Checkpoint, PageProps } from '@/types';
import { Head, useForm, usePage } from '@inertiajs/react'
import React, { FormEventHandler, useEffect } from 'react'

const Index = ({ instructor, isFound }:any) => {
  const {checkpoint} = usePage<PageProps<{checkpoint : Checkpoint}>>().props
  if(!checkpoint)
  return(
    <AppLayout>
      <Head title='Edit'/>
      <Breadcrumb list={[{title : 'Home', href: "/dashboard"},{title : 'Organization', href: '/organization'}, {title : 'Edit', href : null}]}/>
      <div className='h-screen flex-c-c'>
        <h1 className='text-3xl font-extrabold'>Not Found</h1>
      </div>
    </AppLayout>
  )
  
  const { data, setData,put, errors, processing, recentlySuccessful } = useForm({
    id: checkpoint.id,
    name: checkpoint.name,
    description: checkpoint.description,
    instructor_input : checkpoint.instructor_input,
    validity_period : checkpoint.validity_period,
    certificate: checkpoint.certificate,
});

  // useEffect(() => {
  //   console.log({auth})
  // },[data])

const submit: FormEventHandler = (e) => {
  // e.preventDefault();
  console.log("sending patch request")
  put(route('instructor.edit', data));
};


  return (
    <AppLayout> 
      <Head title='Edit'/>
      <Breadcrumb list={[{title : 'Home', href: "/dashboard"},{title : 'Checkpoint', href: '/checkpoint'}, {title : 'Edit', href : null}]}/>
      
      
      <div className="w-full mx-auto mt-8">
      <div className="bg-base-100 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Checkpoint Edit</h2>

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
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="description">Description</label>
            <textarea id="description" name="description" rows={2} 
            className="input border-2 border-base-200 input-ghost w-full"
            value={data.description}
              onChange={(e) => setData('description', e.target.value)}
            ></textarea>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="instructor_input">Instructor Input</label>
            <textarea id="instructor_input" name="instructor_input" rows={2} 
            className="input border-2 border-base-200 input-ghost w-full"
            value={data.instructor_input}
              onChange={(e) => setData('instructor_input', e.target.value)}
            ></textarea>
          </div>

          <div className="ml-2">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="logo">Certificate</label>
            <input type="file" id="logo" name="logo" accept="image/*" className="file-input  w-full  " />
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