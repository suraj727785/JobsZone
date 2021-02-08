import React, { useEffect, useState } from 'react';
import './authStyle.css';
import logo from '../images/logo.png';
import { API, graphqlOperation } from 'aws-amplify';
import {listJobs} from '../graphql/queries';
import {Link} from 'react-router-dom';
import moment from 'moment';
import { deleteJob, updateJob } from '../graphql/mutations';

function ViewAdminInternshipsScreen(){
    const [jobs,setJobs]=useState([]);
    useEffect(()=>{
        try{
          const getJobList= async()=>{
            const joblist=await API.graphql(
              graphqlOperation(
                listJobs,{
                    filter:{
                      jobType: {contains: "internship"},
                      jobStatus:{notContains:"created"}
                    }
                }   
            ));
          setJobs(joblist.data.listJobs.items);
          }
        
          getJobList();
        }
        catch(e){
          console.log(e)
    
        }
    
      },[]);
      async function deleteThisJob (jobId){
        await API.graphql(
          graphqlOperation(
            deleteJob,{
              input:{
                id:jobId
              }
            }
          )
        );
        alert("Job Deleted Sucessfully");
        window.location.reload();
      };
      const changeJobStatus=async(jobId,currentStatus)=>{

        if(currentStatus==="active"){
          await API.graphql(
            graphqlOperation(
              updateJob,
              {
                input:{
                  id:jobId,
                  jobStatus:"inactive"
                }
              }
            )
          );

        }else{
          await API.graphql(
            graphqlOperation(
              updateJob,
              {
                input:{
                  id:jobId,
                  jobStatus:"active"
                }
              }
            )
          );

        }
        window.location.reload();

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
        <a class="menu__link" href="admin">Dashboard</a>
      </li>
      <li class="menu__item">
        <a class="menu__link" href="approveJobs">View all jobs requests</a>
      </li>
      <li class="menu__item">
        <a class="menu__link" href="adminJobs">View jobs</a>
      </li>
      <li class="menu__item">
        <a class="menu__link" href="createJob">Create a new Job</a>
      </li>
      <li class="menu__item">
        <a class="menu__link" href="adminInternship">View internships</a>
      </li>
      <li class="menu__item">
        <a class="menu__link" href="createInternship">Create a new internship</a>
      </li>
      <li class="menu__item">
        <a class="menu__link" href="viewAllUsers">View All users</a>
      </li>
      <li class="menu__item">
        <a class="menu__link" href="viewAllCompanies">View All Companies</a>
      </li>
    </ul>
  </nav>
        <main class="admin__main">
          <h2 style={{color:'rebeccapurple'}}>All Internships </h2>
          <p style={{color:'rebeccapurple'}}>Posted By Companies</p>
          <div class="dashboard">
          <table class="table table-bordered table-hover">
                <thead>
                     <tr>
                        <th>Internship Name</th>
                        <th>Company Name</th>
                        <th>Location</th>
                        <th>Post Date</th>
                        <th>Last Date</th>
                        <th>Current Status</th>
                        <th>View Applicants</th>
                        <th>Edit Details</th>
                        <th>Delete</th>
                    </tr>   
                </thead>
                <tbody>
                    {jobs.map(jobs=>
                                <tr>
                                    <td><Link style={{color:'black'}} to={{
                                            pathname: `/job${jobs.id}`
                                            }}>{jobs.jobName}</Link></td>
                                    <td>{jobs.companyName}</td>        
                                    <td>{jobs.jobLocation}</td>
                                    <td>{moment(jobs.createdAt).format('ll')}</td>
                                    <td>{moment(jobs.lastDate).format('ll')}</td>
                                    <td><Link onClick={() =>{changeJobStatus(jobs.id,jobs.jobStatus)}}  style={{color:'black'}} >{jobs.jobStatus}</Link>
                                    </td>
                                    <td><Link style={{color:'black'}} to={{
                                            pathname: `/viewJobApplicants${jobs.id}`
                                            }}>View</Link>
                                    </td>
                                    <td><Link style={{color:'black'}} to={{
                                            pathname: `/editJob${jobs.id}`
                                            }}>Edit</Link>
                                    </td>
                                    <td><Link onClick={() =>{deleteThisJob(jobs.id)}} style={{color:'black'}}>Remove</Link>
                                    </td>
                                </tr>
                        )}
                </tbody>
            </table>
         
         
          </div>
        </main>
        <footer class="admin__footer">
          <span>
            &copy; 2021 JobsZone.
          </span>
        </footer>
      </div>

    );
}

export default ViewAdminInternshipsScreen;