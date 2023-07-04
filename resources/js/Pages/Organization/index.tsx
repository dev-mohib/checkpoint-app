import AppLayout from '@/Layouts/AppLayout'
import { Head } from '@inertiajs/react'
import React from 'react'
import OragnizationTable from './partial/org_table'
const Index = ({activeMenu, title}:any) => {
  return (
    <AppLayout activeMenu={activeMenu} title={title}> 
      <Head title='Organization'/>
      <OragnizationTable />
    </AppLayout>
  )
}

export default Index