import React from 'react'
import AppLayout from '@/Layouts/AppLayout'
import { Head } from '@inertiajs/react'
import Breadcrumb from '@/Components/daisy/breadcrumb'
import OrganizationsTable from './partial/organization_index'
const Index = () => {

  return(
    <AppLayout 
      AdminComponent={<AdminOrganization />}
      breadcrumb={[{title :'Home', href: '/dashboard'}, {title : 'Organizations', href : null}]}
    >
    </AppLayout>
  )

}

const AdminOrganization = () => {
  return (
    <>
      <OrganizationsTable />
    </>
  )
}

export default Index