import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import AddNewJobs from "../Components/AddNewJob";

const Applications = () => {
  // Filter dropdown options
  const dropdownMenu = [
    { id: 0, label: "Status" },
    { id: 1, label: "Date" },
    { id: 2, label: "Company" },
    { id: 3, label: "Role" },
  ];

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [showJobModal, setShowJobModal] = useState(false);
  const [jobs, setJobs] = useState([]);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleOpenJobModal = () => {
    setShowJobModal(true);
  };

  const handleAddJob = (newJob) => {
    setJobs([...jobs, newJob]);
  };

  const statusColors = {
    applied: {
      background: "bg-blue-light",
      text: "text-blue",
    },
    interview: {
      background: "bg-orange-light",
      text: "text-orange",
    },
    offered: {
      background: "bg-teal-light",
      text: "text-teal",
    },
    rejected: {
      background: "bg-red-light",
      text: "text-red",
    },
  };

  return (
    <div className="h-screen">
      <span className="flex justify-between items-center ">
        <h2 className="text-teal-dark text-3xl font-semibold mb-6">
          Applications
        </h2>
        <button
          className="bg-teal text-white rounded-md py-2 px-2.5 flex justify-center items-center gap-3 text-sm"
          onClick={handleOpenJobModal}
        >
          <p>Add new Job</p>
          <span className="text-sm">
            <FaPlus />
          </span>
        </button>
      </span>

      {/* Job modal */}
      {showJobModal && (
        <AddNewJobs setJobModal={setShowJobModal} onAddJob={handleAddJob} />
      )}

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

        {/* Filter Dropdown menu */}
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
        {["applied", "interview", "offered", "rejected"].map((status) => (
          <div key={status}>
            <span className="text-center">
              <p
                className={`${statusColors[status].background} ${statusColors[status].text} rounded-md pl-4 py-2 capitalize`}
              >
                {status} ({jobs.filter((job) => job.status === status).length})
              </p>
            </span>
            {jobs
              .filter((job) => job.status === status)
              .map((job, index) => (
                <div
                  key={index}
                  className="rounded-lg drop-shadow-sm bg-white mt-6 p-4 cursor-pointer hover:drop-shadow"
                >
                  <div className="flex justify-between items-center">
                    <p className="text-teal">{job.jobTitle}</p>
                    <span className="text-gray text-lg">
                      <MdDelete />
                    </span>
                  </div>
                  <h3 className="text-2xl mb-6 text-gray-dark">
                    {job.companyName}
                  </h3>
                  <p className="text-[10px] text-gray">
                    {new Date(job.applicationDate).toDateString()}
                  </p>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Applications;
