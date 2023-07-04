import LoginUI from '@/Components/daisy/login'
import AppLayout from '@/Layouts/AppLayout'
import React from 'react'
const Index = ({page} : any) => {
  
  return (
    <AppLayout page={page}> 
      <div className='flex-c-c'>
        <LoginUI />
      </div>
    </AppLayout>
  )
}



export default Index