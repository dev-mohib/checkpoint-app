import AppLayout from '@/Layouts/AppLayout'
import { Head } from '@inertiajs/react'
import React from 'react'
import InstructorsTable from './partial/instructor_table'
import Breadcrumb from '@/Components/daisy/breadcrumb'
const Index = ({activeMenu, title, ziggy, auth, instructors}:any) => {
  
  if(!instructors || instructors.length ==0 )
  return (
    <AppLayout activeMenu={activeMenu} title={title} auth={auth}> 
      <Head title='Instructors'/>
      <Breadcrumb list={[{title :'Home', href: '/dashboard'}, {title : 'Instructors', href : null}]} />
      {/* <OragnizationTable /> */}
      <div className='flex-c-c' style={{height : '70vh'}}>
        <h1 className='text-3xl font-extrabold text-center'>No instructors</h1>
      </div>
    </AppLayout>
  )
  return (
    <AppLayout activeMenu={activeMenu} title={title} auth={auth}> 
      <Head title='Instructors'/>
      <Breadcrumb list={[{title :'Home', href: '/dashboard'}, {title : 'Instructors', href : null}]} />
      <InstructorsTable instructors={instructors} query={ziggy.query}/>
    </AppLayout>
  )
}

export default Index