import React from 'react'
import DashBoard from '../common/DashBoard'
import { Outlet } from 'react-router'
import Sidebar from '../common/Sidebar'
const AppLayout = () => {
  return (
    <>
      <div className='flex'>
        <div className='flex-1'>
          <Sidebar/>
        </div>
        <div className='flex-5'>
          <Outlet/>
        </div>
      </div>
    </>
  )
}

export default AppLayout