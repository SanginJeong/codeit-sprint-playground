import React from 'react'

const DashBoard = ({children}) => {
  return <div className='shadow-sm h-[100vh]'>{children}</div>
}

DashBoard.header = ({children}) => {
  return <div className='font-bold text-purple-600 shadow-sm p-4 text-center'>{children}</div>
}

DashBoard.body = ({children}) => {
  return <div className='font-bold'>{children}</div>
}

export default DashBoard