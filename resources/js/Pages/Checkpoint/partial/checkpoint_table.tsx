import React, { MouseEventHandler, useEffect, useState } from 'react';
import { ClearIcon, NavigateIcon } from '@/Components/icons/icons';
import { Link, useForm, usePage  } from '@inertiajs/react';
import Filter from './filter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { CheckpointPagination, PageProps } from '@/types';
import { EmptyTableBox } from '@/Components/daisy/EmptyTableBox';

  const Table = () => {
    const { checkpoints, ziggy } = usePage<PageProps<{checkpoints : CheckpointPagination}>>().props
    console.log({checkpoints})
    const [input, setInput] = useState('')
    const [filter, setFilter] = useState('name')
    const query = ziggy?.query

    useEffect(() => {
      const f = `${query.filter}`
      if(f == 'name'){
        setFilter(f)
        setInput(query.name)
      }
      else if(f == 'id'){
        setFilter(f)
        setInput(query.id)
      }
      else if(f == 'orgName'){
        setFilter(f)
        setInput(query.orgName)
      }
      else if(f == 'orgID'){
        setFilter(f)
        setInput(query.orgID)
      }
      else if(f == 'instructorName'){
        setFilter(f)
        setInput(query.instructorName)
      }
      else if(f == 'studentName'){
        setFilter(f)
        setInput(query.studentName)
      }else{
        setFilter('all')
      }

    },[])
    const createOrganization = () =>{ 
        // @ts-ignore
        document.getElementById("CreateNewOrgModel")?.showModal()
    }

    return (
      <div className=" p-4">
        <div className='flex-r-b'>
            {/* <SearchOrganization  /> */}
            <div className="join my-5 border-2 border-primary">
                    <div className='input-group flex-r-c'>
                      <input value={input} onChange={(e) => setInput(e.target.value)}  className="input input-bordered join-item" placeholder="Search..."/>
                      <button onClick={() => setInput('')}  className='btn bg-base-100 hover:bg-base-100 join-item'>
                          {/* <ClearIcon className="w-4 h-4"/> */}
                          <FontAwesomeIcon icon={faXmark}/>
                        </button>
                    </div>
                <select className="select select-bordered join-item" value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option disabled selected value="all">Search By</option>
                    <option value="id">ID</option>
                    <option value="name">Name</option>
                    <option value="orgName">Organization Name</option>
                    <option value="orgID">Organization ID</option>
                    <option value="instructorName">Instructor Name</option>
                    <option value="studentName">Student Name</option>
                </select>
                <div className="indicator ">
                    <Link href={route('checkpoint.index', {
                      id: filter == 'id'? input : '', 
                      name: filter == 'name' ? input:'', 
                      orgID: filter == 'orgID' ? input:'', 
                      instructorName: filter == 'instructorName'?input:'', 
                      studentName : filter == 'studentName' ? input : '',
                      filter: filter})}  className="btn join-item btn-primary">Search</Link>
                </div>
            </div>
        {/* End */}
            <div></div>
            <Link  href={route('checkpoint.create')} className='btn btn-primary m-4 cursor-pointer' onClick={createOrganization}>Add New</Link>
        </div>
        <div>
          {checkpoints.data.length > 0 ?
          <table className="table table-sm bg-base-100 shadow-md">
          <tbody>
            <tr className='py-3 px-4 bg-primary text-sm font-extrabold m-1 text-base-200 break-words'>
            <th>
                  Name
              </th>
              <th className='break-words'>
                Belongs To (Organization)
              </th>
              <th className=''>
                  Assigned To (Instructor)
              </th>
              <th className=''>
                  Assigned To (Student)
              </th>
              <th>
                Type
              </th>
              <th>
                  ID
              </th>
              <th>
              </th>
            </tr>
            {checkpoints.data.map((row , index : number) => (
            <tr key={index} className='cursor-pointer hover'>
              <td className="py-2 px-4 font-bold ">{row.name}</td>
              <td className="py-2 px-4 ">{
                row.organizations? row.organizations.name : <p className='text-gray-400'>No Organization</p>
              }</td>
              <td className="py-2 px-4 ">
              {
                row.instructors? row.instructors.users.name : <p className='text-gray-400'>Not Added</p>
              }
              </td>
              <td className="py-2 px-4 ">{
                row.students? row.students.users.name : <p className='text-gray-400'>Not Added</p>
              }</td>
              <td>
                <p className={`${row.type == 'Completion' ? 'text-blue-500' :row.type ==  'General' ? 'text-green-500' : 'text-purple-600'} font-bold`}>  
                  {row.type}
                </p>
              </td>
              <td className="py-2 px-4 ">
                {row.id}
              </td>
              <td className='py-2 px-4'>
                <div className='w-full flex-c-c'>
                  <Link href={route('checkpoint.show', {id : row.id})}>
                    <NavigateIcon className="w-6 h-6 hover:opacity-60"/>
                  </Link>
                </div>
              </td>
            </tr>
            ))}
              <tr className=''>
                <td className='py-4 text-lg font-extrabold bg-primary text-base-100'>
                    <b className=''>{checkpoints.from} to {checkpoints.to}</b> of {checkpoints.total}
                </td>
                <td className='bg-primary'></td>
                <td className='bg-primary'></td>
                <td className="bg-primary"></td>
                <td className='bg-primary'></td>
                <td className='bg-primary'></td>
                <td className='py-4 text-lg font-extrabold bg-primary pr-6'>
                  <div className="join">
                    {
                      checkpoints.prev_page_url? <Link href={route('checkpoint.index', {page : checkpoints.current_page - 1})}>
                      <button className="join-item btn btn-sm">«</button>
                      </Link>:<button className="join-item btn btn-sm">«</button>
                    }
                    <button className="join-item btn btn-sm">Page {checkpoints.current_page}</button>
                    {
                      checkpoints.next_page_url? <Link href={route('checkpoint.index',{page : checkpoints.current_page + 1})}>
                      <button className="join-item btn btn-sm">»</button>
                      </Link>:<button className="join-item btn btn-sm">»</button>
                    }
                  </div>
                </td>
              </tr>
            </tbody>
          </table>  :
          <div className='w-full border-2 shadow-sm'>
            <div className='bg-primary h-16 w-full'></div>
            <div className='w-full flex-c-c h-96 font-bold text-2xl'>
              No Checkpoints
            </div>
          </div>}
        </div>
      </div>
    );
  };

export default Table;
