import { useEffect, useState } from "react";
import "./App.css";
import JobForm from "./Components/JobForm/JobForm.jsx";
import JobList from "./Components/JobList/JobList.jsx";
import Header from "./Components/Header/Header.jsx";

function App() {
  const [jobs, setJobs] = useState([]);
  const [filterStatus, setFilterStatus] = useState("All");
  const [editJob, setEditJob] = useState(null);

  useEffect(() => {
    const storedJobs = localStorage.getItem("jobs");
    if (storedJobs) {
      setJobs(JSON.parse(storedJobs));
    }
  }, []);

  useEffect(() => {
    if (jobs.length > 0) {
      localStorage.setItem("jobs", JSON.stringify(jobs));
    }
  }, [jobs]);

  const deleteJob = (id) => {
    if(!window.confirm("Are you sure you want to delete this job?")) return;
    const updatedJobs = jobs.filter((job) => job.id !== id);
    setJobs(updatedJobs);
  };

  const updateJob = (updatedJob) =>{
    setJobs(jobs.map((job) => (job.id === updatedJob.id ? updatedJob : job)));
    setEditJob(null);
  }

  const addJob = (job) => {
    setJobs([...jobs, job]);
  };

  const startEdit = (job) => {
    setEditJob(job);
  };

  const filteredJobs =
    filterStatus === "All"
      ? jobs
      : jobs.filter((job) => job.status === filterStatus);

  return (
    <>
      <Header />
      <JobForm addJob={addJob} editJob={editJob} updateJob={updateJob} />
      <div className="filter-btn">
        Filter by Status: 
        <select
          className="filter"
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option>All</option>
          <option>Applied</option>
          <option>Interview</option>
          <option>Offer</option>
          <option>Rejected</option>
        </select>
      </div>
      <JobList jobs={filteredJobs} deleteJob={deleteJob} startEdit={startEdit} />
    </>
  );
}

export default App;
