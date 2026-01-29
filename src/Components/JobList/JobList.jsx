import React from "react";
import "./JobList.css";
import JobCard from "../JobCard/JobCard";

const JobList = ({ jobs, deleteJob, startEdit }) => {
  if (jobs.length === 0) {
    return <p style={{ textAlign: "center" }}>No jobs added yet.</p>;
  }

  return (
    <>
      <h3 style={{"textAlign":"center"}}>Job Listings: </h3>
      <div className="list-container">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} deleteJob={deleteJob} startEdit={startEdit}/>
        ))}
      </div>
    </>
  );
};

export default JobList;
