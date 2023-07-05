import { NavigateIcon } from '@/Components/icons/icons';
import { Link } from '@inertiajs/react';
import React, { useState } from 'react';

  const Table = ({organizations, query} : {organizations : any, query : any}) => {
    console.log({query})

    const [name, setName] = useState(query.name??'')
    const [username, setUsername] = useState(query.username??'')
    const [email, setEmail] = useState(query.email??'')
    const [address, setAddress] = useState(query.address??'')
    const [id, setId] = useState(query.id??'')
    const createOrganization = () =>{ 
        // @ts-ignore
        document.getElementById("CreateNewOrgModel")?.showModal()
    }
    return (
      <div className=" mx-auto p-4">
        <div className='flex-r-b'>
            {/* <SearchOrganization /> */}
            <div></div>
            <Link href={route('organization.create')} className='btn btn-primary m-4 cursor-pointer' onClick={createOrganization}>Add New</Link>
        </div>
            <table className="table table-sm bg-base-100 shadow-md">
            <thead>
                <tr className=''>
                  <th className="py-2 px-4 bg-primary rounded-tl-2xl">
                      <div 
                          className="flex items-center cursor-pointer text-sm font-extrabold m-1 text-base-200" 
                          >
                      Name
                      </div>
                      <input 
                          className="input input-bordered mt-1 px-2 py-1 input-sm" 
                          placeholder="Search..."
                          type="text"
                          value={name}
                          onChange={(e) =>
                          setName(e.target.value )
                          }    
                      />
                  </th>
                  <th className="py-2 px-4 bg-primary">
                      <div 
                          className="flex items-center cursor-pointer text-sm font-extrabold m-1 text-base-200" 
                      >
                      Username
                      </div>
                      <input
                      className="input input-bordered mt-1 px-2 py-1 input-sm" 
                      placeholder="Search..."
                      type="text"
                      value={username}
                      onChange={(e) =>
                        setUsername(e.target.value )
                      }
                      />
                  </th>
                  <th className="py-2 px-4 bg-primary">
                      <div 
                          className="flex items-center cursor-pointer text-sm font-extrabold m-1 text-base-200" 
                      >
                      Email
                      </div>
                      <input
                      className="input input-bordered mt-1 px-2 py-1 input-sm" 
                      placeholder="Search..."
                      type="text"
                      value={email}
                      onChange={(e) =>
                        setEmail(e.target.value )
                      }
                      />
                  </th>
                  <th className="py-2 px-4 bg-primary">
                      <div 
                          className="flex items-center cursor-pointer text-sm font-extrabold m-1 text-base-200" 
                      >
                      Address
                      </div>
                      <input
                      className="input input-bordered mt-1 px-2 py-1 input-sm" 
                      placeholder="Search..."
                      type="text"
                      value={address}
                      onChange={(e) =>
                        setAddress(e.target.value )
                      }
                      />
                  </th>
                  <th className="py-2 px-4 bg-primary">
                      <div 
                          className="flex items-center cursor-pointer text-sm font-extrabold m-1 text-base-200" 
                      >
                      ID
                      </div>
                      <input
                      className="input input-bordered mt-1 px-2 py-1 input-sm" 
                      placeholder="Search..."
                      type="text"
                      value={id}
                      onChange={(e) =>
                        setId(e.target.value )
                      }
                      />
                  </th>
                  <th className='bg-primary rounded-tr-2xl'>
                    <div className='flex justify-end h-full items-end'>
                      <Link href={route('organization.index', {name,email,id,address,username})} className='btn btn-secondary mt-4 mr-4'>
                        Apply
                      </Link>
                    </div>
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
                  <td className="py-2 px-4">{row.username}</td>
                  <td className="py-2 px-4">{row.email}</td>
                  <td className="py-2 px-4">{row.address}</td>
                  <td className="py-2 px-4 ">{row.id}</td>
                  <td className='py-2 px-4'>
                    <Link href={route('organization.show', {id : row.id})}>
                      <NavigateIcon className="w-6 h-6 hover:opacity-60"/>
                    </Link>
                  </td>
                </tr>
                ))}
                <tr className=''>
                    <td className='py-4 text-lg font-extrabold bg-primary rounded-bl-2xl text-base-100'>
                        <b className=''>{organizations.from} to {organizations.to}</b> of {organizations.total}
                    </td>
                    <td className='bg-primary'></td>
                    <td className='bg-primary'></td>
                    <td className="bg-primary"></td>
                    <td className='bg-primary'>  
                    </td>
                    <td className='py-4 text-lg font-extrabold bg-primary rounded-br-2xl pr-6'>
                      <div className="join">
                        {
                          organizations.prev_page_url? <Link href={route('organization.index', {page : organizations.current_page - 1})}>
                          <button className="join-item btn btn-md">«</button>
                          </Link>:<button className="join-item btn btn-md">«</button>
                        }
                        <button className="join-item btn btn-md">Page {organizations.current_page}</button>
                        {
                          organizations.next_page_url? <Link href={route('organization.index',{page : organizations.current_page + 1})}>
                          <button className="join-item btn btn-md">»</button>
                          </Link>:<button className="join-item btn btn-md">»</button>
                        }
                      </div>
                    </td>
                </tr>

            </tbody>
            </table>
      </div>
    );
  };


  const SearchOrganization = () => {
    return(
        <div className="join my-5 border-2 border-primary">
            <div>
                <div>
                <input className="input input-bordered join-item" placeholder="Search..."/>
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
                {/* <span className="indicator-item badge badge-secondary">new</span>  */}
                <button className="btn join-item btn-primary">Search</button>
            </div>
        </div>
    )
}
export default Table;
