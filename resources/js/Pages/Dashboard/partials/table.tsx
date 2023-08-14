import React from 'react'
import { User } from '@/types'

export const UserTable = ({user} : {user : User}) => {
  return (
    <div>
        <table className='table table-sm  bg-base-100 shadow-md'>
          <thead>
            <tr className='bg-primary'>
              <td className='font-extrabold text-lg text-base-100 '>Details</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{user.name}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>{user.gender??'Not Spcified'}</td>
            </tr>
            <tr>
              <td>Username</td>
              <td>{user.username}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{user.email}</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>{user.address}</td>
            </tr>
            <tr>
              <td>Contact</td>
              <td>{user.contact_number}</td>
            </tr>
          </tbody>
        </table>
    </div>
  )
}
