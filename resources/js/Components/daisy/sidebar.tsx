import React from 'react'
import { Link } from '@inertiajs/react'
import { OrganizationIcon, DashboardIcon, CheckpointIcon, CheckpointLogoIcon, StudentIcon,TeacherIcon } from '@/Components/icons/icons'
const Sidebar = ({page} : any) => {
  return (
    <div className='fixed h-screen z-50'>
    <div className="drawer lg:drawer-open">
      <input id="dashboardSideBar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side p-0">
        <label htmlFor="dashboardSideBar" className="drawer-overlay"></label> 
        <div className="w-72 h-full bg-white">
          <Link href='/' className='pt-3 flex items-center pl-5 w-full '>
            <CheckpointLogoIcon className="w-12 h-12" />
            <h1 className='font-sans text-xl'>Checkpoint</h1>
          </Link>
          <ul className="menu w-full rounded-none px-0 text-xl mt-14">
            <li className={`${page == 'dashboard' ? 'border-l-4 border-l-purple-600 bg-base-200' : ''}`}>
              <Link href={route('dashboard')}>
                <DashboardIcon className="w-6 h-6"/>
              Dashboard
              </Link>
            </li>
            <li className={`${page == 'organization' ? 'border-l-4 border-l-purple-600 bg-base-200' : ''}`}>
              <Link href={route('organization.index')}>
                {/* <GoOrganization className="h-5 w-5"/> */}
                <OrganizationIcon className="w-6 h-6"  />
                Oraganizations
              </Link>
            </li>
            <li className={`${page == 'instructor' ? 'border-l-4 border-l-purple-600 bg-base-200' : ''}`}>
              <Link href={route('instructor.index')}>
                <TeacherIcon className="w-6 h-6" />
                Instructors
              </Link>
            </li>
            <li className={`${page == 'student' ? 'border-l-4 border-l-purple-600 bg-base-200' : ''}`}>
              <Link href={route('student.index')}>
                <StudentIcon className="w-6 h-6" />
                Students
              </Link>
            </li>
            <li className={`${page == 'checkpoint' ? 'border-l-4 border-l-purple-600 bg-base-200' : ''}`}>
              <Link href={route('checkpoint.index')}>
                <CheckpointIcon className="w-6 h-6"/>
                Checkpoints
              </Link>
            </li>
          </ul>
        </div>
      </div>
</div>
</div>
  )
}

export default Sidebar