import React from "react";
import DashBoard from "../common/DashBoard";
import { Outlet, useParams, Link, useNavigate } from "react-router";
import ProfileCard from "../common/ProfileCard";

const PartPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div className="flex h-full">
      <div className="flex-2">
        <DashBoard>
          <DashBoard.header>PART {id}</DashBoard.header>
          <DashBoard.body>
            <div className="flex h-full">
              <div className="flex-1 shadow-sm relative">
                <DashBoard.header>
                  <h1>MEMBER</h1>
                  <button
                    onClick={() => navigate("/admin")}
                    className="absolute top-3 right-3 text-gray-400 py-1 px-2 hover:text-white hover:bg-purple-600 transition cursor-pointer"
                  >
                    <i className="fa-solid fa-user-plus"></i>
                  </button>
                </DashBoard.header>
                <DashBoard.body>
                  <ProfileCard />
                  <ProfileCard />
                  <ProfileCard />
                </DashBoard.body>
              </div>

              <div className="flex-1">
                <DashBoard.header>CATEGORY</DashBoard.header>
                <DashBoard.body>
                  <ul>
                    <li>
                      <Link to="teamMeeting" className="block click-style p-4">
                        TEAM MEETING
                      </Link>
                    </li>
                    <li>
                      <Link to="weeklyPaper" className="block click-style p-4">
                        WEAKLY PAPER
                      </Link>
                    </li>
                    <li>
                      <Link to="mentoring" className="block click-style p-4">
                        MENTORING
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="sprintMission"
                        className="block click-style p-4"
                      >
                        SPRINT MISSION
                      </Link>
                    </li>
                    <li>
                      <Link to="etc" className="block click-style p-4">
                        ETC
                      </Link>
                    </li>
                  </ul>
                </DashBoard.body>
              </div>
            </div>
          </DashBoard.body>
        </DashBoard>
      </div>

      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default PartPage;
