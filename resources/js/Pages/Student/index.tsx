import RegisterUI from '@/Components/daisy/register'
import AppLayout from '@/Layouts/AppLayout'
import { Head } from '@inertiajs/react'
import React from 'react'
import Table from './partial/student_table'
const Index = ({page, activeMenu, title} : any) => {
  return (
    <AppLayout activeMenu={activeMenu} title={title}> 
      <Head title='Students'/>
      <Table />
    </AppLayout>
  )
}

export default Index