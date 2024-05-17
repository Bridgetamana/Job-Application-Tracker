import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { MdDelete } from "react-icons/md";

const Applications = () => {
  const dropdownMenu = [
    {
      id: 0,
      label: "Status",
    },
    {
      id: 1,
      label: "Date",
    },
    {
      id: 2,
      label: "Company",
    },
    {
      id: 3,
      label: "Role",
    },
  ];

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  return (
    <div >
      <span className="flex justify-between items-center">
        <h2 className="text-teal-dark text-3xl font-semibold mb-6">
          Applications
        </h2>
        <button className="bg-teal text-white rounded-md py-2 px-2.5 flex justify-center items-center gap-3 text-sm">
          <a href="#">Add new Job</a>
          <span className="text-sm">
            <FaPlus />
          </span>
        </button>
      </span>

      <div>
        <div
          className="flex items-center justify-between hover:cursor-pointer w-32 p-2 border border-gray-light rounded-lg"
          onClick={toggleDropdown}
        >
          <p className="rounded-lg text-sm px-2 py-1.5">Filter</p>
          <span>
            <IoIosArrowDown />
          </span>
        </div>
        {dropdownVisible && (
          <div className="my-4 bg-white rounded shadow z-10 absolute">
            <ul className="py-2 px-3 text-[#606060]">
              {dropdownMenu.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center gap-2 py-2 px-3 rounded-md hover:bg-teal-light cursor-pointer hover:text-teal focus:text-gray-dark focus:bg-teal-light"
                >
                  <p>{item.label}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        <div>
          <span className="text-center">
            <p className="bg-blue-light text-blue rounded-md pl-4 py-2">
              Applied (0)
            </p>
          </span>
          <div className="rounded-lg drop-shadow-sm bg-white mt-6 p-4 cursor-pointer hover:drop-shadow">
            <div className="flex justify-between items-center">
              <p className="text-teal">Virtual Assistant</p>
              <span className="text-gray text-lg">
                <MdDelete />
              </span>
            </div>
            <h3 className="text-2xl mb-6 text-gray-dark">CBN</h3>
            <p className="text-[10px] text-gray">2 weeks ago</p>
          </div>
          <div className="rounded-lg drop-shadow-sm bg-white mt-6 p-4 cursor-pointer hover:drop-shadow">
            <div className="flex justify-between items-center">
              <p className="text-teal">Virtual Assistant</p>
              <span className="text-gray text-lg">
                <MdDelete />
              </span>
            </div>
            <h3 className="text-2xl mb-6 text-gray-dark">CBN</h3>
            <p className="text-[10px] text-gray">2 weeks ago</p>
          </div>
        </div>
        <div>
          <span className="text-center">
            <p className="bg-orange-light text-orange rounded-md pl-4 py-2">
              Interview (0)
            </p>
          </span>
        </div>
        <div>
          <span className="text-center">
            <p className="bg-teal-light text-teal rounded-md pl-4 py-2">
              Offered (0)
            </p>
          </span>
        </div>
        <div>
          <span className="text-center">
            <p className="bg-red-light text-red rounded-md pl-4 py-2">
              Rejected (0)
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Applications;
