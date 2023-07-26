import React from 'react'
import { Organization } from '@/types'
import { Link, useForm } from '@inertiajs/react'
import { NavigateIcon } from '../icons/icons'
import { EmptyTableBox } from './EmptyTableBox'
import { DetachIcon } from '../icons/svg/detach'
import { ArrowForwardIcon } from '../icons/svg/arrow_forward'
import Modal from './modal'

export const OrganizationsTableView = ({organizations, canDetach = false, collection} : {organizations? : Organization[], canDetach?: boolean, collection: {name: string, id: any}}) => {
  const [id, setId] = React.useState<null | number>(null)
  const { put } = useForm()
  const handleDetach = () => {
    if(id){
      put(
        route(
          collection.name + '.detachEntity',
        {
        id : collection.id,
        entityId : id,
        entityType : 'organization'
      }
      ))
    }
  }
    if(organizations && organizations.length > 0)
    return(
      <div>
        <Modal id="detachOrganizationModal" title="Detach Organization">
          <h1>Do you really want to detach this Organization?</h1>
          <div className='w-full flex justify-end'>
            <div onClick={handleDetach}  className='btn btn-warning m-2'>YES!</div>
            <button className='btn btn-ghost my-2'>CANCEL</button>
          </div>
        </Modal>
        <h1 className='py-4 text-secondary font-extrabold'>Belongs to (Organization's)</h1>
        <table className='table bg-base-100 shadow-md'>
          <thead>
            <tr className='text-base-100 bg-primary'>
              <td className='font-extrabold text-lg '>Name</td>
              <td className='font-extrabold text-lg '>Email</td>
              <td className='font-extrabold text-lg '>Address</td>
              <td className='font-extrabold text-lg '></td>
            </tr>
          </thead>
          <tbody>
            {
              organizations.map((organization, index) => <tr key={organization.id}  className='hover'>
                <td><div className="flex items-center space-x-3 ml-3 my-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-10 h-10">
                                <img src={`/storage/organization-logo/${organization.logo}`} alt="Avatar" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{organization.name}</div>
                        </div>
                    </div></td>
                <td>{organization.users.email}</td>
                <td>{organization.users.address}</td>
                <td>
                  <div className='flex-r-c'>
                    <div className="tooltip" data-tip="View">
                      <Link href={route('organization.show', { id : organization.id})}>
                          <ArrowForwardIcon className="dark:stroke-white" width='25px' height='35px'/>
                      </Link>
                    </div>
                    {canDetach && <div className='mx-2 tooltip cursor-pointer' data-tip="Detach"  onClick={_ =>{
                        setId(organization.id)
                        // @ts-ignore
                        document.getElementById('detachOrganizationModal').showModal()
                      }}>
                      <DetachIcon className='dark:stroke-white hover:opacity-80'  />
                    </div>}
                  </div>
                </td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    )
    else return(
        <>
            <h1 className='py-4 text-secondary font-extrabold'>Organizations</h1>
            <EmptyTableBox />
        </>
    )
  }
