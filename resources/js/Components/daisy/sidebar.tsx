import React, { useEffect, useState } from 'react'
import { Link, usePage } from '@inertiajs/react'
import { CheckpointLogoIcon } from '@/Components/icons/icons'
import { AcademicCapIcon, GridIcon, ReportCardIcon, MindMapIcon, InstructorIcon } from '@/Components/icons'
import { PageProps } from '@/types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareNodes } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
  const { auth, activeMenu} = usePage<PageProps>().props
  return (
    <div className='fixed max-h-screen z-50'>
    <div className="drawer lg:drawer-open">
      <input id="dashboardSideBar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side p-0">
        <label htmlFor="dashboardSideBar" className="drawer-overlay"></label> 
        <div className="w-72 bg-base-100" style={{height : 'calc(100% - 64px)'}}>
          <Link href='/' className='flex items-center pl-5 w-full h-16 '>
            <CheckpointLogoIcon className="w-12 h-12" />
            <h1 className='font-sans text-xl'>Checkpoint</h1>
          </Link>
          <div className='shadow-md h-full'>
            {
              auth.role == 'admin'?
              <AdminSideBar page={activeMenu} />
              :auth.role == 'instructor'?
              <InstructorSideBar page={activeMenu} />
              :auth.role == 'organization'?
              <OrganizationSideBar page={activeMenu} />
              :auth.role == 'student'?
              <StudentSideBar page={activeMenu} />
              :null
            }
          </div>
        </div>
      </div>
</div>
</div>
  )
}


const AdminSideBar = ({page} : any) => {

  return (
    <ul className="menu w-full rounded-none px-0 text-xl pt-14">
      <li className={`${page == 'dashboard' ? 'border-l-4 border-l-primary bg-base-200' : ''}`}>
        <Link href={route('dashboard')}>
          <GridIcon className={`w-6 h-6`} />
        Dashboard
        </Link>
      </li>
      <li className={`${page == 'organization' ? 'border-l-4 border-l-primary bg-base-200' : ''}`}>
        <Link href={route('organization.index')}>
          {/* <GoOrganization className="h-5 w-5"/> */}
          <MindMapIcon  className={`w-6 h-6`} />
          {/* <FontAwesomeIcon icon={faShareNodes}  /> */}
            Oraganizations
        </Link>
      </li>
      <li className={`${page == 'instructor' ? 'border-l-4 border-l-primary bg-base-200' : ''}`}>
        <Link href={route('instructor.index')}>
          <InstructorIcon className={`w-6 h-6`} />
          Instructors
        </Link>
      </li>
      <li className={`${page == 'student' ? 'border-l-4 border-l-primary bg-base-200' : ''}`}>
        <Link href={route('student.index')}>
          <AcademicCapIcon className={`w-6 h-6`} />
          Students
        </Link>
      </li>
      <li className={`${page == 'checkpoint' ? 'border-l-4 border-l-primary bg-base-200' : ''}`}>
        <Link href={route('checkpoint.index')}>
          <ReportCardIcon className={`w-6 h-6`}/>
          Checkpoints
        </Link>
      </li>
    </ul>
  )
}

const OrganizationSideBar = ({page} : any) => {
  return (
    <ul className="menu w-full rounded-none px-0 text-xl pt-14">
      <li className={`${page == 'dashboard' ? 'border-l-4 border-l-primary bg-base-200' : ''}`}>
        <Link href={route('dashboard')}>
          <GridIcon className={`w-6 h-6`} />
        Dashboard
        </Link>
      </li>
      <li className={`${page == 'instructor' ? 'border-l-4 border-l-primary bg-base-200' : ''}`}>
        <Link href={route('instructor.index')}>
          <InstructorIcon className={`w-6 h-6`} />
          Instructors
        </Link>
      </li>
      <li className={`${page == 'student' ? 'border-l-4 border-l-primary bg-base-200' : ''}`}>
        <Link href={route('student.index')}>
          <AcademicCapIcon className={`w-6 h-6`} />
          Students
        </Link>
      </li>
      <li className={`${page == 'checkpoint' ? 'border-l-4 border-l-primary bg-base-200' : ''}`}>
        <Link href={route('checkpoint.index')}>
          <ReportCardIcon className={`w-6 h-6`}/>
          Checkpoints
        </Link>
      </li>
    </ul>
  )
}

const InstructorSideBar = ({page} : any) => {
  return (
    <ul className="menu w-full rounded-none px-0 text-xl pt-14">
      <li className={`${page == 'dashboard' ? 'border-l-4 border-l-primary bg-base-200' : ''}`}>
        <Link href={route('dashboard')}>
          <GridIcon className={`w-6 h-6`}/>
        Dashboard
        </Link>
      </li>
      <li className={`${page == 'student' ? 'border-l-4 border-l-primary bg-base-200' : ''}`}>
        <Link href={route('student.index')}>
          <AcademicCapIcon className={`w-6 h-6`} />
          Students
        </Link>
      </li>
      <li className={`${page == 'checkpoint' ? 'border-l-4 border-l-purple-600 bg-base-200' : ''}`}>
        <Link href={route('checkpoint.index')}>
          <ReportCardIcon className={`w-6 h-6`}/>
          Checkpoints
        </Link>
      </li>
    </ul>
  )
}

const StudentSideBar = ({page} : any) => {
  return (
    <ul className="menu w-full rounded-none px-0 text-xl pt-14">
      <li className={`${page == 'dashboard' ? 'border-l-4 border-l-primary bg-base-200' : ''}`}>
        <Link href={route('dashboard')}>
          <GridIcon className={`w-6 h-6`}/>
        Dashboard
        </Link>
      </li>
      <li className={`${page == 'checkpoint' ? 'border-l-4 border-l-purple-600 bg-base-200' : ''}`}>
        <Link href={route('checkpoint.index')}>
          <ReportCardIcon className={`w-6 h-6`}/>
          Checkpoints
        </Link>
      </li>
    </ul>
  )
}

export default Sidebar