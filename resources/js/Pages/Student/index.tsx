import AppLayout from '@/Layouts/AppLayout'
import { Head } from '@inertiajs/react'
import React from 'react'
import StudentTable from './partial/student_table'
import Breadcrumb from '@/Components/daisy/breadcrumb'

const Index = () => {

  return (
    <AppLayout
      AdminComponent={<StudentTable />}
      OrganizationComponent={<StudentTable />}
      InstructorComponent={<StudentTable />}
      breadcrumb={[{title :'Home', href: '/dashboard'}, {title : 'Students', href : null}]}
    > 
    </AppLayout>
  )
}

 

export default Index