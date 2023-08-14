import { Link, useForm } from '@inertiajs/react'
import React from 'react'
import { NavigateIcon } from '../icons/icons'
import { Student } from '@/types'
import { EmptyTableBox } from './EmptyTableBox'
import { ArrowForwardIcon } from '../icons/svg/arrow_forward'
import { DetachIcon } from '../icons/svg/detach'
import Modal from './modal'

export const StudentsTableView = ({students, canDetach = false, collection} : {students? : Student[], canDetach?: boolean, collection: {name:string, id:any}}) => {
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
          entityType : 'student'
        }
      ),
      {
        onFinish : () => {
        // @ts-ignore
        document.getElementById('detachStudentModal').close()
        }
      })
    }
  }
    if(students && students.length>0)
    return(
      <>
        <Modal id="detachStudentModal" title="Detach Student">
          <h1>Do you really want to detach this Student?</h1>
          <div className='w-full flex justify-end'>
            <div onClick={handleDetach}  className='btn btn-warning m-2'>YES!</div>
            <button className='btn btn-ghost my-2'>CANCEL</button>
          </div>
        </Modal>
        <h1 className='py-4 text-secondary font-extrabold'>Students</h1>
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
                  students.map((student, index) => <tr key={student.id}  className='hover'>
                      <td>{student.users.name}</td>
                      <td>{student.users.email}</td>
                      <td>{student.users.address}</td>
                    <td>
                      <div className='flex-r-c'>
                        <div className="tooltip" data-tip="View">
                          <Link href={route('student.show', { id : student.id})}>
                              <ArrowForwardIcon className="dark:stroke-white" width='25px' height='35px'/>
                          </Link>
                        </div>
                        {canDetach && <div className='mx-2 tooltip cursor-pointer' data-tip="Detach"  onClick={_ =>{
                            setId(student.id)
                            // @ts-ignore
                            document.getElementById('detachStudentModal').showModal()
                          }}>
                          <DetachIcon className='dark:stroke-white hover:opacity-80'  />
                        </div>}
                      </div>
                    </td>
                  </tr>)
                }
              </tbody>
        </table>
      </>
    )
    else return(
        <>
            <h1 className='py-4 text-secondary font-extrabold'>Students</h1>
            <EmptyTableBox />
        </>
    )
  }
