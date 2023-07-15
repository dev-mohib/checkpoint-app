import React, { MouseEventHandler, useEffect, useState } from 'react';
import { NavigateIcon } from '@/Components/icons/icons';
import { Link, useForm, usePage  } from '@inertiajs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { PageProps } from '@/types';

  const Table = () => {
    const { organizations, ziggy } = usePage<PageProps<{organizations : any}>>().props
    const [input, setInput] = useState('')
    const [filter, setFilter] = useState('name')

    useEffect(() => {
      const f = `${ziggy?.query.filter}`
      if(f == 'name'){
        setFilter(f)
        setInput(ziggy?.query.name)
      }
      else if(f == 'email'){
        setFilter(f)
        setInput(ziggy?.query.email)
      }
      else if(f == 'address'){
        setFilter(f)
        setInput(ziggy?.query.address)
      }
      else if(f == 'id'){
        setFilter(f)
        setInput(ziggy?.query.id)
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
                </select>
                <div className="indicator ">
                    <Link href={route('organization.index', {
                      name: filter == 'name' ? input:'', 
                      email : filter == 'email'?input:'', 
                      username:filter == 'username'?input:'', 
                      id: filter == 'id'?input : '', 
                      filter: filter})}  className="btn join-item btn-primary">Search</Link>
                </div>
            </div>
            <Link  href={route('organization.create')} className='btn btn-primary m-4 cursor-pointer' onClick={createOrganization}>Add New</Link>
        </div>
        <div>
            <table className="table table-sm bg-base-100 shadow-md">
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
                      Address
                  </th>
                  <th>
                      ID
                  </th>
                  <th>
                  </th>
                </tr>
            </thead>
            <tbody>
                {organizations.data.map((row : any, index : number) => (
                <tr key={index} className='cursor-pointer hover'>
                  <td>
                    <div className="flex items-center space-x-3 ml-3 my-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-10 h-10">
                                <img src={row.logo} alt="Avatar" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{row.name}</div>
                            {/* <div className="text-sm opacity-50">{row.status}</div> */}
                        </div>
                    </div>
                  </td>
                  <td className="py-2 px-4">{row.users.username}</td>
                  <td className="py-2 px-4">{row.users.email}</td>
                  <td className="py-2 px-4">{row.users.address}</td>
                  <td className="py-2 px-4">{row.id}</td>
                  <td className='py-2 px-4'>
                    <div className='w-full flex-c-c'>
                      <Link href={route('organization.show', {id : row.id})}>
                        <NavigateIcon className="w-6 h-6 hover:opacity-60"/>
                      </Link>
                    </div>
                  </td>
                </tr>
                ))}
                <tr className=''>
                    <td className='py-4 text-lg font-extrabold bg-primary text-base-100'>
                        <b className=''>{organizations.from} to {organizations.to}</b> of {organizations.total}
                    </td>
                    <td className='bg-primary'></td>
                    <td className='bg-primary'></td>
                    <td className="bg-primary"></td>
                    <td className='bg-primary'></td>
                    <td className='py-4 text-lg font-extrabold bg-primary pr-6'>
                      <div className="join">
                        {
                          organizations.prev_page_url? <Link href={route('organization.index', {page : organizations.current_page - 1})}>
                          <button className="join-item btn btn-sm">«</button>
                          </Link>:<button className="join-item btn btn-sm">«</button>
                        }
                        <button className="join-item btn btn-sm">Page {organizations.current_page}</button>
                        {
                          organizations.next_page_url? <Link href={route('organization.index',{page : organizations.current_page + 1})}>
                          <button className="join-item btn btn-sm">»</button>
                          </Link>:<button className="join-item btn btn-sm">»</button>
                        }
                      </div>
                    </td>
                </tr>
            </tbody>
            </table>
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
