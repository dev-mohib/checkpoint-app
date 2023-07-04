import { NavigateIcon } from '@/Components/icons/icons';
import { Link } from '@inertiajs/react';
import React, { useState } from 'react';
const dummyData = [
    {
      name: 'John',
      username: 'Doe',
      email: 'john.doe@example.com',
      address: 'New York',
      logo : "/laptop.jpg"
    },
    {
      name: 'Jane',
      username: 'Smith',
      email: 'jane.smith@example.com',
      address: 'London',
      logo : "/laptop.jpg"
    },
    {
      name: 'Michael',
      username: 'Johnson',
      email: 'michael.johnson@example.com',
      address: 'Paris',
      logo : "/laptop.jpg"
    },
    {
      name: 'Emily',
      username: 'Brown',
      email: 'emily.brown@example.com',
      address: 'Berlin',
      logo : "/laptop.jpg"
    },
    {
      name: 'David',
      username: 'Wilson',
      email: 'david.wilson@example.com',
      address: 'Tokyo',
      logo : "/laptop.jpg"
    },
    {
      name: 'Sarah',
      username: 'Anderson',
      email: 'sarah.anderson@example.com',
      address: 'Sydney',
      logo : "/laptop.jpg"
    },
    {
      name: 'Christopher',
      username: 'Thomas',
      email: 'christopher.thomas@example.com',
      address: 'Toronto',
      logo : "/laptop.jpg"
    },
    {
      name: 'Olivia',
      username: 'Robinson',
      email: 'olivia.robinson@example.com',
      address: 'Chicago',
      logo : "/laptop.jpg"
    },
    {
      name: 'Daniel',
      username: 'Walker',
      email: 'daniel.walker@example.com',
      address: 'Los Angeles',
      logo : "/laptop.jpg"
    },
    {
      name: 'Sophia',
      username: 'Harris',
      email: 'sophia.harris@example.com',
      address: 'Melbourne',
      logo : "/laptop.jpg"
    }
  ];
  const Table = () => {
    const [data, setData] = useState(dummyData); // Your data array goes here
    const [sortColumn, setSortColumn] = useState(null);
    const [sortOrder, setSortOrder] = useState('asc');
    const [filters, setFilters] = useState({
      name: '',
      username: '',
      email: '',
      address: '',
      logo : "/laptop.jpg"
    });
  
    // Function to handle sorting of columns
    const handleSort = (column : any) => {
      if (sortColumn === column) {
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
      } else {
        setSortColumn(column);
        setSortOrder('asc');
      }
    };
  
    // Apply filters and sorting to the data
    let filteredData = [...data];
    Object.keys(filters).forEach((column) => {
        //   @ts-ignore
      const filterValue = filters[column].toLowerCase();
      if (filterValue) {
        filteredData = filteredData.filter((row) =>
        //   @ts-ignore
          row[column].toLowerCase().includes(filterValue)
        );
      }
    });
  
    if (sortColumn) {
      filteredData.sort((a, b) => {
        const aValue = a[sortColumn];
        const bValue = b[sortColumn];
        if (aValue < bValue) {
          return sortOrder === 'asc' ? -1 : 1;
        } else if (aValue > bValue) {
          return sortOrder === 'asc' ? 1 : -1;
        } else {
          return 0;
        }
      });
    }
    const createOrganization = () =>{ 
        // @ts-ignore
        document.getElementById("CreateNewOrgModel")?.showModal()
    }
    return (
      <div className="container mx-auto p-4">
        <div className='w-full flex-r-b'>
            <SearchOrganization />
            <Link href={route('organization.create')} className='btn btn-primary mx-2 cursor-pointer' onClick={createOrganization}>Add New</Link>
        </div>
            <table className="table table-lg bg-base-100 ">
            <thead>
                <tr className=''>
                <th className="py-2 px-4 bg-primary rounded-tl-3xl">
                    <div 
                        className="flex items-center cursor-pointer text-sm font-extrabold m-2 text-base-200" 
                        onClick={() => handleSort('name')}>
                    Name{' '}
                    <b className='ml-1 text-secondary'>{sortColumn === 'name' && sortOrder === 'asc' ? '↑' : '↓'}</b>
                    </div>
                    <input 
                        className="input input-bordered mt-2 px-2 py-1 input-sm" 
                        placeholder="Search..."
                        type="text"
                        value={filters.name}
                        onChange={(e) =>
                        setFilters({ ...filters, name: e.target.value })
                        }    
                    />
                </th>
                <th className="py-2 px-4 bg-primary">
                    <div 
                        className="flex items-center cursor-pointer text-sm font-extrabold m-2 text-base-200" 
                        onClick={() => handleSort('username')}>
                    Username{' '}
                    <b className='ml-1 text-secondary'>{sortColumn === 'username' && sortOrder === 'asc' ? '↑' : '↓'}</b>
                    </div>
                    <input
                    className="input input-bordered mt-2 px-2 py-1 input-sm" 
                    placeholder="Search..."
                    type="text"
                    value={filters.username}
                    onChange={(e) =>
                        setFilters({ ...filters, username: e.target.value })
                    }
                    />
                </th>
                <th className="py-2 px-4 bg-primary">
                    <div 
                        className="flex items-center cursor-pointer text-sm font-extrabold m-2 text-base-200" 
                        onClick={() => handleSort('email')}>
                    Email{' '}
                    <b className='ml-1 text-secondary'>{sortColumn === 'email' && sortOrder === 'asc' ? '↑' : '↓'}</b>
                    </div>
                    <input
                    className="input input-bordered mt-2 px-2 py-1 input-sm" 
                    placeholder="Search..."
                    type="text"
                    value={filters.email}
                    onChange={(e) =>
                        setFilters({ ...filters, email: e.target.value })
                    }
                    />
                </th>
                <th className="py-2 px-4 bg-primary">
                    <div 
                        className="flex items-center cursor-pointer text-sm font-extrabold m-2 text-base-200" 
                        onClick={() => handleSort('address')}>
                    Address{' '}
                    <b className='ml-1 text-secondary'>{sortColumn === 'address' && sortOrder === 'asc' ? '↑' : '↓'}</b>
                    </div>
                    <input
                    className="input input-bordered mt-2 px-2 py-1 input-sm" 
                    placeholder="Search..."
                    type="text"
                    value={filters.address}
                    onChange={(e) =>
                        setFilters({ ...filters, address: e.target.value })
                    }
                    />
                </th>
                <th className='bg-primary rounded-tr-3xl'></th>
                </tr>
            </thead>
            <tbody>
                {filteredData.map((row, index) => (
                <tr key={index} className='hover cursor-pointer px-7'>
                    <div className="flex items-center space-x-3 ml-3 my-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-10 h-10">
                                <img src={row.logo} alt="Avatar" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{row.name}</div>
                            <div className="text-sm opacity-50">{'test'}</div>
                        </div>
                    </div>
                    <td className="py-2 px-4">{row.username}</td>
                    <td className="py-2 px-4">{row.email}</td>
                    <td className="py-2 px-4">{row.address}</td>
                    <td>
                      <NavigateIcon className="w-8 h-8 hover:opacity-60"/>
                    </td>
                </tr>
                ))}
                <tr className=''>
                    <td className='py-4 text-lg font-extrabold bg-primary rounded-bl-3xl'>
                        <b className=''>1 to 10</b> of 180
                    </td>
                    <td className='bg-primary'></td>
                    <td className='bg-primary'></td>
                    <td className='py-4 text-lg font-extrabold bg-primary'>
                      <div className="join">
                        <button className="join-item btn">«</button>
                        <button className="join-item btn">Page 1</button>
                        <button className="join-item btn">»</button>
                      </div>
                    </td>
                    <td className='bg-primary rounded-br-3xl'>
                      
                    </td>
                </tr>

            </tbody>
            </table>
      </div>
    );
  };


  const SearchOrganization = () => {
    return(
        <div className="join my-5">
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
                <button className="btn join-item btn-success">Search</button>
            </div>
        </div>
    )
}
export default Table;
