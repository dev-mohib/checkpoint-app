import AppLayout from '@/Layouts/AppLayout'
import { Head } from '@inertiajs/react'
import React from 'react'
import OragnizationTable from './partial/oragnization_table'
const Index = ({page}:any) => {
  return (
    <AppLayout page={page}> 
      <Head title='Organization'/>
      <OragnizationTable />
    </AppLayout>
  )
}

export default Index