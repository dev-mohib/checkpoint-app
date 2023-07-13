import AppLayout from '@/Layouts/AppLayout'
import { Head } from '@inertiajs/react'
import React from 'react'
import CheckpointTable from './partial/checkpoint_table'
import Breadcrumb from '@/Components/daisy/breadcrumb'
const Index = ({activeMenu, title, ziggy, auth, checkpoints}:any) => {
  
  if(!checkpoints || checkpoints.length ==0 )
  return (
    <AppLayout activeMenu={activeMenu} title={title} auth={auth}> 
      <Head title='Checkpoints'/>
      <Breadcrumb list={[{title :'Home', href: '/dashboard'}, {title : 'Checkpoints', href : null}]} />
      {/* <OragnizationTable /> */}
      <div className='flex-c-c' style={{height : '70vh'}}>
        <h1 className='text-3xl font-extrabold text-center'>No Checkpoints</h1>
      </div>
    </AppLayout>
  )
  return (
    <AppLayout activeMenu={activeMenu} title={title} auth={auth}> 
      <Head title='Checkpoints'/>
      <Breadcrumb list={[{title :'Home', href: '/dashboard'}, {title : 'Checkpoints', href : null}]} />
      <CheckpointTable checkpoints={checkpoints} query={ziggy.query}/>
    </AppLayout>
  )
}

export default Index