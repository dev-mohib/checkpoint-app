import AppLayout from '@/Layouts/AppLayout'
import { Head } from '@inertiajs/react'
import React from 'react'

const ViewOrganization = ({organization, isEmpty, activeMenu, title} : any) => {
  console.log({organization, isEmpty})

  if(isEmpty)
  return (
    <AppLayout activeMenu={activeMenu} title={title}>
      <Head title="Organization"/>
      <div className='min-h-screen flex-c-c text-3xl font-extrabold'>Organization not found</div>
    </AppLayout>
  )
  return (
    <AppLayout activeMenu={activeMenu} title={title}>
      <Head title={organization.name}/>
      <div className='min-h-screen'>
      <div className='w-full flex justify-end'>
        <Options />
      </div>
      <div className='flex-c-c'>
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src={organization.logo?organization.logo: '/laptop.jpg'} />
          </div>
        </div>
        <h1 className='py-2 text-secondary font-extrabold'>{organization.name}</h1>
        <table className='table bg-base-100'>
          <thead>
            <tr>
              <td>Title</td>
              <td>Value</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{organization.name}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{organization.email}</td>
            </tr>
            <tr>
              <td>Created At</td>
              <td>{organization.created_at.split(' ')[0]}</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <h1 className='py-4 text-secondary font-extrabold'>Instructos</h1>
      <Instructors />

      <h1 className='py-4 text-secondary font-extrabold'>Students</h1>
      <Students />

      <h1 className='py-4 text-secondary font-extrabold'>Checkpoints</h1>
      <Checkpoints />
      </div>
    </AppLayout>
  )
}


const Options = () => {
  return(
  <details className="dropdown z-30">
    <summary className="m-1 btn pr-28 btn-primary">Actions</summary>
    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
      <li><a>Create Instructor</a></li>
      <li><a>Create Student</a></li>
      <li><a>Edit Organization</a></li>
      <li className='text-red-600'><a>Delete Organization</a></li>
    </ul>
  </details>
  )
}
const Instructors = () => {
  return(
    <table className='table bg-base-100'>
          <thead>
            <tr>
              <td>Title</td>
              <td>Value</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>Test</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>Test</td>
            </tr>
            <tr>
              <td>Created At</td>
              <td>Test</td>
            </tr>
          </tbody>
        </table>
  )
}

const Students = () => {
  return(
    <table className='table bg-base-100'>
          <thead>
            <tr>
              <td>Title</td>
              <td>Value</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>Test</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>Test</td>
            </tr>
            <tr>
              <td>Created At</td>
              <td>Test</td>
            </tr>
          </tbody>
        </table>
  )
}

const Checkpoints = () => {
  return(
    <table className='table bg-base-100'>
          <thead>
            <tr>
              <td>Title</td>
              <td>Value</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>Test</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>Test</td>
            </tr>
            <tr>
              <td>Created At</td>
              <td>Test</td>
            </tr>
          </tbody>
        </table>
  )
}

export default ViewOrganization