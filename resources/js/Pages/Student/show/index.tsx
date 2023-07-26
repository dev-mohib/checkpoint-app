import React, { FormEventHandler, useEffect, useState } from 'react'
import { useForm, usePage } from '@inertiajs/react'
import AppLayout from '@/Layouts/AppLayout'
import { Head, Link } from '@inertiajs/react'
import { NavigateIcon } from '@/Components/icons/icons'
import Breadcrumb from '@/Components/daisy/breadcrumb'
import Modal from '@/Components/daisy/modal'
import { XmarkIcon } from '@/Components/icons'
import { Checkpoint, Organization, PageProps, Student } from '@/types'
import { AttachEntityModal } from '@/Components/daisy/attachEntityModal'
import { OrganizationsTableView } from '@/Components/daisy/OrganizationTableView'
import { CheckpointsTableView } from '@/Components/daisy/CheckpointTableView'
import { InstructorsTableView } from '@/Components/daisy/InstructorTableView'

const _local = {
  q : '',
  searchBy : 'name',
  collection : 'organization'
}
const ViewOrganization = () => {
  const {student, searchData, showModal, isEmpty, auth} = usePage<PageProps<{student : Student, isEmpty : boolean, searchData:any[], showModal : boolean}>>().props
  console.log({student})

  const local : typeof _local  = JSON.parse(localStorage.getItem('rememberStudentAttach')?? JSON.stringify(_local))
  const [filter, setFilter ] = useState(local)

  const {data, get, processing, delete : deleteOrg} = useForm()
  const handleDeleteOrg = () => {
    // organization.destroy
    deleteOrg('/Student/'+student.id, {
      onSuccess : () => {
        console.log("organization deleted")
      },
      onError : (e) => console.log("Found an error ", e)
    })
  }

  useEffect(() => {
    if(showModal){
      // @ts-ignore
      document.getElementById('AttachEntityModal').showModal()
    }
  },[])
  const submitSearch = ( collection='',isLocalSave = true) => {
    if(isLocalSave)
      localStorage.setItem('rememberStudentAttach', JSON.stringify(filter))
    get(route('student.show', {
      id:student.id,
      searchBy : filter.searchBy,
      collection : collection ? collection : filter.collection + 's',
      q: filter.q
    }))
  }

  if(isEmpty)
  return (
    <div>
      <Head title="Students"/>
      <div className='min-h-screen flex-c-c text-3xl font-extrabold'>Student not found</div>
    </div>
  )
  return (
    <div>
      <Head title={student.users.name}/>
      <Modal id="deleteInstrucrorModal" title="Delete Organization">
        <h1>Do you really want to delete this Students?</h1>
        <div className='w-full flex justify-end'>
          <div onClick={handleDeleteOrg}  className='btn btn-error m-2'>YES!</div>
          <button className='btn btn-ghost my-2'>CANCEL</button>
        </div>
      </Modal>
      <AttachEntityModal id={student.id} routeName='student'/>

      <div className='w-full flex justify-between'>
        <Breadcrumb list={[{title : 'Home', href : '/dashboard'},{title : 'Student', href:'/student'}, {title : student.users.name, href: null}]}/>
        <Options id={student.id}/>
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
              <td>{student.users.name}</td>
            </tr>
            <tr>
              <td>Username</td>
              <td>{student.users.username}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{student.users.email}</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>{student.users.address}</td>
            </tr>
            <tr>
              <td>Contact</td>
              <td>{student.users.contact_number}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>{student.users.gender}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <OrganizationsTableView organizations={student.organizations} 
        canDetach={(auth.role == 'admin' || auth.role =='organization' || auth.role == 'instructor') ? true : false}
        collection={{
          name : 'student',
          id : student.id
        }}
      />
      <CheckpointsTableView checkpoints={student.checkpoints} 
        canDetach={(auth.role == 'admin' || auth.role =='organization' || auth.role == 'instructor') ? true : false}
        collection={{
          name : 'student',
          id : student.id
        }}
      /> 
      <InstructorsTableView instructors={student.instructors} 
        canDetach={(auth.role == 'admin' || auth.role =='organization' || auth.role == 'instructor') ? true : false}
        collection={{
          name : 'student',
          id : student.id
        }}
      />
    </div>
  )
}

const Options = ({id}:{id : any}) => {
  const { role } = usePage<PageProps>().props.auth
  const attachEntity = (collection:string)=>{
    get(route('student.show', {
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
        <li><a onClick={() => attachEntity('organization')}>Attach Organization</a></li>
      }
      {(role == 'admin' || role =='organization') &&
        <li><a onClick={() => attachEntity('instructor')}>Attach Instructor</a></li>
      }
      {(role == 'admin' || role =='organization' || role =='instructor') &&
        <li><a onClick={() => attachEntity('checkpoint')}>Attach Checkpoint</a></li>}
      <li><Link href={route('student.showEdit',{id})}>Edit Student</Link></li>
      <li onClick={_ => {
        // @ts-ignore
        document.getElementById('deleteInstrucrorModal').showModal()
      }}><a className='text-red-600 hover:text-red-600'>Delete Instructor</a></li>
    </ul>
  </details>
  )
}

const Index = () => {

  return(
  <AppLayout
    AdminComponent={<ViewOrganization />}
    OrganizationComponent={<ViewOrganization />}
    InstructorComponent={<ViewOrganization />}
  >

  </AppLayout>)
}
export default Index