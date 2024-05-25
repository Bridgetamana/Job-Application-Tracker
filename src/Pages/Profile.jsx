import React, { useState } from "react";
import {
  MdMailOutline,
  MdOutlineCall,
  MdOutlineLocationOn,
  MdOutlineEdit,
  MdOutlineSaveAlt,
} from "react-icons/md";

const Profile = () => {
  const [editingName, setEditingName] = useState(false);
  const [editingPersonal, setEditingPersonal] = useState(false);
  const [editingExperience, setEditingExperience] = useState(false);
  const [editingJobPreferences, setEditingJobPreferences] = useState(false);
  const [editingResume, setEditingResume] = useState(false);
  const [editingSkills, setEditingSkills] = useState(false);

  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johnthedoe123@example.com");
  const [phone, setPhone] = useState("+2348056789019");
  const [location, setLocation] = useState("Mars");
  const [experience, setExperience] = useState("Add your experience");
  const [jobType, setJobType] = useState("Contract");
  const [skills, setSkills] = useState(["Javascript", "HTML"]);

  const handleEditToggle = (section) => {
    if (section === "personal") {
      setEditingPersonal(!editingPersonal);
    } else if (section === "experience") {
      setEditingExperience(!editingExperience);
    } else if (section === "jobPreferences") {
      setEditingJobPreferences(!editingJobPreferences);
    } else if (section === "resume") {
      setEditingResume(!editingResume);
    } else if (section === "skills") {
      setEditingSkills(!editingSkills);
    } else if (section === "name") {
      setEditingName(!editingName);
    }
  };

  return (
    <div>
      <div>
        <h2 className="text-teal-dark text-3xl font-semibold mb-6">Profile</h2>
        <div className="flex flex-col justify-center items-center mb-6">
          <div className="inline-flex items-center justify-center w-20 h-20 overflow-hidden bg-teal-dark text-white font-bold rounded-full text-2xl">
            <h1>{name.charAt(0)}</h1>
          </div>
          <div className="flex gap-5 justify-center items-center mt-4">
            <div>
              <label htmlFor="name"></label>
              <input
                id="name"
                type="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={!editingName}
                className={`text-xl font-bold bg-[#F6F6F6] ${
                  editingName
                    ? "rounded-md outline-none ring-1 ring-gray-light py-1.5 px-2 text-gray-dark shadow-sm focus:ring-[1px] focus:ring-teal font-normal"
                    : ""
                }`}
              />
            </div>
            {editingName ? (
              <button
                className="cursor-pointer text-sm font-medium py-1 px-4 border border-teal text-teal-dark hover:bg-teal-dark hover:text-white rounded-md"
                onClick={() => handleEditToggle("name")}
              >
                Save
              </button>
            ) : (
              <MdOutlineEdit
                className="cursor-pointer text-xl"
                onClick={() => handleEditToggle("name")}
              />
            )}
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-8 text-gray-dark/80">
          {/* PERSONAL INFORMATION */}
          <div className="bg-white rounded-md p-4">
            <span className="flex justify-between">
              <h2 className="text-xl font-semibold mb-3 text-gray-dark">
                Personal Information
              </h2>
              {editingPersonal ? (
                <button
                  className="cursor-pointer text-sm font-medium py-1 px-4 border border-teal text-teal-dark hover:bg-teal-dark hover:text-white rounded-md"
                  onClick={() => handleEditToggle("personal")}
                >
                  Save
                </button>
              ) : (
                <MdOutlineEdit
                  className="cursor-pointer text-xl"
                  onClick={() => handleEditToggle("personal")}
                />
              )}
            </span>
            <div className="space-y-2 mt-4">
              <div className="flex gap-3 items-center">
                <label htmlFor="email">
                  <MdMailOutline />
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={!editingPersonal}
                  className={`border-0 bg-white ${
                    editingPersonal
                      ? "rounded-md outline-none ring-1 ring-gray-light py-1.5 px-2 text-gray-dark shadow-sm focus:ring-[1px] focus:ring-teal"
                      : ""
                  }`}
                />
              </div>
              <div className="flex gap-3 items-center ">
                <label htmlFor="tel">
                  <MdOutlineCall />
                </label>
                <input
                  id="tel"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  disabled={!editingPersonal}
                  className={`border-0 bg-white ${
                    editingPersonal
                      ? "rounded-md outline-none ring-1 ring-gray-light py-1.5 px-2 text-gray-dark shadow-sm focus:ring-[1px] focus:ring-teal"
                      : ""
                  }`}
                />
              </div>
              <div className="flex gap-3 items-center">
                <label htmlFor="location">
                  <MdOutlineLocationOn />
                </label>
                <input
                  id="location"
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  disabled={!editingPersonal}
                  className={`border-0 bg-white ${
                    editingPersonal
                      ? "rounded-md outline-none ring-1 ring-gray-light py-1.5 px-2 text-gray-dark shadow-sm focus:ring-[1px] focus:ring-teal"
                      : ""
                  }`}
                />
              </div>
            </div>
          </div>

          {/* EXPERIENCE */}
          <div className="bg-white rounded-md p-4">
            <span className="flex justify-between">
              <h2 className="text-xl font-semibold mb-3 text-gray-dark">
                Experience
              </h2>
              {editingExperience ? (
                <button
                  className="cursor-pointer text-sm font-medium py-1 px-4 border border-teal text-teal-dark hover:bg-teal-dark hover:text-white rounded-md"
                  onClick={() => handleEditToggle("experience")}
                >
                  Save
                </button>
              ) : (
                <MdOutlineEdit
                  className="cursor-pointer text-xl"
                  onClick={() => handleEditToggle("experience")}
                />
              )}
            </span>
            <div className="mt-4">
              <label htmlFor="experience"></label>
              <textarea
                id="experience"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                disabled={!editingExperience}
                className={`border-0 bg-white ${
                  editingExperience
                    ? "rounded-md outline-none ring-1 ring-gray-light py-1.5 px-2 text-gray-dark shadow-sm focus:ring-[1px] focus:ring-teal"
                    : ""
                }`}
              />
            </div>
          </div>

          {/* JOB PREFERENCE */}
          <div className="bg-white rounded-md p-4">
            <span className="flex justify-between">
              <h2 className="text-xl font-semibold mb-3 text-gray-dark">
                Job Preferences
              </h2>
              {editingJobPreferences ? (
                <button
                  className="cursor-pointer text-sm font-medium py-1 px-4 border border-teal text-teal-dark hover:bg-teal-dark hover:text-white rounded-md"
                  onClick={() => handleEditToggle("jobPreferences")}
                >
                  Save
                </button>
              ) : (
                <MdOutlineEdit
                  className="cursor-pointer text-xl"
                  onClick={() => handleEditToggle("jobPreferences")}
                />
              )}
            </span>

            <div className="mt-4">
              <label htmlFor="jobtype">Job Type: </label>
              <input
                id="jobtype"
                type="text"
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
                disabled={!editingJobPreferences}
                className={`border-0 bg-white ${
                  editingJobPreferences
                    ? "rounded-md outline-none ring-1 ring-gray-light py-1.5 px-2 text-gray-dark shadow-sm focus:ring-[1px] focus:ring-teal"
                    : ""
                }`}
              />
            </div>
          </div>

          {/* RESUME */}
          <div className="bg-white rounded-md p-4">
            <span className="flex justify-between">
              <h2 className="text-xl font-semibold mb-3 text-gray-dark">
                Resume
              </h2>
              {editingResume ? (
                <button
                  className="cursor-pointer text-sm font-medium py-1 px-4 border border-teal text-teal-dark hover:bg-teal-dark hover:text-white rounded-md"
                  onClick={() => handleEditToggle("resume")}
                >
                  Save
                </button>
              ) : (
                <MdOutlineEdit
                  className="cursor-pointer text-xl"
                  onClick={() => handleEditToggle("resume")}
                />
              )}
            </span>

            <div className="mt-4">
              <label className="sr-only" htmlFor="resumeUpload">
                Resume
              </label>
              <input
                type="file"
                id="resumeUpload"
                disabled={!editingResume}
                className="text-sm text-gray-900 border border-gray-light rounded-md cursor-pointer bg-white p-2"
              />
            </div>
          </div>

          {/* SKILLS */}
          <div className="bg-white rounded-md p-4">
            <span className="flex justify-between">
              <h2 className="text-xl font-semibold mb-3 text-gray-dark">
                Skills
              </h2>
              {editingSkills ? (
                <button
                  className="cursor-pointer text-sm font-medium py-1 px-4 border border-teal text-teal-dark hover:bg-teal-dark hover:text-white rounded-md"
                  onClick={() => handleEditToggle("skills")}
                >
                  Save
                </button>
              ) : (
                <MdOutlineEdit
                  className="cursor-pointer text-xl"
                  onClick={() => handleEditToggle("skills")}
                />
              )}
            </span>

            <div className="flex flex-wrap gap-3 mt-4">
              {skills.map((skill, index) => (
                <input
                  key={index}
                  type="text"
                  value={skill}
                  onChange={(e) => {
                    const newSkills = [...skills];
                    newSkills[index] = e.target.value;
                    setSkills(newSkills);
                  }}
                  disabled={!editingSkills}
                  className={` bg-teal text-white rounded-full py-2 px-2.5 w-20 text-wrap flex justify-center items-center text-sm  ${
                    editingSkills ? " outline-none" : ""
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
