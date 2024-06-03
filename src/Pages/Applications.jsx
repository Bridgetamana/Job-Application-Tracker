import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import AddNewJobs from "../Components/AddNewJob";
import EditJobModal from "../Components/EditJobModal";

const Applications = () => {
  // Filter dropdown options
  const dropdownMenu = [
    { id: 0, label: "Status" },
    { id: 1, label: "Date" },
    { id: 2, label: "Company" },
    { id: 3, label: "Title" },
  ];

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [showJobModal, setShowJobModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [jobs, setJobs] = useState([
    {
      jobTitle: "Accountant",
      companyName: "You Bank",
      applicationDate: "2024-06-05",
      status: "applied",
    },
  ]);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleOpenJobModal = () => {
    setShowJobModal(true);
  };

  const handleAddJob = (newJob) => {
    const updatedJobs = [...jobs, newJob];
    setJobs(updatedJobs);
  };

  const handleEditJob = (updatedJob) => {
    const updatedJobs = jobs.map((job) =>
      job.id === updatedJob.id ? updatedJob : job
    );
    setJobs(updatedJobs);
  };

  const handleOpenEditModal = (job) => {
    setSelectedJob(job);
    setShowEditModal(true);
  };
  useEffect(() => {
    const storedJobs = localStorage.getItem("jobs");
    console.log(storedJobs);
    if (storedJobs) {
      setJobs(JSON.parse(storedJobs));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);
  
  const handleDeleteJob = (jobToDelete) => {
    const updatedJobs = jobs.filter((job) => job !== jobToDelete);
    setJobs(updatedJobs);
    localStorage.setItem("jobs", JSON.stringify(updatedJobs));
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

      {/* Edit Job Modal */}
      {showEditModal && (
        <EditJobModal
          job={selectedJob}
          setEditModal={setShowEditModal}
          onEditJob={handleEditJob}
        />
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
                  className="rounded-lg overflow-hidden bg-white mt-6 cursor-pointer hover:shadow-lg"
                  onClick={() => handleOpenEditModal(job)}
                >
                  <div className="p-4">
                    <div className="flex justify-between items-center">
                      <p className="text-teal text-lg font-semibold">
                        {job.jobTitle}
                      </p>
                      <span
                        className="text-gray text-lg cursor-pointer"
                        onClick={() => handleDeleteJob(job)}
                      >
                        <MdDelete />
                      </span>
                    </div>
                    <h3 className="text-xl text-gray-dark mt-2">
                      {job.companyName}
                    </h3>
                    <p className="text-xs text-gray mt-2">
                      {job.status} on{" "}
                      {new Date(job.applicationDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Applications;
