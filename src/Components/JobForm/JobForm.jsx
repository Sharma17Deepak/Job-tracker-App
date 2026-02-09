import React, { useEffect, useState } from "react";
import "./JobForm.css";

const JobForm = ({ addJob, editJob, updateJob, cancelEdit }) => {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (editJob) {
      setCompany(editJob.company);
      setRole(editJob.role);
      setType(editJob.type);
      setStatus(editJob.status);
    }
  }, [editJob]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!company || !role) return;

    if (editJob) {
      updateJob({
        ...editJob,
        company,
        role,
        type,
        status,
      });
    } else {
      addJob({
        id: Date.now(),
        company,
        role,
        type,
        status,
      });
    }

    setCompany("");
    setRole("");
    setStatus("");
    setType("");
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
            placeholder="Job Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          />
          <br />
          <br />
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option>Select Job Type</option>
            <option>Intern</option>
            <option>Full Time</option>
          </select>
          <br />
          <br />
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option>Select Job Status</option>
            <option>Applied</option>
            <option>Interview</option>
            <option>Offer</option>
            <option>Rejected</option>
          </select>
          <br />
          <br />
          <button type="submit">{editJob ? "Update Job" : "Add Job"}</button>
          {editJob && (
            <button
              type="button"
              onClick={() => {
                cancelEdit();
                setCompany("");
                setRole("");
                setType("");
                setStatus("");
              }}
              style={{ marginLeft: "10px" }}
            >
              Cancel Edit
            </button>
          )}
        </form>
      </center>
    </>
  );
};

export default JobForm;
