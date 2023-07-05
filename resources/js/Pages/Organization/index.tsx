import AppLayout from '@/Layouts/AppLayout'
import { Head } from '@inertiajs/react'
import React from 'react'
import OragnizationTable from './partial/org_table'
import Breadcrumb from '@/Components/daisy/breadcrumb'
const Index = ({activeMenu, title, data, ziggy}:any) => {
  
  if(!data || data.length ==0 )
  return (
    <AppLayout activeMenu={activeMenu} title={title}> 
      <Head title='Organization'/>
      <Breadcrumb list={[{title :'Home', href: '/dashboard'}, {title : 'Organizations', href : null}]} />
      {/* <OragnizationTable /> */}
      <div className='flex-c-c' style={{height : '70vh'}}>
        <h1 className='text-3xl font-extrabold text-center'>No Organizations</h1>
      </div>
    </AppLayout>
  )
  return (
    <AppLayout activeMenu={activeMenu} title={title}> 
      <Head title='Organization'/>
      <Breadcrumb list={[{title :'Home', href: '/dashboard'}, {title : 'Organizations', href : null}]} />
      <OragnizationTable organizations={data} query={ziggy.query}/>
    </AppLayout>
  )
}

export default Index