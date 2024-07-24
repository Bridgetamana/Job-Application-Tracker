import { LuUserCircle2, LuDownload, LuSearch } from "react-icons/lu";
import {
  FaRegFileAlt,
  FaRegQuestionCircle,
  FaRegLightbulb,
} from "react-icons/fa";
import { BsBriefcase } from "react-icons/bs";
import DashboardCard from "../Components/DashboardCard";

const Dashboard = () => {
  return (
    <div>
      <div className="mb-5 flex flex-wrap justify-between items-center">
        <h1 className="font-bold text-[#2A2A2A] text-xl lg:text-lg">Good Evening Bridget,</h1>
        <div className="gap-2 items-center border-l-2 border-[#5D6661] pl-4 hidden lg:flex">
          <span className="bg-teal-light text-teal-dark rounded-full p-1.5 text-sm">
            BA
          </span>
          <div>
            <p className="text-[12px]">Bridget Amana</p>
            <p className="text-[12px]">amanabridget03@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="rounded-lg mb-4">
        <div>
          <h2 className="text-xl text-gray-dark">Getting Started</h2>

          <div className="w-[80%] bg-gray-light rounded-full h-1.5 my-2">
            <div className="bg-teal h-1.5 rounded-full w-[20%]"></div>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-12">
            <DashboardCard
              to="/dashboard/profile"
              icon={LuUserCircle2}
              title="Complete your profile"
              description="Add more details"
            />{" "}
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
            />{" "}
          </div>
        </div>
      </div>
      <div className="rounded-lg border-gray mb-4">
        <h2 className="text-2xl text-gray-dark">Resources</h2>
        <div className="mt-4 flex flex-wrap gap-10">
          <div>
            <span>
              <h3 className="text-xl">Resume and cover letters</h3>
              <p className="text-[#7E7E7E]">
                Access templates and tips to create standout resumes and cover
                letters.
              </p>
            </span>
            <ul className="max-w-md mt-2 space-y-3">
              <li className="pb-4 border-b border-[#D4D4D4]">
                <div className="flex items-center space-x-4">
                  <div className="">
                    <LuDownload />
                  </div>
                  <div className="flex justify-between items-center flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-dark">
                      Resume and cover Letter template
                    </p>
                    <button>
                      <a
                        href="https://www.canva.com/resumes/templates/"
                        target="_blank"
                        className="text-sm flex  border border-teal rounded-md p-2 text-teal"
                      >
                        Download Templates
                      </a>
                    </button>
                  </div>
                </div>
              </li>
              <li className="pb-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <span>
                      <FaRegFileAlt />
                    </span>
                  </div>
                  <div className="flex justify-between items-center flex-1 min-w-0">
                    <p className="text-sm font-medium">Resume Builder</p>
                    <button>
                      <a
                        href="https://zety.com/resume-builder"
                        target="_blank"
                        className="text-sm flex  border border-teal rounded-md p-2 text-teal"
                      >
                        Use Resume Builder
                      </a>
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <span>
              <h3 className="text-xl">Interview Preparation</h3>
              <p className="text-[#7E7E7E]">
                Prepare for your interviews with common questions, and tips.
              </p>
            </span>
            <ul className="max-w-md mt-2 space-y-3">
              <li className="pb-4 border-b border-[#D4D4D4]">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <span>
                      <FaRegQuestionCircle />
                    </span>
                  </div>
                  <div className="flex justify-between items-center flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">
                      Common Questions
                    </p>
                    <button>
                      <a
                        href="https://www.thebalancecareers.com/job-interview-questions-and-answers-2061204"
                        target="_blank"
                        className="text-sm flex  border border-teal rounded-md p-2 text-teal"
                      >
                        Review Questions
                      </a>
                    </button>
                  </div>
                </div>
              </li>
              <li className="pb-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <span>
                      <FaRegLightbulb />
                    </span>
                  </div>
                  <div className="flex justify-between items-center flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">
                      Interview Tips
                    </p>
                    <button>
                      <a
                        href="https://www.indeed.com/career-advice/interviewing/job-interview-tips-how-to-make-a-great-impression"
                        target="_blank"
                        className="text-sm flex  border border-teal rounded-md p-2 text-teal"
                      >
                        Get Interview Tips
                      </a>
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="rounded-lg pt-12 mb-4 flex justify-center">
        Made with <span className="mx-1"> 💙</span> by{" "}
        <a
          href="https://github.com/Bridgetamana"
          className="underline text-teal mx-1 hover:no-underline"
        >
          Bridget Amana
        </a>
      </div>
    </div>
  );
};

export default Dashboard;
