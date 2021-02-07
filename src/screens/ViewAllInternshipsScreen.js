import React, { useEffect, useState } from 'react';
import './authStyle.css';
import logo from '../images/logo.png';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import {listJobs} from '../graphql/queries';
import {Link} from 'react-router-dom';
import moment from 'moment';

function ViewAllInternshipsScreen(){
    const [jobs,setJobs]=useState([]);
    useEffect(()=>{
        try{
          const getJobList= async()=>{
            const userInfo=await Auth.currentAuthenticatedUser({bypassCache:true});
            const joblist=await API.graphql(
              graphqlOperation(
                listJobs,{
                    filter:{
                      jobType: {contains: "internship"},
                      jobUserId: {contains: userInfo.attributes.sub}
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
          <h2 style={{color:'rebeccapurple'}}>All Internships </h2>
          <p style={{color:'rebeccapurple'}}>Posted By You</p>
          <div class="dashboard">
            <table class="table table-bordered table-hover">
                <thead>
                     <tr>
                        <th>Internship Name</th>
                        <th>Internship Location</th>
                        <th>Post Date</th>
                        <th>Last Date</th>
                        <th>View Applicants</th>
                        <th>View Internship Details</th>
                        <th>Edit Internship Details</th>
                        <th>Delete Internship</th>
                    </tr>   
                </thead>
                <tbody>
                    {jobs.map(jobs=>
                                <tr>
                                    <td>{jobs.jobName}</td>
                                    <td>{jobs.jobLocation}</td>
                                    <td>{moment(jobs.createdAt).format('ll')}</td>
                                    <td>{moment(jobs.lastDate).format('ll')}</td>
                                    <td><Link style={{color:'black'}} to={{
                                            pathname: `/viewJobApplicants${jobs.id}`
                                            }}>View</Link>
                                    </td>
                                    <td><Link style={{color:'black'}} to={{
                                            pathname: `/internship${jobs.id}`
                                            }}>View</Link>
                                    </td>
                                    <td><Link style={{color:'black'}} to={{
                                            pathname: `/editJob${jobs.id}`
                                            }}>Edit</Link>
                                    </td>
                                    <td><Link style={{color:'black'}} >Remove</Link>
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

export default ViewAllInternshipsScreen;