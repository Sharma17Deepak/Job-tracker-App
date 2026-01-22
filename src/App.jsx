import { useState } from "react";
import "./App.css";
import JobForm from "./Components/JobForm/JobForm.jsx";
import JobList from "./Components/JobList/JobList.jsx";
import Header from "./Components/Header/Header.jsx";

function App() {
  const [jobs, setJobs] = useState([]);

  const addJob = (job) => {
    setJobs([...jobs, job]);
  };

  return (
    <>
      <Header />
      <div className="container">
        <JobForm addJob={addJob} />
        <JobList jobs={jobs} />
      </div>
    </>
  );
}

export default App;
