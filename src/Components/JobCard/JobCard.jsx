import React from "react";
import "./JobCard.css";
import { MdDeleteOutline } from "react-icons/md";

const JobCard = ({ job , deleteJob}) => {
  return (
    <>
      <div className="job-card">
        <div className="card-head">
          <h3>Company: {job.company}</h3> 
          <button onClick={() => deleteJob(job.id)}><MdDeleteOutline/></button>
        </div>
        <p>Role: {job.role}</p>
        <p>Type: {job.type}</p>
        <p>
          Status: <strong>{job.status}</strong>
        </p>
      </div>
    </>
  );
};

export default JobCard;
