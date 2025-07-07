import React from "react";
import DashBoard from "./DashBoard";
import { useNavigate, Link } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <DashBoard>
      <DashBoard.header>PART</DashBoard.header>
      <DashBoard.body>
        <ul>
          <li className="click-style p-2">
            <Link className="block" to="/part/1">
              PART 1
            </Link>
          </li>
          <li className="click-style p-2">
            <Link className="block" to="/part/2">
              PART 2
            </Link>
          </li>
          <li className="click-style p-2">
            <Link className="block" to="/part/3">
              PART 3
            </Link>
          </li>
          <li className="click-style p-2">
            <Link className="block" to="/part/4">
              PART 4
            </Link>
          </li>
        </ul>

        <div className="">
          <button
            onClick={() => navigate(-1)}
            className="p-2 my-1 bg-purple-600 text-white cursor-pointer hover:text-purple-400 hover:bg-white transition text-center w-full"
          >
            이전
          </button>
          <button
            onClick={() => navigate("/")}
            className="p-2 my-1 bg-purple-600 text-white cursor-pointer hover:text-purple-400 hover:bg-white transition text-center w-full"
          >
            홈으로
          </button>
        </div>
      </DashBoard.body>
    </DashBoard>
  );
};

export default Sidebar;
