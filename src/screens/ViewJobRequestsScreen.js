import React, { useEffect, useState } from "react";
import "./authStyle.css";
import logo from "../images/logo.png";
import { API, graphqlOperation } from "aws-amplify";
import { listJobs } from "../graphql/queries";
import { Link, withRouter } from "react-router-dom";
import moment from "moment";
import { deleteJob, updateJob } from "../graphql/mutations";

function ViewJobRequestsScreen() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    try {
      const getJobList = async () => {
        const joblist = await API.graphql(
          graphqlOperation(listJobs, {
            filter: {
              jobStatus: { contains: "created" },
            },
          })
        );
        setJobs(joblist.data.listJobs.items);
      };

      getJobList();
    } catch (e) {
      console.log(e);
    }
  }, []);

  async function deleteThisJob(jobId) {
    await API.graphql(
      graphqlOperation(deleteJob, {
        input: {
          id: jobId,
        },
      })
    );
    alert("Job Deleted Sucessfully");
    window.location.reload();
  }
  const changeJobStatus = async (jobId) => {
    await API.graphql(
      graphqlOperation(updateJob, {
        input: {
          id: jobId,
          jobStatus: "active",
        },
      })
    );
    window.location.reload();
  };

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
            <a className="menu__link" href="createJob">
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
            <a className="menu__link" href="createJob">
              View All users
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="adminApplicants">
              View All Applicants
            </a>
          </li>
        </ul>
      </nav>
      <main className="admin__main">
        <h2 style={{ color: "rebeccapurple" }}>All Job Requests </h2>
        <div className="dashboard">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>Job Name</th>
                <th>Job Type</th>
                <th>Company Name</th>
                <th>Job Location</th>
                <th>Post Date</th>
                <th>Last Date</th>
                <th>Approve</th>
                <th>Delete </th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((jobs) => (
                <tr>
                  <td>
                    <Link
                      style={{ color: "black" }}
                      to={{
                        pathname: `/editJob${jobs.id}`,
                      }}
                    >
                      {jobs.jobName}
                    </Link>
                  </td>
                  <td>{jobs.jobType}</td>
                  <td>{jobs.companyName}</td>
                  <td>{jobs.jobLocation}</td>
                  <td>{moment(jobs.createdAt).format("ll")}</td>
                  <td>{moment(jobs.lastDate).format("ll")}</td>
                  <td>
                    <Link
                      onClick={() => {
                        changeJobStatus(jobs.id);
                      }}
                      style={{ color: "black" }}
                    >
                      Approve
                    </Link>
                  </td>
                  <td>
                    <Link
                      onClick={() => {
                        deleteThisJob(jobs.id);
                      }}
                      style={{ color: "black" }}
                    >
                      Remove
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
      <footer className="admin__footer">
        <span>&copy; 2021 JobsZone</span>
      </footer>
    </div>
  );
}

export default withRouter(ViewJobRequestsScreen);
