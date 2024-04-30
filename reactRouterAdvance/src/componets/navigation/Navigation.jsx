import React from 'react'
import { NavLink } from 'react-router-dom'
import   './navigation.module.css'
export const Navigation = () => {
    const dark={
       color: 'red'
    }
  return (
    <nav>

<ul>
    <li> <NavLink to='/' className={({isActive})=>isActive? dark:undefined} end>Home</NavLink> </li>
    <li> <NavLink to='/product' className={({isActive})=>isActive? dark:undefined}>products</NavLink> </li>

</ul>

    </nav>
  )
}
