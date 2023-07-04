import LoginUI from '@/Components/daisy/login'
import AppLayout from '@/Layouts/AppLayout'
import { Head } from '@inertiajs/react'
import React from 'react'
import Table from './partial/checkpoint_table'
const Index = ({activeMenu, title} : any) => {
  
  return (
    <AppLayout activeMenu={activeMenu} title={title}> 
      <Head title='Checkpoints'/>
      <Table />
    </AppLayout>
  )
}



export default Index