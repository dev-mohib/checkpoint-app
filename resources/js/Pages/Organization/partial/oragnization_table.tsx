import Modal from '@/Components/daisy/modal'
import React from 'react'

const organizations = [
    {
        name: "Oranization 1",
        logo: "/laptop.jpg",
        email : "org@checkpoint.app",
        status : "active",
        checkpoints : 80,
        instructors: 5,
        students: 30 
    },
    {
        name: "Oranization 2",
        logo: "/laptop.jpg",
        email : "org@checkpoint.app",
        status : "active",
        checkpoints : 80,
        instructors: 20,
        students: 32 
    },
    {
        name: "Oranization 3",
        logo: "/laptop.jpg",
        email : "org@checkpoint.app",
        status : "active",
        checkpoints : 80,
        instructors: 6,
        students: 44 
    },
    {
        name: "Oranization 4",
        logo: "/laptop.jpg",
        email : "org@checkpoint.app",
        status : "active",
        checkpoints : 80,
        instructors: 14,
        students: 54 
    },
    {
        name: "Oranization 5",
        logo: "/laptop.jpg",
        email : "org@checkpoint.app",
        status : "active",
        checkpoints : 80,
        instructors: 3,
        students: 20 
    },
    {
        name: "Oranization 6",
        logo: "/laptop.jpg",
        email : "org@checkpoint.app",
        status : "active",
        checkpoints : 80,
        instructors: 2,
        students: 19
    },
    {
        name: "Oranization 7",
        logo: "/laptop.jpg",
        email : "org@checkpoint.app",
        status : "active",
        checkpoints : 80,
        instructors: 10,
        students: 60 
    }
]


const OragnizationTable = () => {

    const createOrganization = () =>{ 
        // @ts-ignore
        document.getElementById("CreateNewOrgModel")?.showModal()
    }
  return (
    <>
    <SearchOrganization />
    <Modal id="CreateNewOrgModel" title="Create Organization">
        <h4>
            Hi you can create new Organization here
        </h4>
    </Modal>
    <div className='px-4 bg-white rounded-xl'>
        <div className="overflow-x-auto w-full">
                <table className="table w-full bg-white">
                    <thead>
                        <tr className=''>
                            <td className='text-black text-lg font-bold'>Organizations</td>
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td>
                                <button className='btn btn-primary btn-sm' onClick={createOrganization}>Add New</button>
                            </td>
                        </tr>
                    </thead>
                    <tr className='active'>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Created At</th>
                        <th>Status</th>
                        <th>Instructors</th>
                        <th></th>
                        <th>Filter</th>
                    </tr>
                    <tbody>
                        {
                            organizations.map((l, k) => {
                                return(
                                    <tr key={k}>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={l.logo} alt="Avatar" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{l.name}</div>
                                                <div className="text-sm opacity-50">{'test'}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{l.email}</td>
                                    <td>12 Days ago</td>
                                    <td>{l.status}</td>
                                    <td>{l.instructors}</td>
                                    <td><button className="btn btn-square btn-ghost" >Delete</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
    </div>
    </>
  )
}

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

export default OragnizationTable