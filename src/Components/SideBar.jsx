import React, { useState } from "react";
import { SidebarMenuItem } from "./SidebarMenuItem";
import { MdOutlineMenu } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const SideBar = () => {
  const menuItems = SidebarMenuItem();
  const [openSidebar, setOpenSidebar] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleMenu = () => {
    setOpenSidebar(!openSidebar);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div>
      <nav className="border-b border-gray-200 px-4 py-2.5 fixed left-0 right-0 top-0 z-50 lg:hidden">
        <div className="flex gap-8 items-center">
          <button className="text-2xl" onClick={toggleMenu}>
            <MdOutlineMenu />
          </button>
          <h3>Home</h3>
        </div>
      </nav>
      <div
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-6 transition-transform ${
          openSidebar ? "translate-x-0" : "-translate-x-full"
        } bg-white border-r border-gray-200 lg:translate-x-0`}
      >
        <div className="overflow-y-auto py-5 px-3 h-full bg-white">
          <ul className="space-y-2 border-b pb-4 border-gray-200">
            {menuItems.map((item) => (
              <li key={item.id} onClick={toggleMenu}>
                <Link
                  to={item.path}
                  className="flex items-center p-2 text-base font-medium text-[#1C2020] rounded-lg transition duration-75 hover:bg-[#DFF8F1] cursor-pointer hover:text-[#1B4339]"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <h4 className="ml-3">{item.label}</h4>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="absolute bottom-0 left-0 p-4">
          {dropdownVisible && (
            <div
              className="my-4 w-56 text-base rounded divide-y divide-gray-100 shadow"
              id="dropdown"
            >
              <ul className="py-1 text-gray-700" aria-labelledby="dropdown">
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 text-sm hover:bg-gray-100"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 text-sm hover:bg-gray-100"
                  >
                    Log Out
                  </a>
                </li>
              </ul>
            </div>
          )}
          <div
            className="flex items-center gap-8 hover:cursor-pointer"
            onClick={toggleDropdown}
          >
            <span className="bg-[#DFF8F1] text-[#1B4339] rounded-full p-2.5">
              BA
            </span>
            <span>
              <IoIosArrowDown />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
