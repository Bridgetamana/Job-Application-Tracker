import React from "react";
import SideBar from "./Components/SideBar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <SideBar />
      <div className="p-4 flex-grow lg:ml-64 h-auto pt-20 lg:pt-12 bg-[#F6F6F6]">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
