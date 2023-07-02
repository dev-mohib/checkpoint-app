import Navbar from '@/Components/daisy/navbar'
import Sidebar from '@/Components/daisy/sidebar'
import React from 'react'

const AppLayout = ({children, page} : any) => {
  return (
    <>
    <div className='flex justify-between w-screen mainLayout'>
        <div className='Sidebar'>   
            <Sidebar page={page} />
        </div>
        <div className='Navbar'>
            <Navbar page={page} />
            <div className='px-5 bg-base-200 min-h-screen pt-20'>
                    {
                        children
                    }
            </div>
        </div>
    </div>
    </>
  )
}

export default AppLayout