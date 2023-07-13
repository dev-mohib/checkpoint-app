import Breadcrumb from '@/Components/daisy/breadcrumb';
import AppLayout from '@/Layouts/AppLayout'
import { Head, Link, useForm } from '@inertiajs/react'
import React, { FormEventHandler, useEffect, useState } from 'react'
import { FilePond } from 'react-filepond'
import { PlusIcon } from '@/Components/icons';
import Modal from '@/Components/daisy/modal';
import { XmarkIcon } from '@/Components/icons'

type org = {name:string, id: string}[]

const Index = ({activeMenu, title, auth, showSearch=false, searchData = [], ziggy}:any) => {
  const [input, setInput] = useState('')
  const [searchBy, setSearchBy] = useState('name')
const [files, setFiles] = React.useState<any[]>([])

  const d: org = []

  const formData = {
    name: '',
    email: '',
    address : '',
    contact_number : '',
    username: '',
    password : '',
    qualification : '',
    selectedOrgs : d
}
const local = localStorage.getItem('rememberInstructor')
const { data, setData, post, get } = useForm<typeof formData>(local ? JSON.parse(local) : formData);


const submit: FormEventHandler = (e) => {
  e.preventDefault();
  post(route('instructor.store'));
  localStorage.removeItem('rememberInstructor')
};

const submitSearch: FormEventHandler = (e) => {
  // if(input.length >= 2){
    e.preventDefault();
    localStorage.setItem('rememberInstructor', JSON.stringify(data))
    get(route('instructor.create', {query : input, searchBy}));
  // }
};
useEffect(() => {
  setInput(ziggy.query?.query??'')
  if(showSearch){
    try {
      // @ts-ignore
      document.getElementById('selectOrgModal')?.showModal()
    } catch (error) {
      
    }
  }
  localStorage.removeItem('rememberInstructor')
},[])


const addOrg = (name : string, id : string) => {
  const found = data.selectedOrgs.find((o : any) => o.id == id)
  if(found){
    try {
      // @ts-ignore
      document.getElementById('selectOrgModal')?.close()
    } catch (error) {
      
    }
  }else {
    setData('selectedOrgs', [...data.selectedOrgs, {id, name}])
    try {
      // @ts-ignore
      document.getElementById('selectOrgModal')?.close()
    } catch (error) {
      
    }
  }
}

const removeOrg = (id: string) => { 
  setData("selectedOrgs", data.selectedOrgs.filter((i : any) => i.id !== id))
}
  return (
    <AppLayout activeMenu={activeMenu} title={title} auth={auth}> 
      <Head title='Create Instructor'/>
      <Breadcrumb list={[{title : 'Home', href: "/dashboard"},{title : 'Instructor', href: '/instructor'}, {title : 'Create New', href : null}]}/>
      <Modal id="selectOrgModal" title="Select Organization" className='w-11/12 max-w-5xl'>
        <div className="join my-5 border-2 border-primary">
          <div className='input-group flex-r-c'>
            <input value={input} onChange={(e) => setInput(e.target.value)}  className="input input-bordered join-item" placeholder="Search..."/>
            <div onClick={() => setInput('')}  className='btn bg-base-100 hover:bg-base-100 join-item'>
                {/* <ClearIcon className="w-4 h-4"/> */}
                <XmarkIcon/>
              </div>
          </div>
          <select className="select select-bordered join-item" value={searchBy} onChange={(e) => setSearchBy(e.target.value)}>
              <option disabled selected value="all">Search By</option>
              <option value="name">Organization Name</option>
              <option value="id">Organization ID</option>
          </select>
          <div className="indicator ">
              <div onClick={submitSearch} className="btn join-item btn-primary">Search</div>
          </div>
        </div>
        <div className='w-full bg-base-200 my-5' >
          {
            searchData.length > 0 ? <div className='overflow-y-auto' style={{maxHeight : 350}}>
              {searchData.map((org : any) => <div 
                  className='flex items-center space-x-3 py-6 px-5 hover:bg-base-300 cursor-pointer'  key={org.id}
                  onClick={() => addOrg(org.name, org.id)}
                  >
                  <div className="avatar">
                      <div className="mask mask-squircle w-10 h-10">
                          <img src={org.logo} alt="Avatar" />
                      </div>
                  </div>
                  <div className='font-bold'>{org.name}</div>
              </div>
              )}
            </div>:<div className='h-full flex-c-c'>
            </div>
          }
        </div>
      </Modal>
      
      <div className="w-full mx-auto mt-8">
      <div className="bg-base-100 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Create Instructor</h2>

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
          <div>
            <h1 className='block text-gray-700 font-semibold mb-2'>Belongs to ( Organizations )</h1>
            <div className='p-3 w-full border-2 rounded-lg bg-base-200 flex items-center flex-wrap'>
              {
                data.selectedOrgs.map((org : any) => <div key={org.id} className="m-1 badge badge-primary  gap-1 rounded py-4 pl-3 pr-1">
                <p className='font-bold text-md'>
                  {org.name}
                </p>
                <svg onClick={_ => removeOrg(org.id)}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-4 h-4 stroke-current cursor-pointer"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </div>)
              }
              <div className='m-2 my-1' onClick={() => {
                // @ts-ignore
                document.getElementById('selectOrgModal')?.showModal()
              }}>
                <PlusIcon className='w-6 h-6 cursor-pointer hover:opacity-70' />
              </div>
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