import Navbar from '@/Components/daisy/navbar'
import Sidebar from '@/Components/daisy/sidebar'
import React, { PropsWithChildren } from 'react'

const AppLayout = ({children, activeMenu, title} : {activeMenu:string, children:React.ReactNode, title:string}) => {
  return (
    <>
    <div className='flex justify-between w-screen mainLayout'>
        <div className='Sidebar'>   
            <Sidebar page={activeMenu} />
        </div>
        <div className='Navbar'>
            <Navbar page={activeMenu} title={title} />
            <div className='px-5 bg-base-200 min-h-screen py-20'>
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