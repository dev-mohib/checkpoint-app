import React, { FormEventHandler, useEffect, useState } from 'react'
import { useForm, usePage } from '@inertiajs/react'
import AppLayout from '@/Layouts/AppLayout'
import { Head, Link } from '@inertiajs/react'
import Breadcrumb from '@/Components/daisy/breadcrumb'
import Modal from '@/Components/daisy/modal'
import { XmarkIcon } from '@/Components/icons'
import { Checkpoint, Instructor, Organization, PageProps, Student } from '@/types'
import { AttachEntityModal } from '@/Components/daisy/attachEntityModal'
import { EmptyTableBox } from '@/Components/daisy/EmptyTableBox'

const _local = {
  q : '',
  searchBy : 'name',
  collection : 'organization'
}
const ViewOrganization = () => {
  
  const { checkpoint, isEmpty, showModal } = usePage<PageProps<{
    checkpoint : Checkpoint,
    isEmpty : boolean,
    showModal : boolean
  }>>().props


  const local : typeof _local  = JSON.parse(localStorage.getItem('rememberInstructorAttach')?? JSON.stringify(_local))
  const [filter, setFilter ] = useState(local)
  const { get, delete : deleteOrg} = useForm()
  const handleDeleteOrg = () => {
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

  if(isEmpty)
  return (
    <div>
      <Head title="Instructors"/>
      <div className='min-h-screen flex-c-c text-3xl font-extrabold'>Instructor not found</div>
    </div>
  )

  const CompletionRow = () => (
    <>
      <tr>
        <td>Validity Period</td>
        <td>{checkpoint.validity_period}</td>
      </tr>
      <tr>
        <td>Badge</td>
        <td>
          <img src={`/storage/checkpoint-general/default.jpg`} className="h-20 cursor-pointer" />
        </td>
      </tr>
      <tr>
        <td>Digital Certificate</td>
        <img src={`/storage/checkpoint-general/default.jpg`} className="h-20 ml-3 my-2 cursor-pointer" />
      </tr>
    </>
  )

  const GradeBasedRow = () => (
    <>
      <tr>
        <td>Total Gradepoints</td>
        <td>{checkpoint.total_gradepoints??100}</td>
      </tr>
      <tr>
        <td>
          Achieved Gradepoints
        </td>
        <td>{checkpoint.achieved_gradpoints?checkpoint.achieved_gradpoints:<span className='text-gray-400'>Not Added</span>}</td>
      </tr>  
    </>
  )

  const Slider = ({
    path = 'checkpoint-general', 
    images = []} : 
    {path? :string, images : string[]}
    ) => {
      console.log({images})
    return (
      <div className='w-96 mt-10'>
      <h1 className='p-3 my-4 bg-primary text-base-100 font-extrabold text-lg'>Images</h1>
      {images.length > 0 ?<>
        <div className="carousel w-96">
            {images.map((image, i) => <div key={i}  id={"item"+i} className="carousel-item w-full">
              <img src={`/storage/${path}/${image}`} className="w-96" />
            </div>) }
          </div> 
          <div className="flex justify-center w-full py-2 gap-2 bg-primary">
            {
              images.map((l,i) => <a key={i}  href={"#item"+i} className="btn btn-xs">{i+1}</a> )
            }
          </div>
      </>:<EmptyTableBox text='Not Uploaded' />}
      </div>
    )
  }
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
      <AttachEntityModal id={checkpoint.id} routeName='checkpoint'/>

      <div className='w-full flex justify-between'>
        <Breadcrumb list={[{title : 'Home', href : '/dashboard'},{title : 'Checkpoint', href:'/checkpoint'}, {title : checkpoint.name, href: null}]}/>
        <Options id={checkpoint.id}/>
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
              <td>Instructor Input</td> 
              <td>{checkpoint.instructor_input ? checkpoint.instructor_input : <span className='text-gray-400'>Not Added</span>}</td>
            </tr>
            <tr>
              <td>Type</td>
              <td>
                <p className={`${checkpoint.type == 'Completion' ? 'text-blue-500' :checkpoint.type ==  'General' ? 'text-green-500' : 'text-purple-600'} font-bold`}>  
                  {checkpoint.type}
                </p>
              </td>
            </tr> 
            {
            checkpoint.type == 'Completion' ? <CompletionRow />
            :checkpoint.type == 'Grade Based' ? <GradeBasedRow />: null
          }
          </tbody>
        </table>
      </div>
      <Slider images={['default.jpg', 'default.jpg', 'default.jpg']} />
      <h1 className='py-4 text-black font-extrabold text-3xl mt-4 font-sans'>Relationships</h1>
      
      <h1 className='py-4 text-secondary font-extrabold'>Belongs To (Organization)</h1>
      {
        checkpoint?.organizations ? <OrganizationInfo organization={checkpoint.organizations}/>
        : <EmptyTableBox />
      }
      <h1 className='py-4 text-secondary font-extrabold'>Associated With (Instructor)</h1>
      {
        checkpoint?.instructors ? <InstructorInfo instructor={checkpoint.instructors} />
        :<EmptyTableBox />
      }
      <h1 className='py-4 text-secondary font-extrabold'>Assigned To (Student)</h1>
      {
        checkpoint?.students ? <StudentInfo student={checkpoint.students}/>
        :<EmptyTableBox />
      }
    </div>
  )
}

const Options = ({id}:{id : any}) => {
  const { role} = usePage<PageProps>().props.auth
  const { auth } = usePage<PageProps>().props
  const attachEntity = (collection:string)=>{
    get(route('checkpoint.show', {
      id,
      collection,
      searchBy : 'name',
      q : ''
    }))
  }
  const { get } = useForm()
  
  if(auth.role == 'student'){
    return <></>
  }else
  return(
  <details className="dropdown z-30">
    <summary className="m-1 btn pr-28 btn-primary">Actions</summary>
    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
      {role == 'admin' &&
        <li><a onClick={() => attachEntity('organization')}>Attach Organization</a></li>}
      {(role == 'admin' || role =='organization') &&
      <li><a onClick={() => attachEntity('instructor')}>Attach Instructor</a></li>
      }
      <li><a onClick={() => attachEntity('student')}>Attach Student</a></li>
      <li><Link href={route('checkpoint.showEdit',{id})}>Edit Checkpoint</Link></li>
      <li onClick={_ => {
        // @ts-ignore
        document.getElementById('deleteCheckpointModal').showModal()
      }}><a className='text-red-600 hover:text-red-600'>Delete Checkpoint</a></li>
    </ul>
  </details>
  )
}

const OrganizationInfo = ({organization} : {organization : Organization}) => {
  return(
    <>
    {/* <h1 className='py-4 text-secondary font-extrabold'>Belongs To (Organization)</h1> */}
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
    {/* <h1 className='py-4 text-secondary font-extrabold'>Assigned To (Student)</h1> */}
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
    {/* <h1 className='py-4 text-secondary font-extrabold'>Associated With (Instructor)</h1> */}
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