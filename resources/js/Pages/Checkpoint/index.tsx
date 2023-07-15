import AppLayout from '@/Layouts/AppLayout'
import { Head, usePage } from '@inertiajs/react'
import React from 'react'
import CheckpointTable from './partial/checkpoint_table'
import Breadcrumb from '@/Components/daisy/breadcrumb'
import { PageProps } from '@/types'

const Index = () => {
  const { checkpoints, auth, ziggy } = usePage<PageProps<{checkpoints  : any}>>().props

  return (
    <AppLayout
      AdminComponent={<CheckpointTable />}
      OrganizationComponent={<CheckpointTable />}
      InstructorComponent={<CheckpointTable />}
      StudentComponent={<CheckpointTable />}
      breadcrumb={[{title :'Home', href: '/dashboard'}, {title : 'Checkpoints', href : null}]}
    > 
    </AppLayout>
  )
}

export default Index