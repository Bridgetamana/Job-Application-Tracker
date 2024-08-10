import { useState, useEffect } from "react";
import { SidebarMenuItem } from "./SidebarMenuItem";
import { RiLogoutCircleRFill } from "react-icons/ri";
import { RiSettings5Fill } from "react-icons/ri";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { BsLayoutSidebarInset } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";

const SideBar = () => {
  //bottom dropdown
  const dropdownMenu = [
    {
      id: 0,
      label: "Settings",
      icon: <RiSettings5Fill />,
      path: "settings",
    },
    {
      id: 1,
      label: "Log Out",
      icon: <RiLogoutCircleRFill />,
      path: "/login",
    },
  ];

  //usestates
  const menuItems = SidebarMenuItem();
  const [openSidebar, setOpenSidebar] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [pageTitle, setPageTitle] = useState("");
  const location = useLocation();

  // toggle functions
  const toggleMenu = () => {
    setOpenSidebar(!openSidebar);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  // find page title function
  const findPageTitle = () => {
    const currentItem = menuItems.find((item) =>
      location.pathname.endsWith(item.path)
    );
    const currentDropdownItem = dropdownMenu.find((item) =>
      location.pathname.endsWith(item.path)
    );
    if (currentItem) {
      setPageTitle(currentItem.label);
    } else if (currentDropdownItem) {
      setPageTitle(currentDropdownItem.label);
    } else {
      setPageTitle("");
    }
  };

  useEffect(() => {
    findPageTitle();
  }, [location.pathname, menuItems]);

  return (
    <div>
      <nav
        className={`px-5 py-3 fixed z-50 w-full lg:hidden bg-[#19211D] text-white ${
          openSidebar ? "-translate-y-full" : "translate-x-0"
        }`}
      >
        <div className="flex gap-3 items-center">
          <button
            className="text-xl lg:hidden"
            title="Expand Sidebar"
            onClick={toggleMenu}
          >
            <BsLayoutSidebarInset className="" />
          </button>
          <h3 className="md:text-lg">{pageTitle}</h3>
        </div>
      </nav>

      {openSidebar && (
        <div
          className="fixed inset-0 bg-black/60 z-40"
          onClick={toggleMenu}
        ></div>
      )}

      <div
        className={`fixed h-full top-0 left-0 bottom-0 z-40 w-56 py-4 lg:py-6 transition-transform 
 ${
   openSidebar ? "translate-x-0" : "-translate-x-full lg:block"
 } bg-[#19211D] lg:translate-x-0`}
      >
        <div className="rounded-[20px] overflow-y-auto px-4 bg-[#19211D] text-white h-full">
          <div className="flex items-center justify-between pl-6">
            <p className="text-sm">Job Tracker</p>
            <button
              className="text-xl lg:hidden"
              title="Minimize Sidebar"
              onClick={toggleMenu}
            >
              <BsLayoutSidebarInset className="" />
            </button>
          </div>

          {/* Top sidebar items */}
          <ul className="space-y-4 mt-6">
            {menuItems.map((item) => (
              <li key={item.id} onClick={toggleMenu}>
                <Link
                  to={item.path}
                  className="flex items-center gap-2 py-2 pl-5 rounded-full cursor-pointer hover:bg-[#E0E1E0] hover:text-primary-text transition-colors duration-300"
                >
                  <span className="text-xl">{item.icon}</span>
                  <h4 className="">{item.label}</h4>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Bottom sidebar items */}
        <div className="absolute bottom-0 p-6 left-0">
          {dropdownVisible && (
            <div className="my-4 rounded shadow-sm absolute bottom-14 bg-[#19211D] w-44 lg:hidden">
              <ul className="py-3 text-white space-y-2">
                {dropdownMenu.map((item) => (
                  <Link to={item.path}
                    key={item.id}
                    className="flex items-center gap-2 py-2 pl-5 rounded-full cursor-pointer hover:bg-[#E0E1E0] hover:text-primary-text transition-colors duration-300"
                    onClick={toggleMenu}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <div className="text-sm">
                      {item.label}
                    </div>
                  </Link>
                ))}
              </ul>
            </div>
          )}
          <div className="my-4 rounded shadow-sm absolute bottom-1 bg-[#19211D] w-44">
            <ul className="py-3 text-white space-y-2">
              {dropdownMenu.map((item) => (
                <Link to={item.path}
                  key={item.id}
                  className="flex items-center gap-2 py-2 pl-5 rounded-full cursor-pointer hover:bg-[#E0E1E0] hover:text-primary-text transition-colors duration-300"
                  onClick={toggleMenu}
                >
                  <span className="text-xl">{item.icon}</span>
                  <div to={item.path} className="text-sm">
                    {item.label}
                  </div>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
