import React, { useEffect, useState } from 'react'
import Modal from './modal'
import { XmarkIcon } from '../icons'
import { Link, useForm, usePage } from '@inertiajs/react'
import { PageProps } from '@/types'
import { storage } from '@/utils/constants'

export const AttachEntityModal = ({id, routeName='organization'}: {routeName:string, id : any}) => {
    const { searchData = [], ziggy } = usePage<PageProps<
        { searchData : {id : string, name : string}[]}>>().props

    const [entityId, setEntityId] = React.useState('')
    console.log({searchData})
    const { put } = useForm()
    const [filter, setFilter] = useState(
    {
      q : ziggy?.query.q??'',
      searchBy : ziggy?.query.searchBy??'name',
      collection : ziggy?.query.collection??'instructor',
    })
    const attachEntity = () => {
      // @ts-ignore
      document.getElementById(`AttachEntityModal-${routeName}`).close()
      put(route(routeName + '.attachEntity',{
        id,
        entityId,
        entityType : ziggy?.query.collection??''
      }))
    }
    useEffect(() => {
        if(searchData.length > 0){
            // @ts-ignore
            document.getElementById(`AttachEntityModal-${routeName}`).showModal()
        }
    },[])
  return (
    <Modal id={`AttachEntityModal-${routeName}`} title={`Select ${filter.collection}`} className='w-11/12 max-w-5xl'>
      {entityId?
      <div className='flex flex-col w-full py-10 px-10'>
        <h1>Do you want to Attach this {filter.collection}?</h1>
        <div className='w-full flex justify-end'>
          <div onClick={attachEntity}  className='btn btn-success m-2 cursor-pointer'>YES!</div>
          <div onClick={() => setEntityId('')}  className='btn btn-ghost my-2 cursor-pointer'>CANCEL</div>
        </div>
      </div>
      :
      <>
        <div className="join my-5 border-2 border-primary">
          <div className='input-group flex-r-c'>
            <input value={filter.q} onChange={(e) => setFilter({...filter, q : e.target.value})}  className="input input-bordered join-item" placeholder="Search..."/>
            <div onClick={() => setFilter({...filter, q : ''})}  className='btn bg-base-100 hover:bg-base-100 join-item'>
                {/* <ClearIcon className="w-4 h-4"/> */}
                <XmarkIcon/>
              </div>
          </div>
          <select className="select select-bordered join-item capitalize" value={filter.searchBy} onChange={(e) => setFilter({...filter, searchBy : e.target.value})}>
              <option disabled selected value="all">Search By</option>
              <option value="name" className='capitalize'>{filter.collection} name</option>
              <option value="id" className='capitalize'> {filter.collection} ID</option>
          </select>
          <div className="indicator ">
              <Link
                href={route(routeName+'.show', {
                  id,
                  searchBy : filter.searchBy,
                  collection : filter.collection,
                  q: filter.q
                })}
                className="btn join-item btn-primary">Search</Link>
          </div>
        </div>
        <div className='w-full bg-base-200 my-5' >
          {
            searchData.length > 0 ? <div className='overflow-y-auto' style={{maxHeight : 350}}>
              {searchData.map((data : any) => <div 
                  className='flex items-center space-x-3 py-6 px-5 hover:bg-base-300 cursor-pointer'  key={data.id}
                  onClick={() => setEntityId(data.id)}
                  >
                  {ziggy?.query?.collection == 'organization'&& <div className="avatar">
                      <div className="mask mask-squircle w-10 h-10">
                          {/* <img src={data.logo??'/organization.png'} alt="Avatar" /> */}
                          <img src={storage("organization-logo", data.logo)} alt="Avatar" />
                      </div>
                  </div>}
                  <div className='font-bold'>{data.name}</div>
              </div>
              )}
            </div>:<div className='h-full flex-c-c'>
            </div>
          }
        </div>
      </>}
      </Modal>
  )
}
