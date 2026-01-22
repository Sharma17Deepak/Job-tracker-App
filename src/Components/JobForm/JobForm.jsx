import React, { useState } from "react";
import "./JobForm.css";

const JobForm = ({ addJob }) => {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("applied");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!company || !role) return;

    const newJob = {
      id: Date.now(),
      company,
      role,
      status,
    };

    addJob(newJob);

    setCompany("");
    setRole("");
    setStatus("Applied");
  };

  return (
    <>
      <center>
        <h2 className="form-headings">Add New Job</h2>
        <form onSubmit={handleSubmit} className="add-form">
          <input
            type="text"
            placeholder="Company Name"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="Company Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          />
          <br />
          <br />
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option>Applied</option>
            <option>Interview</option>
            <option>Offer</option>
            <option>Rejected</option>
          </select>
          <br />
          <br />
          <button type="submit">Add Job</button>
        </form>
      </center>
    </>
  );
};

export default JobForm;
