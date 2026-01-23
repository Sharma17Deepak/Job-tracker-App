import { useEffect, useState } from "react";
import "./App.css";
import JobForm from "./Components/JobForm/JobForm.jsx";
import JobList from "./Components/JobList/JobList.jsx";
import Header from "./Components/Header/Header.jsx";

function App() {
  const [jobs, setJobs] = useState([]);
  const [filterStatus, setFilterStatus] = useState("All");


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
    const updatedJobs = jobs.filter((job) => job.id !== id);
    setJobs(updatedJobs);
  };

  const addJob = (job) => {
    setJobs([...jobs, job]);
  };

  const filteredJobs =
  filterStatus === "All"
    ? jobs
    : jobs.filter((job) => job.status === filterStatus);

  return (
    <>
      <Header />
      <div className="container">
        <JobForm addJob={addJob} />
        <div className="filter-btn">
          <label>Filter by Status:</label>
          <select className="filter" onChange={(e) => setFilterStatus(e.target.value)}>
          <option>All</option>
          <option>Applied</option>
          <option>Interview</option>
          <option>Offer</option>
          <option>Rejected</option>
        </select>
        </div>
        <JobList jobs={filteredJobs} deleteJob={deleteJob} />
      </div>
    </>
  );
}

export default App;
