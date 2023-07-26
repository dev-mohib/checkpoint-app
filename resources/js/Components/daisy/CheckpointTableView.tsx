import React from 'react'
import { Link, useForm } from '@inertiajs/react'
import { Checkpoint } from '@/types'
import { EmptyTableBox } from './EmptyTableBox'
import { DetachIcon } from '../icons/svg/detach'
import { ArrowForwardIcon  } from '../icons/svg/arrow_forward'
import Modal from './modal'
export const CheckpointsTableView = ({checkpoints, canDetach = false, collection} : {checkpoints? : Checkpoint[], canDetach?: boolean, collection: {name: string, id:any}}) => {
  const [id, setId] = React.useState<null | number>(null)
  const { put } = useForm()
  const handleDetach = () => {
    if(id){
      put(
        route(
          collection.name + '.detachEntity',
        {
        id,
        entityId : collection.id,
        entityType : 'checkpoint'
      }
      ))
    }
  }
    if(checkpoints && checkpoints.length > 0)
    return(
      <div>
        <Modal id="detachCheckpointModal" title="Detach Checkpoint">
          <h1>Do you really want to detach this Checkpoint?</h1>
          <div className='w-full flex justify-end'>
            <div onClick={handleDetach}  className='btn btn-warning m-2'>YES!</div>
            <button className='btn btn-ghost my-2'>CANCEL</button>
          </div>
        </Modal>
        <h1 className='py-4 text-secondary font-extrabold'>Checkpoints (Assigned)</h1>
        <table className='table bg-base-100 shadow-md'>
          <thead>
            <tr className='text-base-100 bg-primary'>
              <td className='font-extrabold text-lg '>Name</td>
              <td className='font-extrabold text-lg '>Type</td>
              <td className='font-extrabold text-lg '>Status</td>
              <td className='font-extrabold text-lg '></td>
            </tr>
          </thead>
          <tbody>
            {
              checkpoints.map((checkpoint, index) => <tr key={checkpoint.id}  className='hover'>
                  <td>{checkpoint.name}</td>
                  <td>{checkpoint.type}</td>
                  <td className='capitalize'>{checkpoint.status}</td>
                <td>
                  <div className='flex-r-c'>
                    <div className="tooltip" data-tip="View">
                      <Link href={route('checkpoint.show', { id : checkpoint.id})}>
                          <ArrowForwardIcon className="dark:stroke-white" width='25px' height='35px'/>
                      </Link>
                    </div>
                    {canDetach && <div className='mx-2 tooltip cursor-pointer' data-tip="Detach" onClick={_ =>{
                        setId(checkpoint.id)
                        // @ts-ignore
                        document.getElementById('detachCheckpointModal').showModal()
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
            <h1 className='py-4 text-secondary font-extrabold'>Checkpoints</h1>
            <EmptyTableBox />
        </>
    )
  }
