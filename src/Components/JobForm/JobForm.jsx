import React from 'react'
import './JobForm.css';

const JobForm = () => {
  return (
    <>
      <center>
        <h2>Job Form </h2>
        <form>
          <input type="text" placeholder="Job Title" required /><br /><br />
          <input type="text" placeholder="Company Name" required /><br /><br />
          <input type="text" placeholder="Location" required /><br /><br />
          <input type="number" placeholder=" Required Salary" required /><br /><br />
          <textarea placeholder="Job Description" required></textarea><br /><br />
          <button type="submit">Submit</button>
        </form>
      </center>
    </>
  )
}

export default JobForm