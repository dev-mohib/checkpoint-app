import React from 'react'
import { Card } from '../partials/cards'
import { UserTable } from '../partials/table'
import { usePage } from '@inertiajs/react'
import { Organization, PageProps } from '@/types'

const OrganizationDashboard = () => {
    const cards = [{name : "instructor"}, {name : "student"}, {name : "checkpoint"}]
  const { organization } = usePage<PageProps<{organization : Organization}>>().props

    return (
      <div>
        <div className='flex justify-around'>
            {
            cards.map((card, i) => <Card key={i}  name={card.name}/>)
            }      
        </div>

        <div className='mt-24'>
          <h1 className='text-lg font-bold my-4'>My Profile (Organization)</h1>
          <UserTable user={organization.users}/>
      </div>
      </div>
    )
}

export default OrganizationDashboard