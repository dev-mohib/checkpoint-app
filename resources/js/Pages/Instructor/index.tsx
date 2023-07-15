import AppLayout from '@/Layouts/AppLayout'
import { Head } from '@inertiajs/react'
import React from 'react'
import InstructorsTable from './partial/instructor_table'
import Breadcrumb from '@/Components/daisy/breadcrumb'
const Index = () => {

  return (
    <AppLayout
      AdminComponent={<InstructorsAdmin />}
      OrganizationComponent={<InstructorsAdmin />}
      breadcrumb={[{title :'Home', href: '/dashboard'}, {title : 'Instructors', href : null}]}
    > 
      <Head title='Instructors'/>
    </AppLayout>
  )
}

const InstructorsAdmin = () => {

  return (<>
    <InstructorsTable/>
  </>)
}

export default Index