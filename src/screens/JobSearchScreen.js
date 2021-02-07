import React, { useEffect, useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import JobCard from "../components/JobCard";
import { useMediaQuery } from 'react-responsive';
import './screensStyle.css';
import Search from '../components/Search';
import { API, graphqlOperation } from 'aws-amplify';
import {listJobs} from '../graphql/queries';
import { useParams } from 'react-router-dom';


function JobSearchScreen() {
  let {searchTerm}=useParams();
  console.log(searchTerm);
  const isTablet = useMediaQuery({ query: '(max-width: 1100px)' })
  const isMobile = useMediaQuery({
    query: '(max-width: 600px)'
  })
  const [jobsByJobName,setJobsByJobName]=useState([]);
  const [jobsByLocation,setJobsByLocation]=useState([]);
  const [jobsByCompanyName,setJobsByCompanyName]=useState([]);
  useEffect(()=>{
    try{
      const getJobList= async()=>{
      const joblistByJobName=await API.graphql(
        graphqlOperation(
          listJobs,{
            filter:{
                jobName: {contains: searchTerm}
              } 
            }
      ));
      const joblistByCompanyName=await API.graphql(
        graphqlOperation(
          listJobs,{
            filter:{
                companyName: {contains: searchTerm}
              } 
            }
      ));
      const joblistByLocation=await API.graphql(
        graphqlOperation(
          listJobs,{
            filter:{
                jobLocation: {contains: searchTerm}
              } 
            }
      ));
      setJobsByJobName(joblistByJobName.data.listJobs.items);
      setJobsByCompanyName(joblistByCompanyName.data.listJobs.items);
      setJobsByLocation(joblistByLocation.data.listJobs.items);
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
     <Search 
     searchValue={searchTerm}
     />
     </div>
     <div className={ (isMobile) ? "JobsSmall" : ((isTablet) ? "JobsMedium" : "JobsLarge")} >
     {
       jobsByJobName.map(jobsByJobName => <JobCard 
        jobID={jobsByJobName.id}
        companyName={jobsByJobName.companyName}
        lastDate={jobsByJobName.lastDate}
        role={jobsByJobName.jobName}
        salary={jobsByJobName.salary}
        experience={jobsByJobName.experience}
        location={jobsByJobName.jobLocation}
        />
       )
     }
     {
       jobsByCompanyName.map(jobsByCompanyName => <JobCard 
        jobID={jobsByCompanyName.id}
        companyName={jobsByCompanyName.companyName}
        lastDate={jobsByCompanyName.lastDate}
        role={jobsByCompanyName.jobName}
        salary={jobsByCompanyName.salary}
        experience={jobsByCompanyName.experience}
        location={jobsByLocation.jobLocation}
        />
       )
     }
     {
       jobsByLocation.map(jobsByLocation => <JobCard 
        jobID={jobsByLocation.id}
        companyName={jobsByLocation.companyName}
        lastDate={jobsByLocation.lastDate}
        role={jobsByLocation.jobName}
        salary={jobsByLocation.salary}
        experience={jobsByLocation.experience}
        location={jobsByLocation.jobLocation}
        />
       )
     }
     </div>
     <Footer />
    </div>
  );
}

export default JobSearchScreen;
