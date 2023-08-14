import React from 'react'
import Breadcrumb from '@/Components/daisy/breadcrumb'
import Navbar from '@/Components/daisy/navbar'
import Sidebar from '@/Components/daisy/sidebar'
import { PageProps } from '@/types'
import { Head, usePage } from '@inertiajs/react'

const AppLayout = ({
  children, 
  AdminComponent = <></>, 
  InstructorComponent = <></>, 
  OrganizationComponent = <></>, 
  StudentComponent = <></>,
  breadcrumb
} : 
  {
    children?: React.ReactNode,
    AdminComponent?:React.ReactElement,
    OrganizationComponent?: React.ReactElement,
    InstructorComponent?:React.ReactElement, 
    StudentComponent? : React.ReactElement,
    breadcrumb? : {title : string, href : string | null}[]
  }) => {

    const { auth, canAccess, title } = usePage<PageProps>().props
  if(!canAccess)
  return(
    <div className='min-h-screen flex-c-c'>
      No Access
    </div>
  )
  return (
    <div className='flex justify-between w-full mainLayout'>
        <div className='Sidebar'>   
            <Sidebar />
        </div>
        <div className='Navbar'>
            <Navbar/>
            <Head title={title??'Checkpoint'}/>
            <div className='bg-base-200 min-h-screen py-20 px-12'>
              {breadcrumb && <Breadcrumb list={breadcrumb}/>}
              {
                children
              }
              {
                auth.role === 'admin'?
                AdminComponent
                :auth.role === 'organization'?
                OrganizationComponent
                :auth.role === 'instructor'?
                InstructorComponent
                :auth.role === 'student'?
                StudentComponent:
                null
              }
            </div>
        </div>
    </div>
  )
  
}

export default AppLayout