import React, { FormEventHandler, useEffect, useState } from 'react'
import { useForm, usePage } from '@inertiajs/react'
import AppLayout from '@/Layouts/AppLayout'
import { Head, Link } from '@inertiajs/react'
import { NavigateIcon } from '@/Components/icons/icons'
import Breadcrumb from '@/Components/daisy/breadcrumb'
import Modal from '@/Components/daisy/modal'
import { XmarkIcon } from '@/Components/icons'
import { Instructor, PageProps } from '@/types'
import { AttachEntityModal } from '@/Components/daisy/attachEntityModal'

const _local = {
  q : '',
  searchBy : 'name',
  collection : 'organization'
}
const ViewInstructor = () => {

  const { instructor, isEmpty } = usePage<PageProps<{isEmpty : boolean, instructor : Instructor,}>>().props 

  const local : typeof _local  = JSON.parse(localStorage.getItem('rememberInstructorAttach')?? JSON.stringify(_local))
  const [filter, setFilter ] = useState(local)

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
            <tr className=''>
              <td>Name</td>
              <td>{instructor.users.name}</td>
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
          </tbody>
        </table>
      </div>
      {
        instructor.students && <Students students={instructor.students}/>
      }
      {
        instructor.organization && <Organizations organizations={instructor.organization}/>
      }
      {
        instructor.checkpoints && <Checkpoints checkpoints={instructor.checkpoints}/>
      }
    </>
  )
}
const Options = ({id}:{id : any}) => {
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
      <li><a onClick={() => attachEntity('organization')}>Attach Organization</a></li>
      <li><a onClick={() => attachEntity('student')}>Attach Student</a></li>
      <li><a onClick={() => attachEntity('checkpoint')}>Attach Checkpoint</a></li>
      <li><Link href={route('instructor.showEdit',{id})}>Edit Instructor</Link></li>
      <li onClick={_ => {
        // @ts-ignore
        document.getElementById('deleteInstrucrorModal').showModal()
      }}><a className='text-red-600 hover:text-red-600'>Delete Instructor</a></li>
    </ul>
  </details>
  )
}

const Organizations = ({organizations} : {organizations : any[]}) => {
  return(
    <>
      <h1 className='py-4 text-secondary font-extrabold'>Organizations</h1>
      {organizations.length > 0 ?<table className='table bg-base-100 shadow-md'>
        <thead>
          <tr className='text-base-100 bg-primary'>
            <td className='font-extrabold text-lg '>Name</td>
            <td className='font-extrabold text-lg '>Email</td>
            <td className='font-extrabold text-lg '>Address</td>
            <td className='font-extrabold text-lg '></td>
          </tr>
        </thead>
        <tbody>
          {
            organizations.map((organization : any, index) => <tr key={organization.id}  className='hover'>
              <td><div className="flex items-center space-x-3 ml-3 my-3">
                      <div className="avatar">
                          <div className="mask mask-squircle w-10 h-10">
                              <img src={organization.logo} alt="Avatar" />
                          </div>
                      </div>
                      <div>
                          <div className="font-bold">{organization.name}</div>
                      </div>
                  </div></td>
              <td>{organization.users.email}</td>
              <td>{organization.users.address}</td>
              <td>
                <Link href={route('organization.show', {id : organization.id})}>
                  <NavigateIcon className="w-6 h-6 hover:opacity-50"/>
                </Link>
              </td>
            </tr>)
          }
        </tbody>
      </table>
      :
      <div className='w-full border-2 shadow-md'>
        <div className='bg-primary h-16 w-full'></div>
        <div className='w-full flex-c-c h-32 font-bold text-2xl'>
          No Organizations
        </div>
      </div>
      }
    </>
  )
}

const Students = ({students} : {students : any[]}) => {
  return(
    <>
      <h1 className='py-4 text-secondary font-extrabold'>Students</h1>
      {students.length > 0 ?<table className='table bg-base-100 shadow-md'>
        <thead>
        <tr className='text-base-100 bg-primary'>
            <td className='font-extrabold text-lg'>Name</td>
            <td className='font-extrabold text-lg'>Email</td>
            <td className='font-extrabold text-lg'>Address</td>
            <td className='font-extrabold text-lg'></td>
          </tr>
        </thead>
        <tbody>
          {
            students.map((student : any, index) => <tr key={student.id}  className='hover'>
                <td>{student.users.name}</td>
                <td>{student.users.email}</td>
                <td>{student.users.address}</td>
              <td>
                <Link href={route('student.index')}>
                  <NavigateIcon className="w-6 h-6 hover:opacity-50"/>
                </Link>
              </td>
            </tr>)
          }
        </tbody>
      </table>
      :
      <div className='w-full border-2 shadow-md'>
        <div className='bg-primary h-16 w-full'></div>
        <div className='w-full flex-c-c h-32 font-bold text-2xl'>
          No Students
        </div>
      </div>  
    }
    </>
  )
}

const Checkpoints = ({checkpoints} : {checkpoints : any[]}) => {
  return(
    <>
      <h1 className='py-4 text-secondary font-extrabold'>Checkpoints</h1>
      {checkpoints.length > 0 ? <table className='table bg-base-100 shadow-md'>
        <thead>
        <tr className='text-base-100 bg-primary'>
            <td className='font-extrabold text-lg '>Name</td>
            <td className='font-extrabold text-lg '>Validity</td>
            <td className='font-extrabold text-lg '>Grades</td>
            <td className='font-extrabold text-lg '></td>
          </tr>
        </thead>
        <tbody>
          {
            checkpoints.map((checkpoint : any, index) => <tr key={checkpoint.id}  className='hover'>
                <td>{checkpoint.name}</td>
                <td>{checkpoint.validity_period}</td>
                <td>{checkpoint.achieved_gradepoints}/{checkpoint.total_gradepoints}</td>
              <td>
                <Link href={route('checkpoint.index')}>
                  <NavigateIcon className="w-6 h-6 hover:opacity-50"/>
                </Link>
              </td>
            </tr>)
          }
        </tbody>
      </table>
      :
      <div className='w-full border-2 shadow-md'>
        <div className='bg-primary h-16 w-full'></div>
        <div className='w-full flex-c-c h-32 font-bold text-2xl'>
          No Checkpoints
        </div>
      </div>
      }
    </>
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