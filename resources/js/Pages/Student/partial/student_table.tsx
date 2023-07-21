import React, { MouseEventHandler, useEffect, useState } from 'react';
import { ClearIcon, NavigateIcon } from '@/Components/icons/icons';
import { Link, useForm, usePage  } from '@inertiajs/react';
import Filter from './filter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { PageProps, Student, StudentPagination } from '@/types';

  const Table = () => {
    const { students, ziggy } = usePage<PageProps<{students : StudentPagination}>>().props
    const [input, setInput] = useState('')
    const [filter, setFilter] = useState('name')
    const query = ziggy?.query
    useEffect(() => {
      const f = `${query.filter}`
      if(f == 'name'){
        setFilter(f)
        setInput(query.name)
      }
      else if(f == 'email'){
        setFilter(f)
        setInput(query.email)
      }
      else if(f == 'address'){
        setFilter(f)
        setInput(query.address)
      }
      else if(f == 'id'){
        setFilter(f)
        setInput(query.id)
      }
      else if(f == 'orgId'){
        setFilter(f)
        setInput(query.id)
      }
      else if(f == 'orgName'){
        setFilter(f)
        setInput(query.id)
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
                    <option value="name">Name</option>
                    <option value="id">ID</option>
                    <option value="email">Email</option>
                    <option value="username">Username</option>
                    <option value="orgId">Organization ID</option>
                    <option value="orgName">Organization Name</option>
                </select>
                <div className="indicator ">
                    <Link href={route('student.index', {
                      name: filter == 'name' ? input:'', 
                      email : filter == 'email'?input:'', 
                      username:filter == 'username'?input:'', 
                      id: filter == 'id'?input : '', 
                      orgName : filter == 'orgName' ? input : '',
                      orgId : filter == 'orgId' ? input : '',
                      filter: filter})}  className="btn join-item btn-primary">Search</Link>
                </div>
            </div>
        {/* End */}
            <div></div>
            <Link  href={route('student.create')} className='btn btn-primary m-4 cursor-pointer' onClick={createOrganization}>Add New</Link>
        </div>
        <div>
            {students.data.length > 0 ? <table className="table table-sm bg-base-100 shadow-md">
              <thead>
                <tr className='py-2 px-4 bg-primary text-sm font-extrabold m-1 text-base-200'>
                  <th>
                      Name
                  </th>
                  <th className="">
                      Username
                  </th>
                  <th>
                      Email
                  </th>
                  <th>
                      Organizations
                  </th>
                  <th>
                      ID
                  </th>
                  <th>
                  </th>
                </tr>
              </thead>
            <tbody>
                {students.data.map((row : any, index : number) => (
                <tr key={index} className='cursor-pointer hover'>
                  <td className="py-2 px-4 font-bold">{row.users.name}</td>
                  <td className="py-2 px-4">{row.users.username}</td>
                  <td className="py-2 px-4">{row.users.email}</td>
                  <td className="py-2 px-4">
                  {
                    row.organizations.length>0 ? <div>
                      {row.organizations.map((org:any, i:number) => <tr key={i}>{org.name}<br /></tr>)}
                    </div>: <span className='text-base-300'>No Organization</span>
                  }  
                  </td>
                  <td className="py-2 px-4">{row.id}</td>
                  <td className='py-2 px-4'>
                    <div className='w-full flex-c-c'>
                      <Link href={route('student.show', {id : row.id})}>
                        <NavigateIcon className="w-6 h-6 hover:opacity-60"/>
                      </Link>
                    </div>
                  </td>
                </tr>
                ))}
                {<tr className=''>
                    <td className='py-4 text-lg font-extrabold bg-primary text-base-100'>
                        <b className=''>{students.from} to {students.to}</b> of {students.total}
                    </td>
                    <td className='bg-primary'></td>
                    <td className='bg-primary'></td>
                    <td className="bg-primary"></td>
                    <td className='bg-primary'></td>
                    <td className='py-4 text-lg font-extrabold bg-primary pr-6'>
                      <div className="join">
                        {
                          students.prev_page_url? <Link href={route('instructor.index', {page : students.current_page - 1})}>
                          <button className="join-item btn btn-sm">«</button>
                          </Link>:<button className="join-item btn btn-sm">«</button>
                        }
                        <button className="join-item btn btn-sm">Page {students.current_page}</button>
                        {
                          students.next_page_url? <Link href={route('instructor.index',{page : students.current_page + 1})}>
                          <button className="join-item btn btn-sm">»</button>
                          </Link>:<button className="join-item btn btn-sm">»</button>
                        }
                      </div>
                    </td>
                </tr>}
            </tbody>
            </table>
            :
            <div className='w-full border-2 shadow-sm'>
              <div className='bg-primary h-16 w-full'></div>
              <div className='w-full flex-c-c h-96 font-bold text-2xl'>
                No Students
              </div>
            </div>
            }
        </div>
      </div>
    );
  };


  const SearchFilter = ({input, setInput, onClick} : {input : string, setInput: any, onClick:MouseEventHandler<HTMLButtonElement>}) => {
    return(
        <div className="join my-5 border-2 border-primary">
            <div>
                <div>
                  <input value={input} onChange={(e) => setInput(e.target.value)}  className="input input-bordered join-item" placeholder="Search..."/>
                </div>
            </div>
            <select className="select select-bordered join-item">
                <option disabled selected>Search By</option>
                <option>Name</option>
                <option>ID</option>
                <option>Email</option>
                <option>Username</option>
            </select>
            <div className="indicator">
                <button onClick={onClick}  className="btn join-item btn-primary">Search</button>
            </div>
        </div>
    )
}
export default Table;
