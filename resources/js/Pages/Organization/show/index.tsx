import React, { useEffect, useState } from 'react'
import { useForm, usePage } from '@inertiajs/react'
import AppLayout from '@/Layouts/AppLayout'
import { Head, Link } from '@inertiajs/react'
import { NavigateIcon } from '@/Components/icons/icons'
import Breadcrumb from '@/Components/daisy/breadcrumb'
import Modal from '@/Components/daisy/modal'
import { Checkpoint, Instructor, Organization, PageProps, Student } from '@/types'
import { AttachEntityModal } from '@/Components/daisy/attachEntityModal'
import { InstructorsTableView } from '@/Components/daisy/InstructorTableView'
import { StudentsTableView } from '@/Components/daisy/StudentsTableView'
import { CheckpointsTableView } from '@/Components/daisy/CheckpointTableView'

const ViewOrganization = () => {
  const { isFound, organization, auth} = usePage<PageProps<{organization : Organization, isFound : boolean, logoUrl : string, searchInstructor: any[]}>>().props
  console.log({organization})
  const { delete : deleteOrg} = useForm()
  const handleDeleteOrg = () => {
    deleteOrg('/organization/'+organization.id, {
      onSuccess : () => {
        console.log("organization deleted")
      },
      onError : (e) => console.log("Found an error ", e)
    })
  }


  if(!isFound)
  return (
    <div>
      <Head title="Organization"/>
      <div className='min-h-screen flex-c-c text-3xl font-extrabold'>Organization not found</div>
    </div>
  )
  return (
    <div>
      <Modal id="deleteOrgModal" title="Delete Organization">
        <h1>Do you really want to delete this organization?</h1>
        <div className='w-full flex justify-end'>
          <div onClick={handleDeleteOrg}  className='btn btn-error m-2'>YES!</div>
          <button className='btn btn-ghost my-2'>CANCEL</button>
        </div>
      </Modal>
      <AttachEntityModal id={organization.id}  routeName='organization'/>
      <div className='w-full flex justify-between'>
        <Breadcrumb list={[{title : 'Home', href : '/dashboard'},{title : 'Organizations', href:'/organization'}, {title : organization.name, href: null}]}/>
        <Options id={organization.id} />
      </div>
      <div className='flex-c-c'>
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src={`/storage/organization-logo/${organization.logo}`} />
          </div>
        </div>
        <h1 className='py-2 text-secondary font-extrabold'>{organization.name}</h1>
        <table className='table table-sm  bg-base-100 shadow-md'>
          <thead>
            <tr className='bg-primary'>
              <td className='font-extrabold text-lg text-base-100 '>Details</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr className=''>
              <td>Name</td>
              <td>{organization.name}</td>
            </tr>
            <tr>
              <td>Username</td>
              <td>{organization.users.username}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{organization.users.email}</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>{organization.users.address}</td>
            </tr>
            <tr>
              <td>Contact</td>
              <td>{organization.users.contact_number}</td>
            </tr>
          </tbody>
        </table>
      </div>
        <InstructorsTableView instructors={organization.instructors} 
          canDetach={auth.role == 'admin' ? true : false}
          collection={{
            name : 'organization',
            id : organization.id
          }}
        />
        <StudentsTableView students={organization.students} 
          canDetach={auth.role == 'admin' ? true : false}
          collection={{
            name : 'organization',
            id : organization.id
          }}
        />
        <CheckpointsTableView checkpoints={organization.checkpoints} 
          canDetach={auth.role == 'admin' ? true : false}
          collection={{
            name : 'organization',
            id : organization.id
          }}
        />

    </div>
  )
}

const Options = ({id}:{id : any}) => {
  const attachEntity = (collection:string)=>{
    get(route('organization.show', {
      id,
      collection,
      searchBy : 'name',
      q : ''
    }))
  }
  const { get } = useForm()
  return(
  <details className="dropdown z-30">
    <summary className="m-1 btn pr-28 btn-primary">Actions</summary>
    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
      <li><a onClick={() => attachEntity('instructor')}>Attach Instructor</a></li>
      <li><a onClick={() => attachEntity('student')}>Attach Student</a></li>
      <li><a onClick={() => attachEntity('checkpoint')}>Attach Checkpoint</a></li>
      <li><Link href={route('organization.showEdit',{id})}>Edit Organization</Link></li>
      <li onClick={_ => {
        // @ts-ignore
        document.getElementById('deleteOrgModal').showModal()
      }}><a className='text-red-600 hover:text-red-600'>Delete Organization</a></li>
    </ul>
  </details>
  )
}

const Index = () => {

  return(
    <AppLayout
      AdminComponent={<ViewOrganization />}
    >
    </AppLayout>
  )
}

export default Index