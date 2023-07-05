import AppLayout from '@/Layouts/AppLayout'
import { Head } from '@inertiajs/react'
import React from 'react'
import Table from './partial/instructor_table'
import Breadcrumb from '@/Components/daisy/breadcrumb'
const Index = ({page, activeMenu, title} : any) => {
  return (
    <AppLayout activeMenu={activeMenu} title={title}> 
      <Head title='Instructors'/>
      <Breadcrumb list={[{title :'Home', href: '/dashboard'}, {title : 'Instructors', href : null}]} />
      <Table />
    </AppLayout>
  )
}

export default Index