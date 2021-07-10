import React, { useEffect, useState } from "react";
import "./authStyle.css";
import logo from "../images/logo.png";
import { API, Auth, graphqlOperation } from "aws-amplify";
import { listJobs } from "../graphql/queries";
import { Link } from "react-router-dom";
import moment from "moment";
import { deleteJob, updateJob } from "../graphql/mutations";

function ViewAllInternshipsScreen() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    try {
      const getJobList = async () => {
        const userInfo = await Auth.currentAuthenticatedUser({
          bypassCache: true,
        });
        const joblist = await API.graphql(
          graphqlOperation(listJobs, {
            filter: {
              jobType: { contains: "internship" },
              jobUserId: { contains: userInfo.attributes.sub },
              jobStatus: { notContains: "created" },
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
  const changeJobStatus = async (jobId, currentStatus) => {
    if (currentStatus === "active") {
      await API.graphql(
        graphqlOperation(updateJob, {
          input: {
            id: jobId,
            jobStatus: "inactive",
          },
        })
      );
    } else {
      await API.graphql(
        graphqlOperation(updateJob, {
          input: {
            id: jobId,
            jobStatus: "active",
          },
        })
      );
    }
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
            <a className="menu__link" href="company">
              Dashboard
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="viewJobs">
              View jobs
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="createJob">
              Create a new Job
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="viewAllInternships">
              View internships
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="createInternship">
              Create a new internship
            </a>
          </li>
        </ul>
      </nav>
      <main className="admin__main">
        <h2 style={{ color: "rebeccapurple" }}>All Internships </h2>
        <p style={{ color: "rebeccapurple" }}>Posted By You</p>
        <div className="dashboard">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>Internship Name</th>
                <th>Location</th>
                <th>Post Date</th>
                <th>Last Date</th>
                <th>Status</th>
                <th>View Applicants</th>
                <th>View </th>
                <th>Edit </th>
                <th>Delete </th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((jobs) => (
                <tr>
                  <td>{jobs.jobName}</td>
                  <td>{jobs.jobLocation}</td>
                  <td>{moment(jobs.createdAt).format("ll")}</td>
                  <td>{moment(jobs.lastDate).format("ll")}</td>
                  <td>
                    <Link
                      onClick={() => {
                        changeJobStatus(jobs.id, jobs.jobStatus);
                      }}
                      style={{ color: "black" }}
                    >
                      {jobs.jobStatus}
                    </Link>
                  </td>
                  <td>
                    <Link
                      style={{ color: "black" }}
                      to={{
                        pathname: `/viewJobApplicants${jobs.id}`,
                      }}
                    >
                      View
                    </Link>
                  </td>
                  <td>
                    <Link
                      style={{ color: "black" }}
                      to={{
                        pathname: `/internship${jobs.id}`,
                      }}
                    >
                      View
                    </Link>
                  </td>
                  <td>
                    <Link
                      style={{ color: "black" }}
                      to={{
                        pathname: `/editInternship${jobs.id}`,
                      }}
                    >
                      Edit
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

export default ViewAllInternshipsScreen;
