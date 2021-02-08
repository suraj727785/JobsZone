import React, { useEffect, useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useMediaQuery } from 'react-responsive';
import './screensStyle.css';
import Search from '../components/Search';
import { API, graphqlOperation } from 'aws-amplify';
import {listJobs} from '../graphql/queries';
import InternshipCard from '../components/InternshipCard';


function InternshipScreen() {
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
          listJobs,{
              filter:{
                jobType: {contains: "internship"},
                jobStatus:{eq:"active"}
              }
          }   
      ))
      setJobs(joblist.data.listJobs.items);
      }
    
      getJobList();
    }
    catch(e){
      console.log(e)

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
       jobs.map(jobs => <InternshipCard
        jobID={jobs.id}
        companyName={jobs.companyName}
        lastDate={jobs.lastDate}
        role={jobs.jobName}
        salary={jobs.salary}
        duration={jobs.duration}
        location={jobs.jobLocation}
        />
       )
     }
     </div>
     <Footer />
    </div>
  );
}

export default InternshipScreen;
