import React from 'react'
import { Card } from '../partials/cards'
import { usePage } from '@inertiajs/react'
import { Instructor, Organization, PageProps, Student } from '@/types'
import { OrganizationsTableView } from '@/Components/daisy/OrganizationTableView'
import { UserTable } from '../partials/table'

const StudentDashboard = () => {
  const { student } = usePage<PageProps<{ student:Student}>>().props
  const cards = [{name : "checkpoint"}]
  return (
    <div>
      <div className='flex justify-around'>
        {
          cards.map((card, i) => <Card key={i}  name={card.name}/>)
        }      
      </div>


      <div className='mt-24'>
        <h1 className='text-lg font-bold my-4'>My Profile (Student)</h1>
        <UserTable user={student.users}/>
      </div>

      <div className='mt-4'>
        <OrganizationsTableView canDetach={false} collection={{name:"instructor", id:''}} organizations={student.organizations}/>
      </div>
    </div>
  )
}

export default StudentDashboard