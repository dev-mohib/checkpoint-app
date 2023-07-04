import RegisterUI from '@/Components/daisy/register'
import AppLayout from '@/Layouts/AppLayout'
import React from 'react'
const Index = ({page} : any) => {
  return (
    <AppLayout page={page}> 
      <div className='flex-c-c'>
          <RegisterUI />
      </div>
    </AppLayout>
  )
}

export default Index