import { Link } from '@inertiajs/react'
import React from 'react'

const Breadcrumb = ({list}:{list : {title : string, href: string | null}[]}) => {
  return (
    <div className="text-sm breadcrumbs">
        <ul>
            {
              list.map((item, index)=> <li>
                {item.href ? <Link href={item.href}>{item.title}</Link> : item.title}
              </li>)
            }
            {/* <li><Link href='/'>Home</Link></li> 
            <li><Link href='/'>Documents</Link></li> 
            <li>Add Document</li> */}
        </ul>
    </div>
  )
}

export default Breadcrumb