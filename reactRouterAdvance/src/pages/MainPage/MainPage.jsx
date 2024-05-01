import React from 'react'
import { Outlet ,useNavigation} from 'react-router-dom'
import { Navigation } from '../../componets/navigation/Navigation'
import './mainpage.css'
export const MainPage = () => {
  const navigation=useNavigation();
  return (
    <div className='main-page-container'>
     <Navigation/>
{navigation.state==='loading' && <p>Loading...</p>}
<Outlet/>



    </div>
  )
}
