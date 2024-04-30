import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navigation } from '../../componets/navigation/Navigation'
import './mainpage.css'
export const MainPage = () => {
  return (
    <div className='main-page-container'>
     <Navigation/>

<Outlet/>



    </div>
  )
}
