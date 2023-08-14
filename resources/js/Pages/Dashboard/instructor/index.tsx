import React from 'react'
import { Card } from '../partials/cards'
import { usePage } from '@inertiajs/react'
import { Instructor, Organization, PageProps, Student } from '@/types'
import { UserTable } from '../partials/table'
import { OrganizationsTableView } from '@/Components/daisy/OrganizationTableView'

const InstructorDashboard = () => {
  const cards = [{name : "student"},{name : "checkpoint"}]
  const { instructor } = usePage<PageProps<{instructor : Instructor}>>().props
  
  return (
    <div>
      <div className='flex justify-around'>
        {
          cards.map((card, i) => <Card key={i}  name={card.name}/>)
        }      
      </div>

      <div className='mt-24'>
        <h1 className='text-lg font-bold my-4'>My Profile (Instructor)</h1>
        <UserTable user={instructor.users}/>
      </div>

      <div className='mt-4'>
        <OrganizationsTableView canDetach={false} collection={{name:"instructor", id:''}} organizations={instructor.organizations}/>
      </div>
    </div>
  )
}

export default InstructorDashboard