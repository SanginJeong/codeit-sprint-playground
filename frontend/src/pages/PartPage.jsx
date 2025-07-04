import React from 'react'
import DashBoard from '../common/DashBoard'
import { Outlet, useParams, Link } from 'react-router'

const PartPage = () => {
  const {id} = useParams();
  console.log(id);
  
  return (
    <div className='flex'>
      <div className='flex-2'>
        <DashBoard>
          <DashBoard.header>PART {id}</DashBoard.header>
          <DashBoard.body>
            <div className='flex'>
              <div className="flex-1">
                <DashBoard>
                  <DashBoard.header>MEMBER</DashBoard.header>
                </DashBoard>
              </div>
              <div className="flex-1">
                <DashBoard>
                  <DashBoard.header>CATEGORY</DashBoard.header>
                  <DashBoard.body>
                    <ul>
                      <li className='click-style p-2'><Link className='block' to="meeting">TEAM MEETING</Link></li>
                      <li className='click-style p-2'><Link className='block' to="weeklyPaper">WEEKLY PAPER</Link></li>
                      <li className='click-style p-2'><Link className='block' to="mentoring">MENTORING</Link></li>
                    </ul>
                  </DashBoard.body>
                </DashBoard>
              </div>
            </div>
          </DashBoard.body>
        </DashBoard>
      </div>

      <div className='flex-1'>
        <Outlet/>
      </div>
    </div>
  )
}

export default PartPage