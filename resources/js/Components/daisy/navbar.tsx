import React, { useState } from 'react'
import { MoonIcon, SunIcon, UserIcon, BellIcon, MenuIcon} from '@/Components/icons'
import { Link, usePage } from '@inertiajs/react'
import { PageProps } from '@/types'
const Navbar = () => {
    const [theme, setTheme] = useState(localStorage.getItem('data-theme')??'light')
    const {title} = usePage<PageProps>().props

    const handleTheme = () => {
        const htmlTag = document.querySelector('html');
        htmlTag?.setAttribute('data-theme', switchTheme(theme));
        setTheme(switchTheme(theme))
        localStorage.setItem('data-theme', switchTheme(theme))
    }
    const switchTheme = (v : string) => v === 'dark'? 'light' : 'dark'
  return (
    <div className='fixed Navbar z-40'>
    <div className="navbar bg-base-100 shadow-md">
        <div className='ml-4 cursor-pointer mr-1'>
            <label htmlFor="dashboardSideBar" className="drawer-button lg:hidden">
                <MenuIcon className="w-7 h-7 cursor-pointer" />
            </label>
        </div>
        <div className="flex">
            <a className="normal-case text-xl font-extrabold">{title}</a>
        </div>
        <div className="flex-grow justify-end">
            <label onClick={handleTheme}  className="btn btn-ghost btn-circle avatar flex flex-row justify-center items-center">
                {
                theme === 'dark' ?<SunIcon className="w-6 rounded-full h-6"/>
                :
                <MoonIcon className="w-6 rounded-full h-6"/>
                }                
            </label>
           
            {/* Notification Dropdown */}
            {/* <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <BellIcon className="w-6 h-6" />
                        <span className="badge badge-sm indicator-item">8</span>
                    </div>
                </label>
                <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                    <div className="card-body">
                        <span className="font-bold text-lg">8 Items</span>
                        <span className="text-info">Subtotal: $999</span>
                        <div className="card-actions">
                            <button className="btn btn-primary btn-block">View cart</button>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar flex flex-row justify-center items-center">
                <UserIcon className="w-5 rounded-full h-5"/>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                <Link href={route('profile.edit')} className="justify-between">
                    Profile
                    {/* <span className="badge">New</span> */}
                </Link>
                </li>
                {/* <li><a>Settings</a></li> */}
                <li><Link href={route('logout')} method="post">Logout</Link></li>
            </ul>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Navbar