import { useState } from 'react'
import './App.css'
import JobForm from './Components/JobForm/JobForm.jsx'
import JobList from './Components/JobList/JobList.jsx'
import JobCard from './Components/JobCard/JobCard.jsx'
import Header from './Components/Header/Header.jsx'

function App() {
  return (
    <>
      <Header/>
      <JobForm/>
      <JobList/>
      <JobCard/>
    </>
  )
}

export default App
