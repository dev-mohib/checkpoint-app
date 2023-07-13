import AppLayout from '@/Layouts/AppLayout'
import { Head } from '@inertiajs/react'
import React from 'react'
import StudentTable from './partial/student_table'
import Breadcrumb from '@/Components/daisy/breadcrumb'
const Index = ({activeMenu, title, ziggy, auth, students}:any) => {
  
  if(!students || students.length ==0 )
  return (
    <AppLayout activeMenu={activeMenu} title={title} auth={auth}> 
      <Head title='Students'/>
      <Breadcrumb list={[{title :'Home', href: '/dashboard'}, {title : 'Students', href : null}]} />
      {/* <OragnizationTable /> */}
      <div className='flex-c-c' style={{height : '70vh'}}>
        <h1 className='text-3xl font-extrabold text-center'>No Students</h1>
      </div>
    </AppLayout>
  )
  return (
    <AppLayout activeMenu={activeMenu} title={title} auth={auth}> 
      <Head title='Students'/>
      <Breadcrumb list={[{title :'Home', href: '/dashboard'}, {title : 'Students', href : null}]} />
      <StudentTable students={students} query={ziggy.query}/>
    </AppLayout>
  )
}

export default Index