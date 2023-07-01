import React from 'react'
import { Head } from '@inertiajs/react'
import { SidebarWrapper } from '@/Components/next/sidebar/sidebar'
import { NavbarWrapper } from '@/Components/next/navbar/navbar'

const AppLayout = ({title='', children, active=''} : {title? : string, children? : any, active? : string}) => {
  return (
    <>
        <Head title={title}/>
        <div className='flex flex-row'>
            <SidebarWrapper />
            <div className='w-full'>
                <NavbarWrapper />
                {
                    children
                }
            </div>
        </div>
    </>
  )
}

export default AppLayout