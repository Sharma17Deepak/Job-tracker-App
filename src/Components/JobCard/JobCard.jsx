import React from "react";
import "./JobCard.css";

const JobCard = ({ job }) => {
  return (
    <>
      <div className="job-card">
        <h3>Company: {job.company}</h3>
        <p>Role: {job.role}</p>
        <p>
          Status: <strong>{job.status}</strong>
        </p>
      </div>
    </>
  );
};

export default JobCard;
