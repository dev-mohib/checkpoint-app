import { Head } from '@inertiajs/react'
import React from 'react'

const NotAllowed = () => {
  return (
    <div className='min-h-screen flex-c-c'>
        <Head title='Not Alowed'/>
        <div className='text-3xl text-gray-400'> 403 | Not Allowed</div>
    </div>
  )
}

export default NotAllowed