import Breadcrumb from '@/Components/daisy/breadcrumb';
import AppLayout from '@/Layouts/AppLayout'
import { Head, useForm } from '@inertiajs/react'
import React, { FormEventHandler } from 'react'

const Index = ({activeMenu, title}:any) => {
  const { data, setData,post, errors, processing, recentlySuccessful } = useForm({
    name: '',
    email: '',
    address : '',
    contact : '',
    username: '',
    password : ''
});

const submit: FormEventHandler = (e) => {
  // e.preventDefault();
  console.log("sending request")
  post(route('organization.store'));
};
  return (
    <AppLayout activeMenu={activeMenu} title={title}> 
      <Head title='Create Organization'/>
      <Breadcrumb list={[{title : 'Home', href: "/dashboard"},{title : 'Organization', href: '/organization'}, {title : 'Create New', href : null}]}/>
      
      
      <div className="w-full mx-auto mt-8">
      <div className="bg-base-100 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Create Organization</h2>

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
                value={data.contact}
                onChange={(e) => setData('contact', e.target.value)}
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
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">Password</label>
            <input type="password" id="password" name="password" 
              className="winput border-2 border-base-200 input-ghost w-full" 
              value={data.password}
              onChange={(e) => setData('password', e.target.value)}
              />
          </div>

          <div className="ml-2 mb-6">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="logo">Registration Document</label>
              <input type="file" id="org_image" name="org_image" accept="image/*" className="file-input  w-full  " />
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