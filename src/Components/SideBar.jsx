import { useState, useEffect } from "react";
import { SidebarMenuItem } from "./SidebarMenuItem";
import { MdOutlineMenu, MdOutlineLogout } from "react-icons/md";
import { IoIosArrowDown, IoMdSettings } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

const SideBar = () => {
  
  const dropdownMenu = [
    {
      id: 0,
      label: "Settings",
      icon: <IoMdSettings />,
      path: "settings",
    },
    {
      id: 1,
      label: "Log Out",
      icon: <MdOutlineLogout />,
      path: "/login",
    },
  ];

  const menuItems = SidebarMenuItem();
  const [openSidebar, setOpenSidebar] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [pageTitle, setPageTitle] = useState("");
  const location = useLocation();

  const toggleMenu = () => {
    setOpenSidebar(!openSidebar);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const findPageTitle = () => {
    const currentItem = menuItems.find((item) =>
      location.pathname.endsWith(item.path)
    );
    const currentdropdownItem = dropdownMenu.find((item) =>
      location.pathname.endsWith(item.path)
    );
    if (currentItem) {
      setPageTitle(currentItem.label);
    } else if (currentdropdownItem) {
      setPageTitle(currentdropdownItem.label);
    } else {
      setPageTitle("");
    }
  };

  useEffect(() => {
    findPageTitle();
  }, [location.pathname, menuItems]);

  return (
    <div>
      <nav className="border-b border-gray-light px-5 py-4 fixed left-0 right-0 top-0 z-50 lg:hidden bg-white">
        <div className="flex gap-8 items-center">
          <button className="text-xl md:text-3xl" onClick={toggleMenu}>
            <MdOutlineMenu />
          </button>
          <h3 className="md:text-2xl">{pageTitle}</h3>
        </div>
      </nav>
      <div
        className={`fixed top-0 left-0 z-40 w-56 h-screen pt-8 transition-transform ${
          openSidebar ? "translate-x-0" : "-translate-x-full"
        } bg-white border-r border-gray-light lg:translate-x-0`}
      >
        <div className="overflow-y-auto py-4 px-6 h-full bg-white">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id} onClick={toggleMenu}>
                <Link
                  to={item.path}
                  className="flex items-center p-2 text-[#606060] rounded-lg transition duration-75 hover:bg-teal-light cursor-pointer hover:text-teal focus:text-gray-dark focus:bg-teal-light text-lg"
                >
                  <span className="text-xl">{item.icon}</span>
                  <h4 className="ml-3">{item.label}</h4>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="absolute bottom-0 left-0 p-4 border-t border-gray-light w-full">
          {dropdownVisible && (
            <div className="my-4 w-56 rounded shadow-sm absolute bottom-14">
              <ul className="py-3 text-[#606060]">
                {dropdownMenu.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center gap-2 p-3 hover:bg-teal-light cursor-pointer rounded-lg hover:text-teal focus:text-gray-dark focus:bg-teal-light text-lg"
                    onClick={toggleMenu}
                  >
                    <span>{item.icon}</span>
                    <Link to={item.path} className="text-sm">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div
            className="flex items-center justify-between hover:cursor-pointer"
            onClick={toggleDropdown}
          >
            <span className="bg-teal-light text-teal-dark rounded-full p-2">
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
