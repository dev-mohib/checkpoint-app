import Breadcrumb from '@/Components/daisy/breadcrumb';
import AppLayout from '@/Layouts/AppLayout'
import { Head, useForm, usePage } from '@inertiajs/react'
import React, { FormEventHandler, useState } from 'react'

import { ErrorMessage } from '@/Components/daisy/ErrorMessage';
import { PageProps, Student } from '@/types';

const AdminCreate = () => {
 const { student } = usePage<PageProps<{student : Student}>>().props
 console.log({student})
  const formData = {
    name: student.users.name,
    gender : student.users.gender,
    address : student.users.address,
    contact_number : student.users.contact_number,
    email: student.users.email,
    username: student.users.username,
    password : '',
    guardian_name : student.guardian_name,
    guardian_relationship : student.guardian_relationship
}
const local = localStorage.getItem('rememberStudent')
const { data, setData, put, errors } = useForm<typeof formData>(local ? JSON.parse(local) : formData);


const submit: FormEventHandler = (e) => {
  e.preventDefault();
  if(data.password == ''){
    setData('password', 'Default123')
  }
  put(route('student.edit'));
  localStorage.removeItem('rememberStudent')
};

  return (
    <div> 
      <Head title='Create Student'/>
      <Breadcrumb list={[{title : 'Home', href: "/dashboard"},{title : 'Student', href: '/student'}, {title : 'Edit', href : null}]}/>

      <div className="w-full mx-auto mt-8">
      <div className="bg-base-100 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Edit Student</h2>
        {/* <form> */}
          <div className="mb-6">
            <label className="block font-semibold mb-2" htmlFor="name">Name</label>
            <ErrorMessage message={errors.name}/>
            <input type="text" id="name" name="name" 
              placeholder='Stephan Mertz' className="input border-2 border-base-200 input-ghost w-full" 
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
          <div className="mr-2 w-full">
            <label className="block font-semibold mb-2" htmlFor="contact_number">Contact Number</label>
            <ErrorMessage message={errors.contact_number}/>
            <input type="tel" id="contact" name="contact" placeholder='+92 303 5214014'  
              className="input border-2 border-base-200 input-ghost w-full" 
              value={data.contact_number}
              onChange={(e) => setData("contact_number", e.target.value)}
            />
          </div>
          <div className="mb-6 mr-6">
            <label className="block font-semibold mb-2" htmlFor="gender">Gender</label>
            <ErrorMessage message={errors.gender}/>
            <select className="select select-bordered w-full max-w-xs" onChange={e => setData("gender", e.target.value)}>
              <option disabled>Select Gender</option>
              <option selected={data.gender == 'Male' ? true : false}  value="Male">Male</option>
              <option selected={data.gender == 'Female' ? true : false}  value="Female">Female</option>
              <option selected={data.gender == 'Other' ? true : false}  value="Other">Other</option>
            </select>
          </div>
          <div className="mb-6 w-full mr-6">
            <label className="block font-semibold mb-2" htmlFor="address">Guardian Name</label>
            <ErrorMessage message={errors.guardian_name}/>
            <input type="text" id="guardian_name" name="guardian_name" 
              placeholder='Sam' className="input border-2 border-base-200 input-ghost w-full" 
              value={data.guardian_name}
              onChange={(e) => setData("guardian_name" ,e.target.value)}
            />
          </div>
          <div className="mb-6 mr-6">
            <label className="block font-semibold mb-2" htmlFor="guardian_relationship">Guardian Relationship</label>
            <ErrorMessage message={errors.guardian_relationship}/>
            <select className="select select-bordered w-full max-w-xs" onChange={e => setData("guardian_relationship", e.target.value)}>
              <option  selected disabled>Select Guardian Relationship</option>
              <option selected={data.guardian_relationship == "Parents" ? true : false}  value="Parents">Parents</option>
              <option selected={data.guardian_relationship == "Grandfather" ? true : false}  value="Grandfather">Grandfather</option>
              <option selected={data.guardian_relationship == "Grandmother" ? true : false}  value="Grandmother">Grandmother</option>
              <option selected={data.guardian_relationship == "Brother" ? true : false}  value="Brother">Brother</option>
              <option selected={data.guardian_relationship == "Sister" ? true : false}  value="Sister">Sister</option>
              <option selected={data.guardian_relationship == "Other" ? true : false}  value="Other">Other</option>
            </select>
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
          <div className="mb-6 w-full">
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
            <input type="password" id="password" name="password" placeholder='*****'
              className="input border-2 border-base-200 input-ghost w-full" 
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
      AdminComponent={<AdminCreate />}
      OrganizationComponent={<AdminCreate />}
    >

    </AppLayout>
  )
}
export default IndexView