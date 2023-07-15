import React, { useEffect } from 'react'
import { useForm, usePage } from '@inertiajs/react'
import AppLayout from '@/Layouts/AppLayout'
import { Head, Link } from '@inertiajs/react'
import { NavigateIcon } from '@/Components/icons/icons'
import Breadcrumb from '@/Components/daisy/breadcrumb'
import Modal from '@/Components/daisy/modal'
import { Checkpoint, Instructor, Organization, PageProps, Student } from '@/types'
const ViewOrganization = () => {
  const { isFound, organization} = usePage<PageProps<{organization : Organization, isFound : boolean}>>().props
  const {data, errors, processing, delete : deleteOrg} = useForm()
  const handleDeleteOrg = () => {
    // organization.destroy
    deleteOrg('/organization/'+organization.id, {
      onSuccess : () => {
        console.log("organization deleted")
      },
      onError : (e) => console.log("Found an error ", e)
    })
  }

  useEffect(() => {
    console.log({deleteOrgData : data})
  },[processing, errors])
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
      <div className='w-full flex justify-between'>
        <Breadcrumb list={[{title : 'Home', href : '/dashboard'},{title : 'Organizations', href:'/organization'}, {title : organization.name, href: null}]}/>
        <Options id={organization.id} />
      </div>
      <div className='flex-c-c'>
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src={organization.logo?organization.logo: '/laptop.jpg'} />
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
      {
        organization.instructors && <Instructors instructors={organization.instructors} />
      }
      {
        organization.students && <Students students={organization.students}/>
      }
      {
        organization.checkpoints && <Checkpoints checkpoints={organization.checkpoints}/>
      }
    </div>
  )
}


const Options = ({id}:any) => {
  return(
  <details className="dropdown z-30">
    <summary className="m-1 btn pr-28 btn-primary">Actions</summary>
    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
      <li><a>Add Instructor</a></li>
      <li><a>Add Student</a></li>
      <li><a>Add Checkpoint</a></li>
      <li><Link href={route('organization.showEdit',{id})}>Edit Organization</Link></li>
      <li onClick={_ => {
        // @ts-ignore
        document.getElementById('deleteOrgModal').showModal()
      }}><a className='text-red-600 hover:text-red-600'>Delete Organization</a></li>
    </ul>
  </details>
  )
}
const Instructors = ({instructors} : {instructors : Instructor[]}) => {

  if(instructors.length > 0)
  return(
    <>
      <h1 className='py-4 text-secondary font-extrabold'>Instructors</h1>
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
                instructors.map((instructor : any, index) => <tr key={instructor.id}  className='hover'>
                  <td>{instructor.users.name}</td>
                  <td>{instructor.users.email}</td>
                  <td>{instructor.users.address}</td>
                  <td>
                    <Link href={route('instructor.show', {id : instructor.id})}>
                      <NavigateIcon className="w-6 h-6 hover:opacity-50"/>
                    </Link>
                  </td>
                </tr>)
              }
            </tbody>
      </table>
    </>
  )
}

const Students = ({students} : {students : Student[]}) => {
  if(students.length>0)
  return(
    <>
      <h1 className='py-4 text-secondary font-extrabold'>Students</h1>
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
    </>
  )
}

const Checkpoints = ({checkpoints} : {checkpoints : Checkpoint[]}) => {
  return(
    <>
      <h1 className='py-4 text-secondary font-extrabold'>Checkpoints</h1>
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
    </>
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