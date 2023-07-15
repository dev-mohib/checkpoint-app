import React, { FormEventHandler, useEffect, useState } from 'react'
import { useForm, usePage } from '@inertiajs/react'
import AppLayout from '@/Layouts/AppLayout'
import { Head, Link } from '@inertiajs/react'
import { NavigateIcon } from '@/Components/icons/icons'
import Breadcrumb from '@/Components/daisy/breadcrumb'
import Modal from '@/Components/daisy/modal'
import { XmarkIcon } from '@/Components/icons'
import { Checkpoint, Instructor, Organization, PageProps, Student } from '@/types'

const _local = {
  q : '',
  searchBy : 'name',
  collection : 'organization'
}
const ViewOrganization = () => {
  
  const { checkpoint, isEmpty, searchData, showModal } = usePage<PageProps<{
    checkpoint : Checkpoint,
    isEmpty : boolean,
    searchData : any[],
    showModal : boolean
  }>>().props

  console.log({checkpoint})

  const local : typeof _local  = JSON.parse(localStorage.getItem('rememberInstructorAttach')?? JSON.stringify(_local))
  const [filter, setFilter ] = useState(local)
  const [showConfirm, setConfirm] = useState('')
  const [entityType, setEntityType] = useState('Organization')
  const {data, get, processing, delete : deleteOrg} = useForm()
  const handleDeleteOrg = () => {
    // organization.destroy
    deleteOrg('/instructor/'+checkpoint.id, {
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
      localStorage.setItem('rememberCheckpointAttach', JSON.stringify(filter))
    get(route('checkpoint.show', {
      id:checkpoint.id,
      searchBy : filter.searchBy,
      collection : collection ? collection : filter.collection + 's',
      q: filter.q
    }))
  }
  const addOrganization = () => {

  }
  if(isEmpty)
  return (
    <div>
      <Head title="Instructors"/>
      <div className='min-h-screen flex-c-c text-3xl font-extrabold'>Instructor not found</div>
    </div>
  )
  return (
    <div>
      <Head title={checkpoint.name}/>
      <Modal id="deleteCheckpointModal" title="Delete Checkpoint">
        <h1>Do you really want to delete this Checkpoint?</h1>
        <div className='w-full flex justify-end'>
          <div onClick={handleDeleteOrg}  className='btn btn-error m-2'>YES!</div>
          <button className='btn btn-ghost my-2'>CANCEL</button>
        </div>
      </Modal>
      <Modal id={"AttachEntityModal"} title={`Select ${filter.collection}`} className='w-11/12 max-w-5xl'>
      {showConfirm?
      <div className='flex flex-col w-full py-10 px-10'>
        <h1>Do you want to Add this {entityType}?</h1>
        <div className='w-full flex justify-end'>
          <div onClick={addOrganization}  className='btn btn-success m-2 cursor-pointer'>YES!</div>
          <div onClick={() => setConfirm('')}  className='btn btn-ghost my-2 cursor-pointer'>CANCEL</div>
        </div>
      </div>
      :
      <>
        <div className="join my-5 border-2 border-primary">
          <div className='input-group flex-r-c'>
            <input value={filter.q} onChange={(e) => setFilter({...filter, q : e.target.value})}  className="input input-bordered join-item" placeholder="Search..."/>
            <div onClick={() => setFilter({...filter, q : ''})}  className='btn bg-base-100 hover:bg-base-100 join-item'>
                {/* <ClearIcon className="w-4 h-4"/> */}
                <XmarkIcon/>
              </div>
          </div>
          <select className="select select-bordered join-item capitalize" value={filter.searchBy} onChange={(e) => setFilter({...filter, searchBy : e.target.value})}>
              <option disabled selected value="all">Search By</option>
              <option value="name" className='capitalize'>{filter.collection} name</option>
              <option value="id" className='capitalize'> {filter.collection} ID</option>
          </select>
          <div className="indicator ">
              <div
                onClick={() => submitSearch()}
                className="btn join-item btn-primary">Search</div>
          </div>
        </div>
        <div className='w-full bg-base-200 my-5' >
          {
            searchData.length > 0 ? <div className='overflow-y-auto' style={{maxHeight : 350}}>
              {searchData.map((org : any) => <div 
                  className='flex items-center space-x-3 py-6 px-5 hover:bg-base-300 cursor-pointer'  key={org.id}
                  onClick={() => setConfirm(org.id)}
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
      </>}
      </Modal>

      <div className='w-full flex justify-between'>
        <Breadcrumb list={[{title : 'Home', href : '/dashboard'},{title : 'Checkpoint', href:'/checkpoint'}, {title : checkpoint.name, href: null}]}/>
        <details className="dropdown z-30">
          <summary className="m-1 btn pr-28 btn-primary">Actions</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li><a onClick={() => {
              localStorage.setItem('rememberCheckpointAttach', JSON.stringify({
                collection : 'organization',
                q : '',
                searchBy : 'name'
              }))
              submitSearch('organizations', false)
            }}>Add Organization</a></li>
            <li><a onClick={() => {
              localStorage.setItem('rememberCheckpointAttach', JSON.stringify({
                collection : 'student',
                q : '',
                searchBy : 'name'
              }))
              submitSearch('students', false)
            }}>Add Student</a></li>
            <li><a onClick={() => {
              localStorage.setItem('rememberCheckpointAttach', JSON.stringify({
                collection : 'checkpoint',
                q : '',
                searchBy : 'name'
              }))
              submitSearch('checkpoints', false)
            }}>Add Checkpoint</a></li>
            <li><Link href={route('instructor.showEdit',{id : checkpoint.id})}>Edit Instructor</Link></li>
            <li onClick={_ => {
              // @ts-ignore
              document.getElementById('deleteInstrucrorModal').showModal()
            }}><a className='text-red-600 hover:text-red-600'>Delete Instructor</a></li>
          </ul>
        </details>
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
              <td>{checkpoint.name}</td>
            </tr>
            <tr>
              <td>Description</td>
              <td>{checkpoint.description}</td>
            </tr>
            <tr>
              <td>Status</td>
              <td>{checkpoint.status}</td>
            </tr>
            <tr>
              <td>Total Gradepints</td>
              <td>{checkpoint.total_gradepoints}</td>
            </tr>
            <tr>
              <td>Achieved</td>
              <td>{checkpoint.achieved_gradepoints}</td>
            </tr>
            <tr>
              <td>Validity Period</td>
              <td>{checkpoint.validity_period}</td>
            </tr>
            <tr>
              <td>Instructor Input</td> 
              <td>{checkpoint.instructor_input}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h1 className='py-4 text-black font-extrabold text-3xl mt-4 font-sans'>Assigned To</h1>
      

      {
        checkpoint?.organizations && <OrganizationInfo organization={checkpoint.organizations}/>
      }
      
      {
        checkpoint?.instructors && <InstructorInfo instructor={checkpoint.instructors} />
      }
      {
        checkpoint?.students && <StudentInfo student={checkpoint.students}/>
      }
    </div>
  )
}


const OrganizationInfo = ({organization} : {organization : Organization}) => {
  return(
    <>
    <h1 className='py-4 text-secondary font-extrabold'>Organization</h1>
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
              <td>Email</td>
              <td>{organization.users.email}</td>
            </tr>
            <tr>
              <td>Contact Number</td>
              <td>{organization.users.contact_number}</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>{organization.users.address}</td>
            </tr>
          </tbody>
    </table>
    </>
  )
}

const StudentInfo = ({student} : {student : Student}) => {
  return(
    <>
    <h1 className='py-4 text-secondary font-extrabold'>Student</h1>
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
              <td>Email</td>
              <td>{student.users.email}</td>
            </tr>
            <tr>
              <td>Contact Number</td>
              <td>{student.users.contact_number}</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>{student.users.address}</td>
            </tr>
          </tbody>
    </table>
    </>
  )
}

const InstructorInfo = ({instructor} : {instructor : Instructor}) => {
  return(
    <>
    <h1 className='py-4 text-secondary font-extrabold'>Instructor</h1>
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
              <td>Email</td>
              <td>{instructor.users.email}</td>
            </tr>
            <tr>
              <td>Contact Number</td>
              <td>{instructor.users.contact_number}</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>{instructor.users.address}</td>
            </tr>
          </tbody>
    </table>
    </>
  )
}

const Index = () => {
  return(
    <AppLayout
      AdminComponent={<ViewOrganization/>}
      OrganizationComponent={<ViewOrganization />}
      InstructorComponent={<ViewOrganization />}
      StudentComponent={<ViewOrganization />}
    >

    </AppLayout>
  )
}
export default Index