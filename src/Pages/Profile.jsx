import { useState, useEffect } from "react";
import {
  MdMailOutline,
  MdOutlineCall,
  MdOutlineLocationOn,
  MdOutlineEdit,
  MdAdd,
} from "react-icons/md";

const Profile = () => {
  const [editingName, setEditingName] = useState(false);
  const [editingPersonal, setEditingPersonal] = useState(false);
  const [editingExperience, setEditingExperience] = useState(false);
  const [editingJobPreferences, setEditingJobPreferences] = useState(false);
  const [editingResume, setEditingResume] = useState(false);
  const [editingSkills, setEditingSkills] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");
  const [jobType, setJobType] = useState("");
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState("");
  const [resume, setResume] = useState(null);

  // Fetch user data from localStorage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser) {
      setName(storedUser.name || "");
      setEmail(storedUser.email || "");
      setPhone(storedUser.phone || "");
    }
  }, []);

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

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      setSkills([...skills, newSkill]);
      setNewSkill("");
    }
  };

  const handleDeleteSkill = (index) => {
    const newSkills = skills.filter((_, i) => i !== index);
    setSkills(newSkills);
  };

  const handleResumeChange = (e) => {
    setResume(e.target.files[0]);
  };

  return (
    <div>
      <div>
        <h2 className="text-primary-text text-3xl font-semibold mb-6">
          Profile
        </h2>
        <div className="flex flex-col justify-center items-center mb-6">
          <div className="flex md:gap-4 md:justify-center justify-between items-center mt-4 mx-12">
            <div className="">
              <label htmlFor="name"></label>
              <input
                id="name"
                type="text"
                value={name}
                onInput={(e) => setName(e.target.value)}
                disabled={!editingName}
                className={`text-xl font-bold bg-[#000]/0${
                  editingName
                    ? " rounded-md outline-none ring-1 ring-light-gray py-1.5 px-2 text-dark-gray shadow-sm focus:ring-[1px] focus:ring-gray font-normal bg-white"
                    : ""
                }`}
              />
            </div>
            {editingName ? (
              <button
                className="cursor-pointer text-sm font-medium py-2.5 px-4 border border-black text-primary-text hover:bg-black hover:text-white rounded-md"
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
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-8 text-black/80">
          {/* PERSONAL INFORMATION */}
          <div className="bg-white rounded-md p-4 border border-tertiary-text">
            <span className="flex justify-between">
              <h2 className="text-xl font-semibold mb-3 text-dark-gray">
                Personal Details
              </h2>
              {editingPersonal ? (
                <button
                  className="cursor-pointer text-sm font-medium py-2.5 px-4 border border-black text-primary-text hover:bg-black hover:text-white rounded-md"
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
                      ? "rounded-md outline-none ring-1 ring-light-gray py-1.5 px-2 text-dark-gray shadow-sm focus:ring-[1px] focus:ring-gray font-normal bg-white"
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
                      ? "rounded-md outline-none ring-1 ring-light-gray py-1.5 px-2 text-dark-gray shadow-sm focus:ring-[1px] focus:ring-gray font-normal bg-white"
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
                      ? "rounded-md outline-none ring-1 ring-light-gray py-1.5 px-2 text-dark-gray shadow-sm focus:ring-[1px] focus:ring-gray font-normal bg-white"
                      : ""
                  }`}
                />
              </div>
            </div>
          </div>

          {/* EXPERIENCE */}
          <div className="bg-white rounded-md p-4 border border-tertiary-text">
            <span className="flex justify-between">
              <h2 className="text-xl font-semibold mb-3 text-dark-gray">
                Experience
              </h2>
              {editingExperience ? (
                <button
                  className="cursor-pointer text-sm font-medium py-2.5 px-4 border border-black text-primary-text hover:bg-black hover:text-white rounded-md"
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
                    ? "rounded-md outline-none ring-1 ring-light-gray py-1.5 px-2 text-dark-gray shadow-sm focus:ring-[1px] focus:ring-gray font-normal bg-white"
                    : ""
                }`}
              />
            </div>
          </div>

          {/* JOB PREFERENCE */}
          <div className="bg-white rounded-md p-4 border border-tertiary-text">
            <span className="flex justify-between">
              <h2 className="text-xl font-semibold mb-3 text-dark-gray">
                Job Preferences
              </h2>
              {editingJobPreferences ? (
                <button
                  className="cursor-pointer text-sm font-medium py-2.5 px-4 border border-black text-primary-text hover:bg-black hover:text-white rounded-md"
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
                    ? "rounded-md outline-none ring-1 ring-light-gray py-1.5 px-2 text-dark-gray shadow-sm focus:ring-[1px] focus:ring-gray font-normal bg-white"
                    : ""
                }`}
              />
            </div>
          </div>

          {/* RESUME */}
          <div className="bg-white rounded-md p-4 border border-tertiary-text">
            <span className="flex justify-between">
              <h2 className="text-xl font-semibold mb-3 text-dark-gray">
                Resume
              </h2>
              {editingResume ? (
                <button
                  className="cursor-pointer text-sm font-medium py-2.5 px-4 border border-black text-primary-text hover:bg-black hover:text-white rounded-md"
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
              {resume ? (
                <div>
                  <p>Uploaded Resume: {resume.name}</p>
                </div>
              ) : (
                <input
                  type="file"
                  onChange={handleResumeChange}
                  disabled={!editingResume}
                  className={`border-0 bg-white ${
                    editingResume
                      ? "rounded-md outline-none ring-1 ring-light-gray py-1.5 px-2 text-dark-gray shadow-sm focus:ring-[1px] focus:ring-gray font-normal bg-white"
                      : ""
                  }`}
                />
              )}
            </div>
          </div>

          {/* SKILLS */}
          <div className="bg-white rounded-md p-4 border border-tertiary-text">
            <span className="flex justify-between">
              <h2 className="text-xl font-semibold mb-3 text-dark-gray">
                Skills
              </h2>
              {editingSkills ? (
                <button
                  className="cursor-pointer text-sm font-medium py-2.5 px-4 border border-black text-primary-text hover:bg-black hover:text-white rounded-md"
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

            <div className="mt-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center mb-2"
                >
                  <span>{skill}</span>
                  {editingSkills && (
                    <button
                      className="text-[#d42c2c]"
                      onClick={() => handleDeleteSkill(index)}
                    >
                      Delete
                    </button>
                  )}
                </div>
              ))}

              {editingSkills && (
                <div className="flex items-center mt-4">
                  <input
                    type="text"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    className="border border-gray rounded-md py-1 px-2 mr-2"
                  />
                  <button
                    className="bg-black text-white rounded-md py-2.5 px-3"
                    onClick={handleAddSkill}
                  >
                    <MdAdd />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
