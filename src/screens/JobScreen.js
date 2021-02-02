import React, { useEffect, useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import JobCard from "../components/JobCard";
import { useMediaQuery } from 'react-responsive';
import './screensStyle.css';
import Search from '../components/Search';
import { API, graphqlOperation } from 'aws-amplify';
import {listJobs} from '../graphql/queries';


function JobScreen() {
  const isTablet = useMediaQuery({ query: '(max-width: 1100px)' })
  const isMobile = useMediaQuery({
    query: '(max-width: 600px)'
  })
  const [jobs,setJobs]=useState([]);
  useEffect(()=>{
    try{
      const getJobList= async()=>{
      const joblist=await API.graphql(
        graphqlOperation(
          listJobs   
      ))
      setJobs(joblist.data.listJobs.items);
      }
    
      getJobList();
    }
    catch{

    }

  },[]);
  return (
    <div >
     <Header />
     <div className="LargeSearchContainer" style={{marginTop:100,marginLeft:400}} >
     <Search />
     </div>
     <div className={ (isMobile) ? "JobsSmall" : ((isTablet) ? "JobsMedium" : "JobsLarge")} >
     {
       jobs.map(jobs => <JobCard 
        jobID={jobs.id}
        companyName={jobs.companyName}
        lastDate={jobs.lastDate}
        role={jobs.jobName}
        salary={jobs.salary}
        experience={jobs.experience}
        location={jobs.jobLocation}
        />
       )
     }
     
     <JobCard 
     companyName="Goggle"
     lastDate="23 feb 2021"
     role="SDE"
     salary="20 LPA"
     experience=" 0 years"
     location="Bengluru"
     />
     <JobCard 
     companyName="Goggle"
     lastDate="23 feb 2021"
     role="SDE"
     salary="20 LPA"
     experience=" 0 years"
     location="Bengluru"
     />
     <JobCard 
     companyName="Goggle"
     lastDate="23 feb 2021"
     role="SDE"
     salary="20 LPA"
     experience=" 0 years"
     location="Bengluru"
     />
     <JobCard 
     companyName="Goggle"
     lastDate="23 feb 2021"
     role="SDE"
     salary="20 LPA"
     experience=" 0 years"
     location="Bengluru"
     />
     </div>
     <Footer />
    </div>
  );
}

export default JobScreen;
