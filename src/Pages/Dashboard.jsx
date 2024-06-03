import React from "react";
import { Link } from "react-router-dom";
import { LuUserCircle2, LuDownload, LuSearch } from "react-icons/lu";
import {
  FaRegFileAlt,
  FaRegQuestionCircle,
  FaRegLightbulb,
  FaPlus,
} from "react-icons/fa";
import { BsBriefcase } from "react-icons/bs";
import DashboardCard from "../Components/DashboardCard";

const Dashboard = () => {
  return (
    <div>
      <div className="mb-10 flex flex-wrap justify-between items-center">
        <h1 className="text-3xl font-bold text-teal">Welcome back Bridget,</h1>
        <div className="rounded-lg p-4 bg-white drop-shadow-sm flex gap-8 items-center mt-4 ">
          <span className="flex flex-wrap gap-3 md:text-xl">
            <p>Total Applications:</p>
            <p className="text-[#9CDACA]">0</p>
          </span>
          <button className="bg-teal text-white rounded-md py-2 px-2.5 flex justify-center items-center gap-3 text-sm">
            <Link to="/dashboard/applications">Add new Job</Link>
            <span className="text-sm">
              <FaPlus />
            </span>
          </button>
        </div>
      </div>
      <div className="rounded-lg mb-4">
        <div>
          <h2 className="text-2xl text-gray-dark">Getting Started</h2>

          <div className="w-80 bg-gray-light rounded-full h-2 my-2">
            <div className="bg-teal h-2 rounded-full w-[30%]"></div>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
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
