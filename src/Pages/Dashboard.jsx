import React from "react";
import {Link} from "react-router-dom"
import { LuUserCircle2, LuDownload } from "react-icons/lu";
import {
  FaRegFileAlt,
  FaRegQuestionCircle,
  FaRegLightbulb,
  FaPlus,
} from "react-icons/fa";

const Dashboard = () => {
  return (
    <div>
      <div className="rounded-lg mb-10 flex flex-wrap justify-between items-center">
        <h1 className="text-3xl font-bold text-teal">Welcome back Bridget,</h1>
        <div className="rounded-lg p-4 bg-white drop-shadow-sm flex gap-8 items-center mt-4 ">
          <span className="flex flex-wrap gap-3 md:text-xl">
            <p>Total Applications:</p>
            <p className="text-[#9CDACA]">0</p>
          </span>
          <button className="bg-teal text-white rounded-md py-2 px-2.5 flex justify-center items-center gap-3 text-sm">
            <a to="#">Add new Job</a>
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
            <div className="rounded-lg drop-shadow-sm">
              <Link
                to="/profile"
                className="block max-w-sm p-6 bg-white rounded-lg shadow-md"
              >
                <span className="flex w-10 h-10 rounded-full bg-teal-light items-center justify-center text-teal-dark text-xl">
                  <LuUserCircle2 />
                </span>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-dark">
                  Complete your profile
                </h5>
                <p className="text-gray">Add more details</p>
              </Link>
            </div>
            <div className="rounded-lg drop-shadow-sm">
              <a
                href="#"
                className="block max-w-sm p-6 bg-white rounded-lg shadow-md hover:bg-gray-100"
              >
                <span className="flex w-10 h-10 rounded-full bg-teal-light items-center justify-center text-teal-dark text-xl">
                  <LuUserCircle2 />
                </span>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-dark">
                  Search for Jobs
                </h5>
                <p className="text-gray">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
              </a>
            </div>{" "}
            <div className="rounded-lg drop-shadow-sm">
              <a
                href="#"
                className="block max-w-sm p-6 bg-white rounded-lg shadow-md hover:bg-gray-100"
              >
                <span className="flex w-10 h-10 rounded-full bg-teal-light items-center justify-center text-teal-dark text-xl">
                  <LuUserCircle2 />
                </span>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-dark">
                  Search for Jobs
                </h5>
                <p className="text-gray">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
              </a>
            </div>{" "}
            <div className="rounded-lg drop-shadow-sm">
              <a
                href="#"
                className="block max-w-sm p-6 bg-white rounded-lg shadow-md hover:bg-gray-100"
              >
                <span className="flex w-10 h-10 rounded-full bg-teal-light items-center justify-center text-teal-dark text-xl">
                  <LuUserCircle2 />
                </span>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-dark">
                  Complete your profile
                </h5>
                <p className="text-gray">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=" rounded-lg border-gray mb-4">
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
                        href="#"
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
                        href="#"
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
              <h3 className="text-xl"> Interview Preparation</h3>
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
                        href="#"
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
                        href="#"
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
        Made with <span> 💙</span> by{" "}
        <a
          href="https://github.com/Bridgetamana"
          className="underline text-teal"
        >
          Bridget Amana
        </a>
      </div>
    </div>
  );
};

export default Dashboard;
