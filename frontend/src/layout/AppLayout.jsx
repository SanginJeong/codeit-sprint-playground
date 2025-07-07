import React from 'react'
import DashBoard from '../common/DashBoard'
import { Outlet } from 'react-router'
import Sidebar from '../common/Sidebar'
const AppLayout = () => {
  return (
    <>
      <div className='flex h-[100vh]'>
        <div className='flex-1 h-full'>
          <Sidebar/>
        </div>
        <div className='flex-5 h-full'>
          <Outlet/>
        </div>
      </div>
    </>
  )
}

export default AppLayout