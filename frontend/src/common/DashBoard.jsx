import React from 'react'

const DashBoard = ({children}) => {
  return <div className='shadow-sm h-full flex flex-col'>{children}</div>
}

DashBoard.header = ({children}) => {
  return <div className='flex-[1] font-bold text-purple-600 shadow-sm p-4 text-center'>{children}</div>
}

DashBoard.body = ({children}) => {
  return <div className='flex-[30] font-bold flex flex-col justify-between'>{children}</div>
}

export default DashBoard