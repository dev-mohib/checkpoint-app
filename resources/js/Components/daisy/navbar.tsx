import React, { useState } from 'react'
import { DarkThemeIcon, LightThemeIcon, UserIcon, NotificationIcon, MenuIcon} from '@/Components/icons/icons'
import { Link } from '@inertiajs/react'
const Navbar = ({page = "Checkpoint"} : {page : string}) => {
    const [isDark, setDark] = useState(false)
  return (
    <div className='fixed bg-purple-300 Navbar z-40'>
    <div className="navbar bg-white">
        <div className='ml-4 cursor-pointer mr-1'>
            <label htmlFor="dashboardSideBar" className="drawer-button lg:hidden">
                <MenuIcon className="w-7 h-7 cursor-pointer" />
            </label>
        </div>
        <div className="flex">
            <a className="normal-case text-xl font-extrabold">{page.toLocaleUpperCase()}</a>
        </div>
        <div className="flex-grow justify-end">
            <label onClick={() => setDark(d => !d)}  className="btn btn-ghost btn-circle avatar flex flex-row justify-center items-center">
                {
                isDark ?<LightThemeIcon className="w-5 rounded-full h-5"/>
                :
                <DarkThemeIcon className="w-5 rounded-full h-5"/>
                }                
            </label>
            <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                    <NotificationIcon className="w-5 h-5" />
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
            </div>
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
                <li><a>Settings</a></li>
                <li><Link href={route('logout')} method="post">Logout</Link></li>
            </ul>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Navbar