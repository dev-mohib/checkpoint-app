import Navbar from '@/Components/daisy/navbar'
import Sidebar from '@/Components/daisy/sidebar'
import React, { PropsWithChildren } from 'react'

const AppLayout = ({children, activeMenu, title, auth} : {activeMenu:string, children:React.ReactNode, title:string, auth : any}) => {
  return (
    <>
    <div className='flex justify-between w-full mainLayout'>
        <div className='Sidebar'>   
            <Sidebar page={activeMenu} auth={auth} />
        </div>
        <div className='Navbar'>
            <Navbar page={activeMenu} title={title} />
            <div className='bg-base-200 min-h-screen py-20 px-12'>
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