import React, { useState, useEffect } from "react";
import "./authStyle.css";
import logo from "../images/logo.png";
import { API, graphqlOperation } from "aws-amplify";
import { listJobs } from "../graphql/queries";

function AdminScreen() {
  const [jobs, setJobs] = useState([]);
  const [internships, setInternships] = useState([]);
  useEffect(() => {
    try {
      const getJobList = async () => {
        const jobList = await API.graphql(
          graphqlOperation(listJobs, {
            filter: {
              jobType: { contains: "job" },
            },
          })
        );
        const internshipList = await API.graphql(
          graphqlOperation(listJobs, {
            filter: {
              jobType: { contains: "internship" },
            },
          })
        );
        setJobs(jobList.data.listJobs.items);
        setInternships(internshipList.data.listJobs.items);
      };

      getJobList();
    } catch (e) {
      console.log(e);
    }
  }, []);
  return (
    <div className="admin">
      <header className="admin__header">
        <a href="/viewAllJobs">
          <img
            style={{ height: 120, width: 250 }}
            className="logo"
            src={logo}
            alt=""
          />
        </a>
      </header>
      <nav className="admin__nav">
        <ul className="menu">
          <li className="menu__item">
            <a className="menu__link" href="admin">
              Dashboard
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="approveJobs">
              View all jobs requests
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="adminJobs">
              View jobs
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="createJob">
              Create a new Job
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="adminInternship">
              View internships
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="createInternship">
              Create a new internship
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="viewAllUsers">
              View All users
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="viewAllCompanies">
              View All Companies
            </a>
          </li>
        </ul>
      </nav>
      <main className="admin__main">
        <h2 style={{ color: "rebeccapurple" }}>Dashboard</h2>
        <div className="dashboard">
          <div className="dashboard__item">
            <div className="admincard">
              <h4>Total Jobs:</h4>
              <h1 style={{ fontSize: 76, color: "rebeccapurple" }}>
                {jobs.length} Jobs
              </h1>
              <a href="adminJobs">
                <div className="panel-footer">
                  <span className="pull-left">View All Jobs</span>
                </div>
              </a>
            </div>
          </div>
          <div className="dashboard__item">
            <div className="admincard">
              <h4>Total Internships:</h4>
              <h1 style={{ fontSize: 76, color: "rebeccapurple" }}>
                {internships.length} Internships
              </h1>
              <a href="adminInternship">
                <div className="panel-footer">
                  <span className="pull-left">View All Internship</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </main>
      <footer className="admin__footer">
        <span>&copy; 2021 JobsZone.</span>
      </footer>
    </div>
  );
}

export default AdminScreen;
