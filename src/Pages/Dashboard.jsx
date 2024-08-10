import { useState, useEffect } from "react";
import { Doughnut, Pie } from "react-chartjs-2";
import { LuUserCircle2, LuSearch } from "react-icons/lu";
import { FaLongArrowAltRight, FaRegLightbulb } from "react-icons/fa";
import { BsBriefcase } from "react-icons/bs";
import { CiMenuKebab } from "react-icons/ci";
import DashboardCard from "../Components/DashboardCard";
import "chart.js/auto";

const Dashboard = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [jobs, setJobs] = useState([]);
  const [applicationData, setApplicationData] = useState([]);
  const [chartType, setChartType] = useState("pie");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem("jobs")) || [];
    const storedData =
      JSON.parse(localStorage.getItem("applicationData")) || [];
    const storedUser = JSON.parse(localStorage.getItem("user")) || {};

    setJobs(storedJobs);
    setApplicationData(storedData);
    setUserName(storedUser.name || "");
    setUserEmail(storedUser.email || "");
  }, []);

  const jobStatusCount = jobs.reduce((acc, job) => {
    acc[job.status] = (acc[job.status] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(jobStatusCount),
    datasets: [
      {
        label: "Job Applications",
        data: Object.values(jobStatusCount),
        backgroundColor: "#4CAF50",
      },
    ],
  };

  const data = {
    labels: applicationData.map((item) => item.status),
    datasets: [
      {
        label: "Applications",
        data: applicationData.map((item) => item.count),
        backgroundColor: ["#36A2EB", "#FFCE56", "#00842B", "#FF6384"],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    animation: {
      duration: 1000,
      easing: "easeInOutQuad",
    },
  };

  const resources = [
    {
      title: "Resume and cover letter template",
      viewUrl: "https://zety.com/cover-letter-templates",
    },
    {
      title: "Interview preparation guide",
      viewUrl:
        "https://www.themuse.com/advice/the-ultimate-interview-guide-30-prep-tips-for-job-interview-success",
    },
    {
      title: "Job search strategies",
      viewUrl: "https://www.careerflow.ai/blog/job-search-guide",
    },
    {
      title: "Networking tips",
      viewUrl: "https://hbr.org/2023/03/a-beginners-guide-to-networking",
    },
    { title: "Career development plan", viewUrl: "" },
    { title: "Salary negotiation tactics", viewUrl: "" },
  ];

  const getGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) return "Good Morning";
    if (currentHour < 17) return "Good Afternoon";
    return "Good Evening";
  };

  const totalApplications = applicationData.reduce(
    (sum, item) => sum + item.count,
    0
  );
  const totalRejected =
    applicationData.find((item) => item.status === "Rejected")?.count || 0;
  const totalInterviews =
    applicationData.find((item) => item.status === "Interview")?.count || 0;
  const totalOffers =
    applicationData.find((item) => item.status === "Offer")?.count || 0;

  return (
    <div>
      <div className="mb-5 flex flex-wrap justify-between items-center">
        <h1 className="font-bold text-[#2A2A2A] text-xl lg:text-2xl">
          {getGreeting()} {userName || "User"},
        </h1>
        <div className="gap-2 items-center border-l-2 border-[#5D6661] pl-4 hidden lg:flex">
          <div>
            <p className="text-[12px]">{userName || "User"}</p>
            <p className="text-[12px]">{userEmail || "you@beautiful.com"}</p>
          </div>
        </div>
      </div>
      <div className="rounded-lg mb-4">
        <div>
          <h2 className="text-xl text-gray-dark">Getting Started</h2>
          <div className="w-44 bg-light-gray rounded-full h-1.5 mt-1.5">
            <div className="bg-dark-gray h-1.5 rounded-full w-20"></div>
          </div>
          <p className="mt-1 text-[12px]">45% done</p>
          <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-3 mb-12">
            <DashboardCard
              to="/dashboard/profile"
              icon={LuUserCircle2}
              title="Complete your profile"
              description="Add more details"
            />
            <DashboardCard
              to="/dashboard/job"
              icon={LuSearch}
              title="Search for Jobs"
              description="Find jobs that match your skills"
            />
            <DashboardCard
              to="/dashboard/applications"
              icon={BsBriefcase}
              title="Update application status"
              description="Keep your job applications up to date"
            />
            <DashboardCard
              to="/dashboard"
              icon={FaRegLightbulb}
              title="Prepare for Interview"
              description="Browse our interview resources to help you prepare"
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 p-4 relative">
              <div className="flex justify-between items-center">
                <h3 className="text-lg">Applications Tracking</h3>
                <span
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="hover:bg-[#E8E8E8] p-1.5 rounded-md relative"
                >
                  <CiMenuKebab className="rotate-90" />
                  {menuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border border-[#E8E8E8] rounded shadow-sm z-10 p-2">
                      <ul>
                        <li
                          className="p-2 hover:bg-[#E0E1E0] cursor-pointer text-sm rounded-md"
                          onClick={() => setChartType("doughnut")}
                        >
                          Doughnut Chart
                        </li>
                        <li
                          className="p-2 hover:bg-[#E0E1E0] cursor-pointer text-sm rounded-md"
                          onClick={() => setChartType("pie")}
                        >
                          Pie Chart
                        </li>
                      </ul>
                    </div>
                  )}
                </span>
              </div>
              <div className="w-full">
                {chartType === "doughnut" ? (
                  <div className="max-h-[400px] flex gap-20 items-center">
                    <Doughnut data={data} options={options} />
                    <div className="space-y-2 hidden md:block lg:hidden">
                      <div className="flex items-center">
                        <p className="text-sm text-gray mr-1">
                          Total Applications:
                        </p>
                        <p className="font-bold text-primary-text">
                          {totalApplications}
                        </p>
                      </div>
                      <div className="flex items-center">
                        <p className="text-sm text-gray mr-1">Total Rejected</p>
                        <p className="font-bold text-primary-text">
                          {totalRejected}
                        </p>
                      </div>
                      <div className="flex items-center">
                        <p className="text-sm text-gray mr-1">
                          Total Interviews
                        </p>
                        <p className="font-bold text-primary-text">
                          {totalInterviews}
                        </p>
                      </div>
                      <div className="flex items-center">
                        <p className="text-sm text-gray mr-1">Total Offers</p>
                        <p className="font-bold text-primary-text">
                          {totalOffers}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="max-h-[400px] flex gap-20 items-center">
                    <Pie data={data} options={options} />
                    <div className="space-y-2 hidden md:block lg:hidden">
                      <div className="flex items-center">
                        <p className="text-sm text-gray mr-1">
                          Total Applications:
                        </p>
                        <p className="font-bold text-primary-text">
                          {totalApplications}
                        </p>
                      </div>
                      <div className="flex items-center">
                        <p className="text-sm text-gray mr-1">Total Rejected</p>
                        <p className="font-bold text-primary-text">
                          {totalRejected}
                        </p>
                      </div>
                      <div className="flex items-center">
                        <p className="text-sm text-gray mr-1">
                          Total Interviews
                        </p>
                        <p className="font-bold text-primary-text">
                          {totalInterviews}
                        </p>
                      </div>
                      <div className="flex items-center">
                        <p className="text-sm text-gray mr-1">Total Offers</p>
                        <p className="font-bold text-primary-text">
                          {totalOffers}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2 md:hidden lg:grid">
                <div className="flex items-center">
                  <p className="text-sm text-gray mr-1">Total Applications:</p>
                  <p className="font-bold text-primary-text">
                    {totalApplications}
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="text-sm text-gray mr-1">Total Rejected</p>
                  <p className="font-bold text-primary-text">{totalRejected}</p>
                </div>
                <div className="flex items-center">
                  <p className="text-sm text-gray mr-1">Total Interviews</p>
                  <p className="font-bold text-primary-text">
                    {totalInterviews}
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="text-sm text-gray mr-1">Total Offers</p>
                  <p className="font-bold text-primary-text">{totalOffers}</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="mb-2">Resources</h3>
              <div className="grid md:grid-cols-2 gap-3 lg:grid-cols-1">
                {resources.map((resource, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-2 cursor-pointer border-l-4 pl-3 pr-2 rounded shadow-sm"
                  >
                    <p>{resource.title}</p>
                    <a
                      href={resource.viewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hidden md:flex items-center gap-2 bg-white rounded-full border p-1.5 pl-4 hover:bg-dark-gray hover:text-white hover:shadow-md group"
                    >
                      <p className="hidden md:flex">View</p>
                      <div className="group-hover:bg-gray group-hover:rounded-full group-hover:p-1.5 bg-white p-1.5">
                        <FaLongArrowAltRight />
                      </div>
                    </a>
                    <a
                      href={resource.viewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="md:hidden p-1.5 hover:bg-dark-gray rounded-full hover:text-white border"
                    >
                      <FaLongArrowAltRight />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
