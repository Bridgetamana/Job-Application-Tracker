import React, { useState } from "react";

const AddNewJobs = () => {
  const [applications, setApplications] = useState([]);
  const [newApplication, setNewApplication] = useState({
    company: "",
    position: "",
    status: "Applied",
    date: "",
    notes: "",
  });

  const handleChange = (e) => {
    setNewApplication({
      ...newApplication,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddApplication = (e) => {
    e.preventDefault();
    setApplications([
      ...applications,
      { ...newApplication, id: applications.length + 1 },
    ]);
    setNewApplication({
      company: "",
      position: "",
      status: "Applied",
      date: "",
      notes: "",
    });
  };

  return (
    <div className="job-applications-page">
      <h1>Job Applications</h1>
      <form onSubmit={handleAddApplication} className="application-form">
        <input
          type="text"
          name="company"
          value={newApplication.company}
          onChange={handleChange}
          placeholder="Company Name"
          required
        />
        <input
          type="text"
          name="position"
          value={newApplication.position}
          onChange={handleChange}
          placeholder="Job Position"
          required
        />
        <input
          type="date"
          name="date"
          value={newApplication.date}
          onChange={handleChange}
          required
        />
        <select
          name="status"
          value={newApplication.status}
          onChange={handleChange}
        >
          <option value="Applied">Applied</option>
          <option value="Interviewing">Interviewing</option>
          <option value="Offered">Offered</option>
          <option value="Rejected">Rejected</option>
        </select>
        <textarea
          name="notes"
          value={newApplication.notes}
          onChange={handleChange}
          placeholder="Notes"
        />
        <button type="submit">Add Application</button>
      </form>
      <ul className="applications-list">
        {applications.map((application) => (
          <li key={application.id} className="application-item">
            <h3>
              {application.position} at {application.company}
            </h3>
            <p>Status: {application.status}</p>
            <p>Date Applied: {application.date}</p>
            <p>Notes: {application.notes}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddNewJobs;
