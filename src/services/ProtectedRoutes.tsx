import React, { useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Login from "../pages/Login";
import { RootState } from "../store";

const ProtectedRouter = () => {
  const data = useSelector((state: RootState) => state.user);
  const isLoggedIn: boolean = !!data.data;
  return isLoggedIn ? (
    <div className="overflow-hidden w-full h-full flex px-1 xl:px-13 py-2 bg-main">
      <div className="w-full rounded-md flex">
        <div className="bg-layout w-2/6 h-full border-r-2 border-main rounded-tl-md rounded-bl-md">
          <div className="flex flex-col items-center">
            <div className="text-white flex gap-2 items-center w-full justify-evenly p-3 focus:outline-none">
              <input
                type="text"
                className="w-full bg-layout focus:outline-none"
                placeholder="Search Chats"
                autoComplete="off"
              />
              <AiOutlineSearch fontSize={24} className="text-secondary" />              
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  ) : (
    <Navigate to={"/login"} />
  );
};
export default ProtectedRouter;
