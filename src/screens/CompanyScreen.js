import React, { useState,useEffect } from 'react';
import './authStyle.css';
import logo from '../images/logo.png';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import {listJobs} from '../graphql/queries';

function CompanyScreen(){
  const [jobs,setJobs]=useState([]);
  const [internships,setInternships]=useState([]);
  useEffect(()=>{
    try{
      const getJobList= async()=>{
      const userInfo=await Auth.currentAuthenticatedUser({bypassCache:true});
      const jobList=await API.graphql(
        graphqlOperation(
          listJobs,{
              filter:{
                jobType: {contains: "job"},
                jobUserId: {contains: userInfo.attributes.sub},
                jobStatus:{notContains:"created"}
              }
          }   
      ));
      const internshipList=await API.graphql(
        graphqlOperation(
          listJobs,{
              filter:{
                jobType: {contains: "internship"},
                jobUserId: {contains: userInfo.attributes.sub},
                jobStatus:{notContains:"created"}
              }
          }   
      ));
      setJobs(jobList.data.listJobs.items);
      setInternships(internshipList.data.listJobs.items);
      }
    
      getJobList();
    }
    catch(e){
      console.log(e)

    }

  },[]);
    return (
        <div className="admin">
  <header className="admin__header">
    <a href="/viewAllJobs"><img style={{height:120,width:250}} className="logo" src={logo} alt="" /></a>
    <div className="toolbar">
      <h3 style={{color:'white'}}>.</h3>
      <a href="#" className="logout">
        Log Out
      </a>
    </div>
  </header>
  <nav className="admin__nav">
    <ul className="menu">
      <li className="menu__item">
        <a className="menu__link" href="company">Dashboard</a>
      </li>
      <li className="menu__item">
        <a className="menu__link" href="viewJobs">View jobs</a>
      </li>
      <li className="menu__item">
        <a className="menu__link" href="createJob">Create a new Job</a>
      </li>
      <li className="menu__item">
        <a className="menu__link" href="viewAllInternships">View internships</a>
      </li>
      <li className="menu__item">
        <a className="menu__link" href="createInternship">Create a new internship</a>
      </li>
    </ul>
  </nav>
  <main className="admin__main">
    <h2 style={{color:'rebeccapurple'}}>Dashboard</h2>
    <div className="dashboard">
      <div className="dashboard__item">
        <div className="admincard">
          <h4>Total Jobs:</h4>
        <h1 style={{fontSize:76,color:'rebeccapurple'}}>{jobs.length} Jobs</h1>
        <a href="viewAllJobs">
                <div className="panel-footer">
                    <span className="pull-left">View All Jobs</span>
                    <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                    <div className="clearfix"></div>
                </div>
            </a>
        </div>
      </div>
      <div className="dashboard__item">
        <div className="admincard">
          <h4>Total Internships:</h4>
        <h1 style={{fontSize:76,color:'rebeccapurple'}}>{internships.length} Internships</h1>
        <a href="viewAllInternships">
                <div className="panel-footer">
                    <span className="pull-left">View All Internship</span>
                    <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                    <div className="clearfix"></div>
                </div>
            </a>
        </div>
      </div>
      <div>
      </div>

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

export default CompanyScreen;