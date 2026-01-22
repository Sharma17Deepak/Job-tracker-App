import React from "react";
import "./JobList.css";
import JobCard from "../JobCard/JobCard";

const JobList = ({ jobs }) => {
  if (jobs.length === 0) {
    return <p style={{ textAlign: "center" }}>No jobs added yet.</p>;
  }

  return (
    <>
      <h2 style={{"textAlign":"center", "marginTop":"50px"}}>Job Listings: </h2>
      <div className="list-container">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </>
  );
};

export default JobList;
