import { Link } from '@inertiajs/react'
import React from 'react'

const Breadcrumb = ({list}:{list : {title : string, href: string | null}[]}) => {
  return (
    <div className="text-sm breadcrumbs">
        <ul>
            {
              list.map((item, index)=> <li key={index}>
                {item.href ? <Link href={item.href}>{item.title}</Link> : item.title}
              </li>)
            }
        </ul>
    </div>
  )
}

export default Breadcrumb