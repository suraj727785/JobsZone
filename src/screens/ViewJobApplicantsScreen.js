import React, { useEffect, useState } from 'react';
import './authStyle.css';
import logo from '../images/logo.png';
import { API, graphqlOperation, Storage } from 'aws-amplify';
import {listJobApplicants} from '../graphql/queries';

import {Link, useParams, withRouter} from 'react-router-dom';
import moment from 'moment';

function ViewJobApplicantsScreen(props){
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

    return (
        <div class="admin">
        <header class="admin__header">
          <a href="/viewAllJobs"><img style={{height:120,width:250}} className="logo" src={logo} alt="" /></a>
          <div class="toolbar">
            <h3 style={{color:'white'}}>.</h3>
            <a href="#" class="logout">
              Log Out
            </a>
          </div>
        </header>
        <nav class="admin__nav">
          <ul class="menu">
            <li class="menu__item">
              <a class="menu__link" href="company">Dashboard</a>
            </li>
            <li class="menu__item">
              <a class="menu__link" href="viewAllJobs">View jobs</a>
            </li>
            <li class="menu__item">
              <a class="menu__link" href="createJob">Create a new Job</a>
            </li>
            <li class="menu__item">
              <a class="menu__link" href="viewAllInternships">View internships</a>
            </li>
            <li class="menu__item">
              <a class="menu__link" href="createInternship">Create a new internship</a>
            </li>
          </ul>
        </nav>
        <main class="admin__main">

          <h2 style={{color:'rebeccapurple'}}>All Applicants </h2>
          <p style={{color:'rebeccapurple'}}>For job/internship</p>
          <div class="dashboard">
            <table class="table table-bordered table-hover">
                <thead>
                     <tr>
                        <th>Name</th>
                        <th>College</th>
                        <th>Email</th>
                        <th>Mobile No.</th>
                        <th>Applied Date</th>
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
                                    <td><Link onClick={() =>{getResumeUrl(jobApplicants.user.resumeFile)}} style={{color:'black'}}>View</Link>
                                    </td>
                                </tr>
                        )}
                </tbody>
            </table>
         
          </div>
        </main>
        <footer class="admin__footer">
          <span>
            &copy; 2018 Grid Inc.
          </span>
        </footer>
      </div>

    );
}

export default withRouter(ViewJobApplicantsScreen);