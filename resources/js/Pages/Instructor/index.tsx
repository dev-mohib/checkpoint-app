import AppLayout from '@/Layouts/AppLayout'
import { Head } from '@inertiajs/react'
import React from 'react'
import Table from './partial/instructor_table'
const Index = ({page, activeMenu, title} : any) => {
  return (
    <AppLayout activeMenu={activeMenu} title={title}> 
      <Head title='Instructors'/>

      <Table />
    </AppLayout>
  )
}

export default Index