import { ClearIcon, NavigateIcon } from '@/Components/icons/icons';
import { Link } from '@inertiajs/react';
import React, { useState } from 'react';

  const Table = ({organizations, query} : {organizations : any, query : any}) => {
    
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
      <div className=" p-4">
        <div className='flex-r-b'>
            {/* <SearchOrganization /> */}
            <div></div>
            <Link href={route('organization.create')} className='btn btn-primary m-4 cursor-pointer' onClick={createOrganization}>Add New</Link>
        </div>
        <div>
            <table className="table table-sm bg-base-100 shadow-md">
            <thead>
                <tr>
                  <th className="py-2 px-4 bg-primary">
                      <div 
                          className="flex items-center cursor-pointer text-sm font-extrabold m-1 text-base-200" 
                          >
                      Name
                      </div>
                      <div className='input-group'>
                      <input 
                          className="input border-none input-xs w-full" 
                          placeholder="Search..."
                          type="text"
                          value={name}
                          onChange={(e) =>
                          setName(e.target.value )
                          }    
                      />
                        <button onClick={() => setName('')}  className='btn px-2 bg-base-100  btn-xs py-1'>
                          <ClearIcon className="w-4 h-4"/>
                        </button>
                      </div>
                  </th>
                  <th className="py-2 px-4 bg-primary">
                      <div 
                          className="flex items-center cursor-pointer text-sm font-extrabold m-1 text-base-200" 
                      >
                      Username
                      </div>
                      <div className='input-group'>
                      <input 
                          className="input border-none input-xs w-full" 
                          placeholder="Search..."
                          type="text"
                          value={username}
                          onChange={(e) =>
                          setUsername(e.target.value )
                          }    
                      />
                        <button onClick={() => setUsername('')}  className='btn px-2 bg-base-100  btn-xs py-1'>
                          <ClearIcon className="w-4 h-4"/>
                        </button>
                      </div>
                  </th>
                  <th className="py-2 px-4 bg-primary">
                      <div 
                          className="flex items-center cursor-pointer text-sm font-extrabold m-1 text-base-200" 
                      >
                      Email
                      </div>
                      <div className='input-group'>
                      <input 
                          className="input border-none input-xs w-full" 
                          placeholder="Search..."
                          type="text"
                          value={email}
                          onChange={(e) =>
                          setEmail(e.target.value )
                          }    
                      />
                        <button onClick={() => setEmail('')}  className='btn px-2 bg-base-100  btn-xs py-1'>
                          <ClearIcon className="w-4 h-4"/>
                        </button>
                      </div>
                  </th>
                  <th className="py-2 px-4 bg-primary">
                      <div 
                          className="flex items-center cursor-pointer text-sm font-extrabold m-1 text-base-200" 
                      >
                      Address
                      </div>
                      <div className='input-group'>
                      <input 
                          className="input border-none input-xs w-full" 
                          placeholder="Search..."
                          type="text"
                          value={address}
                          onChange={(e) =>
                          setAddress(e.target.value )
                          }    
                      />
                        <button onClick={() => setAddress('')}  className='btn px-2 bg-base-100 btn-xs py-1'>
                          <ClearIcon className="w-4 h-4"/>
                        </button>
                      </div>
                  </th>
                  <th className="py-2 px-4 bg-primary">
                      <div 
                          className="flex items-center cursor-pointer text-sm font-extrabold m-1 text-base-200" 
                      >
                      ID
                      </div>
                      <div className='input-group'>
                      <input 
                          className="input border-none input-xs w-full"
                          style={{minWidth : 50}}  
                          placeholder="Search..."
                          type="text"
                          value={id}
                          onChange={(e) =>
                          setId(e.target.value )
                          }    
                      />
                        <button onClick={()=>setId('')}  className='btn px-2 bg-base-100  btn-xs py-1'>
                          <ClearIcon className="w-4 h-4"/>
                        </button>
                      </div>
                  </th>
                  <th className='bg-primary'>
                    <div className='flex-r-c'>
                      <Link href={route('organization.index', {name,email,id,address,username})} className='btn btn-secondary btn-sm  mt-4 mr-4'>
                        Search
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
