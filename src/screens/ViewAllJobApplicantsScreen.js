import React, { useEffect, useState } from 'react';
import './authStyle.css';
import logo from '../images/logo.png';
import { API, graphqlOperation, Storage } from 'aws-amplify';
import {listJobApplicants} from '../graphql/queries';

import {Link, useParams, withRouter} from 'react-router-dom';
import moment from 'moment';
import { updateJobApplicant } from '../graphql/mutations';

function ViewAllJobApplicantsScreen(props){
    const {jobId} =useParams();
    const [jobApplicants,setJobApplicants]=useState([]);
    useEffect(()=>{
        try{
          const getJobApplicant=async()=>{
          const AllApplicants=await API.graphql(
            graphqlOperation(
              listJobApplicants,{
                filter:{
                  jobID: {contains: jobId}
                }
              }
            )
          )
          setJobApplicants(AllApplicants.data.listJobApplicants.items)
         
          }
        
          getJobApplicant();
        }
        catch(e){
          console.log(e)
    
        }
    
      },[]);
      const getResumeUrl=async(resumeFile)=>{
        const resumeUrl=await Storage.get(resumeFile);
        console.log(resumeUrl);
        window.open(resumeUrl, '_blank', 'noopener,noreferrer')
        
      }
      const changeStatus=async(appliactionId,status)=>{
          if(status==="Applied"){
              await API.graphql(
                  graphqlOperation(
                      updateJobApplicant,
                      {
                        input:{
                            id:appliactionId,
                            applicationStatus:"In-Touch"
                        }
                    }
                  )
              )
          }
          if(status==="In-Touch"){
            await API.graphql(
                graphqlOperation(
                    updateJobApplicant,
                    {
                      input:{
                          id:appliactionId,
                          applicationStatus:"Selected"
                      }
                  }
                )
            )
        }
        if(status==="Selected"){
            await API.graphql(
                graphqlOperation(
                    updateJobApplicant,
                    {
                      input:{
                          id:appliactionId,
                          applicationStatus:"Rejected"
                      }
                  }
                )
            )
        }
        if(status==="Rejected"){
            await API.graphql(
                graphqlOperation(
                    updateJobApplicant,
                    {
                      input:{
                          id:appliactionId,
                          applicationStatus:"Applied"
                      }
                  }
                )
            )
        }
        window.location.reload();

      }

    return (
        <div className="admin">
        <header className="admin__header">
          <a href="/viewAllJobs"><img style={{height:120,width:250}} className="logo" src={logo} alt="" /></a>
          
        </header>
        <nav className="admin__nav">
    <ul className="menu">
      <li className="menu__item">
        <a className="menu__link" href="admin">Dashboard</a>
      </li>
      <li className="menu__item">
        <a className="menu__link" href="approveJobs">View all jobs requests</a>
      </li>
      <li className="menu__item">
        <a className="menu__link" href="adminJobs">View jobs</a>
      </li>
      <li className="menu__item">
        <a className="menu__link" href="createJob">Create a new Job</a>
      </li>
      <li className="menu__item">
        <a className="menu__link" href="adminInternship">View internships</a>
      </li>
      <li className="menu__item">
        <a className="menu__link" href="createInternship">Create a new internship</a>
      </li>
      <li className="menu__item">
        <a className="menu__link" href="viewAllUsers">View All users</a>
      </li>
      <li className="menu__item">
        <a className="menu__link" href="viewAllCompanies">View All Companies</a>
      </li>
    </ul>
  </nav>
        <main className="admin__main">

          <h2 style={{color:'rebeccapurple'}}>All Applicants </h2>
          <p style={{color:'rebeccapurple'}}>For job/internship</p>
          <div className="dashboard">
          <table className="table table-bordered table-hover">
                <thead>
                     <tr>
                        <th>Name</th>
                        <th>College</th>
                        <th>Email</th>
                        <th>Mobile No.</th>
                        <th>Applied Date</th>
                        <th>Status</th>
                        <th>View Resume</th>
                    </tr>   
                </thead>
                <tbody>
                    {jobApplicants.map(jobApplicants=>
                     
                                <tr>
                                    <td>{jobApplicants.user.firstName} {jobApplicants.user.lastName}</td>
                                    <td>{jobApplicants.user.collegeName}</td>
                                    <td>{jobApplicants.user.email}</td>
                                    <td>{jobApplicants.user.mobileNo}</td>
                                    <td>{moment(jobApplicants.createdAt).format('ll')}</td>
                                    <td><Link onClick={() =>{changeStatus(jobApplicants.id,jobApplicants.applicationStatus)}} style={{color:'black'}}>{jobApplicants.applicationStatus}</Link>
                                    </td>
                                    <td><Link onClick={() =>{getResumeUrl(jobApplicants.user.resumeFile)}} style={{color:'black'}}>View</Link>
                                    </td>
                                </tr>
                        )}
                </tbody>
            </table>
         
         
          </div>
        </main>
        <footer className="admin__footer">
          <span>
            &copy; 2021 JobsZone
          </span>
        </footer>
      </div>

    );
}

export default withRouter(ViewAllJobApplicantsScreen);