import React, { FormEventHandler, useEffect, useState } from 'react'
import { useForm, usePage } from '@inertiajs/react'
import AppLayout from '@/Layouts/AppLayout'
import { Head, Link } from '@inertiajs/react'
import { NavigateIcon } from '@/Components/icons/icons'
import Breadcrumb from '@/Components/daisy/breadcrumb'
import Modal from '@/Components/daisy/modal'
import { XmarkIcon } from '@/Components/icons'
import { Checkpoint, Organization, PageProps, Student } from '@/types'

const _local = {
  q : '',
  searchBy : 'name',
  collection : 'organization'
}
const ViewOrganization = () => {
  const {student, searchData, showModal, isEmpty} = usePage<PageProps<{student : any, isEmpty : boolean, searchData:any[], showModal : boolean}>>().props
  console.log({searchData})

  const local : typeof _local  = JSON.parse(localStorage.getItem('rememberStudentAttach')?? JSON.stringify(_local))
  const [filter, setFilter ] = useState(local)
  const [showConfirm, setConfirm] = useState('')
  const [entityType, setEntityType] = useState('Organization')
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
    get(route('Student.show', {
      id:student.id,
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
        <Breadcrumb list={[{title : 'Home', href : '/dashboard'},{title : 'Student', href:'/student'}, {title : student.users.name, href: null}]}/>
        <details className="dropdown z-30">
          <summary className="m-1 btn pr-28 btn-primary">Actions</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li><a onClick={() => {
              localStorage.setItem('rememberStudentAttach', JSON.stringify({
                collection : 'organization',
                q : '',
                searchBy : 'name'
              }))
              submitSearch('organizations', false)
            }}>Add Organization</a></li>
            <li><a onClick={() => {
              localStorage.setItem('rememberStudentAttach', JSON.stringify({
                collection : 'student',
                q : '',
                searchBy : 'name'
              }))
              submitSearch('students', false)
            }}>Add Student</a></li>
            <li><a onClick={() => {
              localStorage.setItem('rememberStudentAttach', JSON.stringify({
                collection : 'checkpoint',
                q : '',
                searchBy : 'name'
              }))
              submitSearch('checkpoints', false)
            }}>Add Checkpoint</a></li>
            <li><Link href={route('student.showEdit',{id : student.id})}>Edit Student</Link></li>
            <li onClick={_ => {
              // @ts-ignore
              document.getElementById('deleteInstrucrorModal').showModal()
            }}><a className='text-red-600 hover:text-red-600'>Delete Student</a></li>
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
              <td>Qualification</td>
              <td>{student.qualification}</td>
            </tr>
          </tbody>
        </table>
      </div>
      {
        student.organizations.length>0 ?<>
          <h1 className='py-4 text-secondary font-extrabold'>Belongs to (Organization's)</h1>
          <Organizations organizations={student.organizations}/>
        </>:<></>
      }
      {
        student.checkpoints.length > 0 && <>
          <h1 className='py-4 text-secondary font-extrabold'>Checkpoints (Assigned)</h1>
          <Checkpoints checkpoints={student.checkpoints} />
        </>
      }
    </div>
  )
}


const Organizations = ({organizations} : {organizations : Organization[]}) => {
  return(
    <table className='table bg-base-100 shadow-md'>
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
  )
}

const Students = ({students} : {students : Student[]}) => {
  return(
    <table className='table bg-base-100 shadow-md'>
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
  )
}

const Checkpoints = ({checkpoints} : {checkpoints : Checkpoint[]}) => {
  return(
    <table className='table bg-base-100 shadow-md'>
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