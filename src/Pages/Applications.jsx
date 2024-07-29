import { useState } from "react";
import { FaPlus, FaList, FaThLarge } from "react-icons/fa";
import { LuSearch } from "react-icons/lu";
import { MdClose } from "react-icons/md";
import AddNewJobs from "../Components/AddNewJob";
import EditJobModal from "../Components/EditJobModal";

const Applications = () => {
  // usestate
  const [showJobModal, setShowJobModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [jobs, setJobs] = useState([
    {
      id: 1,
      jobTitle: "Accountant",
      companyName: "You Bank",
      applicationDate: "2024-06-05",
      status: "applied",
    },
    {
      id: 3,
      jobTitle: "Accountant",
      companyName: "You Bank",
      applicationDate: "2024-06-05",
      status: "offered",
    },
    {
      id: 3,
      jobTitle: "Accountant",
      companyName: "You Bank",
      applicationDate: "2024-06-05",
      status: "rejected",
    },
  ]);
  const [activeTab, setActiveTab] = useState("all");
  const [checkedJobs, setCheckedJobs] = useState([]);
  const [isCardView, setIsCardView] = useState(true);

  // Open job modal function
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

  const handleDeleteJob = (jobToDelete) => {
    const updatedJobs = jobs.filter((job) => job !== jobToDelete);
    setJobs(updatedJobs);
    localStorage.setItem("jobs", JSON.stringify(updatedJobs));
  };

  const handleCheckJob = (job) => {
    setCheckedJobs((prev) =>
      prev.includes(job) ? prev.filter((j) => j !== job) : [...prev, job]
    );
  };

  return (
    <div className="h-screen">
      <span className="flex justify-between items-center mb-4">
        <h2 className="3xl font-semibold">Applications</h2>
        <div className="flex items-center gap-4">
          <span className="hidden md:flex items-center gap-2">
            <p className="text-secondary-text">Total Applications:</p>
            <p className="font-semibold">{jobs.length}</p>
          </span>
          <button
            className="bg-black text-white rounded-full py-2 px-2.5 flex justify-center items-center gap-3 text-sm"
            onClick={handleOpenJobModal}
          >
            <p className="hidden md:flex">Add new Job</p>
            <span className="text-sm">
              <FaPlus />
            </span>
          </button>
        </div>
      </span>

      {showJobModal && (
        <AddNewJobs setJobModal={setShowJobModal} onAddJob={handleAddJob} />
      )}

      {showEditModal && (
        <EditJobModal
          job={selectedJob}
          setEditModal={setShowEditModal}
          onEditJob={handleEditJob}
        />
      )}

      <div className="flex justify-between mb-4">
        <form className="flex items-center gap-2 border border-tertiary-text rounded-lg pl-2 py-1.5 w-36">
          <label className="sr-only">search</label>
          <LuSearch className="text-gray text-sm" />
          <input
            type="search"
            name="search"
            placeholder="search"
            className="w-24 outline-none bg-white"
          />
        </form>
        <div className="flex justify-between items-center gap-4">
          <div className="flex items-center gap-2 py-1 px-2 cursor-pointer text-tertiary-text">
            <button onClick={() => setIsCardView(true)}>
              <FaThLarge />
            </button>
            <button onClick={() => setIsCardView(false)}>
              <FaList />
            </button>
          </div>
        </div>
      </div>

      <div
        className="mb-4 border-b overflow-auto"
        style={{
          WebkitOverflowScrolling: "touch",
          MsOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        <ul className="flex text-sm font-medium text-center">
          {["all", "applied", "interview", "offered", "rejected"].map((tab) => (
            <li className="me-2" key={tab}>
              <button
                className={`inline-block p-4 ${
                  activeTab === tab ? "border-b-2" : ""
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>

{/* Job Card view */}
      {isCardView ? (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mb-12">
          {jobs
            .filter((job) => activeTab === "all" || job.status === activeTab)
            .map((job, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden mt-4 cursor-pointer hover:shadow-lg bg-[#F8F9F8] border border-light-gray"
                onClick={() => handleOpenEditModal(job)}
              >
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <p className="text-teal text-lg font-semibold">
                      {job.jobTitle}
                    </p>
                    <span
                      className="text-gray text-lg cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteJob(job);
                      }}
                    >
                      <MdClose />
                    </span>
                  </div>
                  <h3 className="text-xl mt-2">{job.companyName}</h3>
                  <p className="text-xs text-gray mt-2">
                    {job.status} on{" "}
                    {new Date(job.applicationDate).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
        </div>
      ) : 
      // Job List view
      (
        <div
          className="overflow-x-auto rounded-t-2xl"
          style={{
            WebkitOverflowScrolling: "touch",
            MsOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          <table className="w-full text-sm text-left">
            <thead className="bg-[#E2E6E4] text-primary-text ">
              <tr>
                <th className="px-6 py-3"></th>
                <th className="px-6 py-3">Title</th>
                <th className=" px-6 py-3">Company</th>
                <th className="px-6 py-3">Status</th>
                <th className=" px-6 py-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {jobs
                .filter(
                  (job) => activeTab === "all" || job.status === activeTab
                )
                .map((job, index) => (
                  <tr key={index} className="border-b border-light-gray">
                    <td className="px-6 py-4 text-center">
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        checked={checkedJobs.includes(job)}
                        onChange={() => handleCheckJob(job)}
                      />
                    </td>
                    <td
                      className="px-6 py-4 cursor-pointer"
                      onClick={() => handleOpenEditModal(job)}
                    >
                      {job.jobTitle}
                    </td>
                    <td className="px-6 py-4">{job.companyName}</td>
                    <td className="px-6 py-4">{job.status}</td>
                    <td className="px-6 py-4">
                      {new Date(job.applicationDate).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          {checkedJobs.length > 0 && (
            <div className="flex justify-end mt-4 absolute right-0 mr-5">
              <button
                className="bg-[#c40707] text-white py-1 px-4 rounded text-sm"
                onClick={() => checkedJobs.forEach(handleDeleteJob)}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Applications;
