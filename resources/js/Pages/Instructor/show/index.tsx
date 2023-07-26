import React, { FormEventHandler, useEffect, useState } from 'react'
import { useForm, usePage } from '@inertiajs/react'
import AppLayout from '@/Layouts/AppLayout'
import { Head, Link } from '@inertiajs/react'
import { NavigateIcon } from '@/Components/icons/icons'
import Breadcrumb from '@/Components/daisy/breadcrumb'
import Modal from '@/Components/daisy/modal'
import { XmarkIcon } from '@/Components/icons'
import { Checkpoint, Instructor, PageProps } from '@/types'
import { AttachEntityModal } from '@/Components/daisy/attachEntityModal'
import { StudentsTableView } from '@/Components/daisy/StudentsTableView'
import { OrganizationsTableView } from '@/Components/daisy/OrganizationTableView'
import { CheckpointsTableView } from '@/Components/daisy/CheckpointTableView'

const _local = {
  q : '',
  searchBy : 'name',
  collection : 'organization'
}
const ViewInstructor = () => {
  const { instructor, isEmpty, auth } = usePage<PageProps<{isEmpty : boolean, instructor : Instructor,}>>().props 
  // const local : typeof _local  = JSON.parse(localStorage.getItem('rememberInstructorAttach')?? JSON.stringify(_local))
  const { get, delete : deleteInstructorRequest} = useForm()
  const handleDeleteInstructor = () => {
    // organization.destroy
    deleteInstructorRequest('/instructor/'+instructor.id, {
      onSuccess : () => {
        console.log("organization deleted")
      },
      onError : (e) => console.log("Found an error ", e)
    })
  }


  if(isEmpty)
  return (
    <>
      <Head title="Instructors"/>
      <div className='min-h-screen flex-c-c text-3xl font-extrabold'>Instructor not found</div>
    </>
  )
  return (
    <>
      <Head title={instructor.users.name}/>
      <Modal id="deleteInstrucrorModal" title="Delete Organization">
        <h1>Do you really want to delete this Instructors?</h1>
        <div className='w-full flex justify-end'>
          <div onClick={handleDeleteInstructor}  className='btn btn-error m-2'>YES!</div>
          <button className='btn btn-ghost my-2'>CANCEL</button>
        </div>
      </Modal>
      <AttachEntityModal id={instructor.id}  routeName='instructor'/>

      <div className='w-full flex justify-between'>
        <Breadcrumb list={[{title : 'Home', href : '/dashboard'},{title : 'Instructor', href:'/instructor'}, {title : instructor.users.name, href: null}]}/>
        <Options id={instructor.id} />
      </div>
      <div className='flex-c-c mt-16'>
        <table className='table table-sm  bg-base-100 shadow-md'>
          <thead>
            <tr className='bg-primary'>
              <td className='font-extrabold text-lg text-base-100 '>Details</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{instructor.users.name}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>{instructor.users.gender??'Not Spcified'}</td>
            </tr>
            <tr>
              <td>Username</td>
              <td>{instructor.users.username}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{instructor.users.email}</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>{instructor.users.address}</td>
            </tr>
            <tr>
              <td>Contact</td>
              <td>{instructor.users.contact_number}</td>
            </tr>
            <tr>
              <td>Qualification</td>
              <td>{instructor.qualification}</td>
            </tr>
            <tr>
              <td>Access Validity Start</td>
              <td>{instructor.access_validity_start}</td>
            </tr>
            <tr>
              <td>Access Validity End</td>
              <td>{instructor.access_validity_end}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h1 className='py-4 text-secondary font-extrabold'>Photo Identification</h1>
        <div className='flex-r-b w-1/2'>
          <div>
            <img className='h-36' src={`/storage/instructor-photo-front/${instructor.photo_id_front}`} alt='Instructor Photo ID Front'/>
            <h1 className='w-full text-center my-3'>Front</h1>
          </div>
          <div>
            <img className='h-36' src={`/storage/instructor-photo-back/${instructor.photo_id_back}`} alt='Instructor Photo ID Front'/>
            <h1 className='w-full text-center my-3'>Back</h1>
          </div>
        </div>
      </div>
      <StudentsTableView students={instructor.students} 
        canDetach={(auth.role == 'admin' || auth.role =='organization') ? true : false}
        collection={{
          name : 'instructor',
          id : instructor.id
        }}
      />
      <OrganizationsTableView organizations={instructor.organizations} 
        canDetach={(auth.role == 'admin' || auth.role =='organization') ? true : false}
        collection={{
          name : 'instructor',
          id : instructor.id
        }}
      />
      <CheckpointsTableView checkpoints={instructor.checkpoints} 
        canDetach={(auth.role == 'admin' || auth.role =='organization') ? true : false}
        collection={{
          name : 'instructor',
          id : instructor.id
        }}
      /> 
    </>
  )
}
const Options = ({id}:{id : any}) => {
  const { role } = usePage<PageProps>().props.auth
  const attachEntity = (collection:string)=>{
    get(route('instructor.show', {
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
      {role == 'admin' &&
        <li><a onClick={() => attachEntity('organization')}>Attach Organization</a></li>}
      {(role == 'admin' || role =='organization') &&
        <li><a onClick={() => attachEntity('student')}>Attach Student</a></li>}
      {(role == 'admin' || role =='organization') &&
        <li><a onClick={() => attachEntity('checkpoint')}>Attach Checkpoint</a></li>
      }
      <li><Link href={route('instructor.showEdit',{id})}>Edit Instructor</Link></li>
      <li onClick={_ => {
        // @ts-ignore
        document.getElementById('deleteInstrucrorModal').showModal()
      }}><a className='text-red-600 hover:text-red-600'>Delete Instructor</a></li>
    </ul>
  </details>
  )
}


const Index = () => {
  return <AppLayout
    AdminComponent={<ViewInstructor />}
    OrganizationComponent={<ViewInstructor />}
    >

  </AppLayout>
}
export default Index