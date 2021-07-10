import { API, Auth, graphqlOperation } from "aws-amplify";
import React, { useEffect, useState } from "react";
import {
  createJob,
  createJobCretaria,
  createJobDescription,
  createJobSkill,
  updateJobCount,
} from "../graphql/mutations";
import { getJobCount } from "../graphql/queries";
import { withRouter } from "react-router-dom";

function CreateJobForm(props) {
  const [userId, setUserId] = useState("");
  const [discriptionFields, setDiscriptionFields] = useState([{ value: "" }]);
  const [skillsFields, setSkillsFields] = useState([{ value: "" }]);
  const [criteriaFields, setCriteriaFields] = useState([{ value: "" }]);
  const [jobDetails, updateJobDetils] = useState({
    jobTitle: "",
    jobName: "",
    companyName: "",
    companyWebsite: "",
    aboutCompany: "",
    experience: "",
    salary: "",
    jobLocation: "",
    lastDate: "",
  });
  const [jobCount, setJobCount] = useState(1);
  useEffect(() => {
    const fetchJobCount = async () => {
      const userInfo = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      setUserId(userInfo.attributes.sub);
      const jobCountData = await API.graphql(
        graphqlOperation(getJobCount, {
          id: "jobCount",
        })
      );
      setJobCount(jobCountData.data.getJobCount.count + 1);
    };

    fetchJobCount();
  }, []);

  function handleDiscriptionChange(i, event) {
    const values = [...discriptionFields];
    values[i].value = event.target.value;
    setDiscriptionFields(values);
  }

  function handleDiscriptionAdd() {
    const values = [...discriptionFields];
    values.push({ value: null });
    setDiscriptionFields(values);
  }

  function handleDiscriptionRemove(i) {
    const values = [...discriptionFields];
    values.splice(i, 1);
    setDiscriptionFields(values);
  }
  function handleSkillsChange(i, event) {
    const values = [...skillsFields];
    values[i].value = event.target.value;
    setSkillsFields(values);
  }

  function handleSkillsAdd() {
    const values = [...skillsFields];
    values.push({ value: null });
    setSkillsFields(values);
  }

  function handleSkillsRemove(i) {
    const values = [...skillsFields];
    values.splice(i, 1);
    setSkillsFields(values);
  }
  function handleCriteriaChange(i, event) {
    const values = [...criteriaFields];
    values[i].value = event.target.value;
    setCriteriaFields(values);
  }

  function handleCriteriaAdd() {
    const values = [...criteriaFields];
    values.push({ value: null });
    setCriteriaFields(values);
  }

  function handleCriteriaRemove(i) {
    const values = [...criteriaFields];
    values.splice(i, 1);
    setCriteriaFields(values);
  }
  function handleChange(evt) {
    const value = evt.target.value;
    updateJobDetils({
      ...jobDetails,
      [evt.target.name]: value,
    });
  }
  const createNewJob = async () => {
    await API.graphql(
      graphqlOperation(updateJobCount, {
        input: {
          id: "jobCount",
          count: jobCount,
        },
      })
    );
    await API.graphql(
      graphqlOperation(createJob, {
        input: {
          id: `job${jobCount}`,
          jobName: jobDetails.jobName,
          jobType: "job",
          jobUserId: userId,
          jobStatus: "created",
          jobTitle: jobDetails.jobTitle,
          companyName: jobDetails.companyName,
          companyWebsite: jobDetails.companyWebsite,
          aboutCompany: jobDetails.aboutCompany,
          experience: jobDetails.experience,
          salary: jobDetails.salary,
          jobLocation: jobDetails.jobLocation,
          lastDate: jobDetails.lastDate,
        },
      })
    );
    let lDis = discriptionFields.length;
    let iDis = 0;
    while (iDis < lDis) {
      await API.graphql(
        graphqlOperation(createJobDescription, {
          input: {
            content: discriptionFields[iDis].value,
            jobID: `job${jobCount}`,
          },
        })
      );
      iDis = iDis + 1;
    }
    let lSkil = skillsFields.length;
    let iSkill = 0;
    while (iSkill < lSkil) {
      await API.graphql(
        graphqlOperation(createJobSkill, {
          input: {
            content: skillsFields[iSkill].value,
            jobID: `job${jobCount}`,
          },
        })
      );
      iSkill = iSkill + 1;
    }
    let lCri = criteriaFields.length;
    let iCri = 0;
    while (iCri < lCri) {
      await API.graphql(
        graphqlOperation(createJobCretaria, {
          input: {
            content: criteriaFields[iCri].value,
            jobID: `job${jobCount}`,
          },
        })
      );
      iCri = iCri + 1;
    }
    alert(
      "Sucessfully created a job. Your Job will be active within 2 hrs, If not contact us."
    );
    props.history.push("/viewAllJobs");
  };

  return (
    <div className="formContainer">
      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlhtmlFor="job-title">Job Title</label>
            <input
              type="text"
              value={jobDetails.jobTitle}
              onChange={handleChange}
              className="form-control"
              name="jobTitle"
              id="job-title"
              placeholder="Enter Job Title"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlhtmlFor="job-name">Job Name</label>
            <input
              type="text"
              value={jobDetails.jobName}
              onChange={handleChange}
              className="form-control"
              name="jobName"
              id="job-name"
              placeholder="Enter Job Name"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlhtmlFor="company-name">Company Name</label>
            <input
              type="text"
              value={jobDetails.companyName}
              onChange={handleChange}
              className="form-control"
              name="companyName"
              id="job-title"
              placeholder="Enter Your Company Name"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlhtmlFor="company-website">Company Website</label>
            <input
              type="text"
              value={jobDetails.companyWebsite}
              onChange={handleChange}
              className="form-control"
              name="companyWebsite"
              id="job-website"
              placeholder="Enter Company Official Website"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlhtmlFor="about-company">About Company</label>
          <textarea
            className="form-control"
            value={jobDetails.aboutCompany}
            onChange={handleChange}
            id="about-company"
            name="aboutCompany"
            rows="3"
          ></textarea>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlhtmlFor="experience">Experience Required</label>
            <input
              type="text"
              id="experience"
              value={jobDetails.experience}
              onChange={handleChange}
              name="experience"
              className="form-control"
              placeholder="Enter Experience Required For Job (eg:- 0-1years)"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlhtmlFor="salary">Salary</label>
            <input
              type="text"
              value={jobDetails.salary}
              onChange={handleChange}
              className="form-control"
              name="salary"
              id="salary"
              placeholder="Enter Salary Offered (eg:- 3 LPA )"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlhtmlFor="job-location">Job Loaction</label>
            <input
              type="text"
              value={jobDetails.jobLocation}
              onChange={handleChange}
              className="form-control"
              name="jobLocation"
              id="job-location"
              placeholder="Enter Job Location (for multiple enter Bengluru/Pune )"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlhtmlFor="last-date">Last Date To Apply</label>
            <input
              type="date"
              value={jobDetails.lastDate}
              onChange={handleChange}
              className="form-control"
              name="lastDate"
              id="lastDate"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlhtmlFor="job-description">
            Job Description (add multiple lines){" "}
          </label>
          <button
            className="btn"
            style={{ marginLeft: 30 }}
            type="button"
            onClick={() => handleDiscriptionAdd()}
          >
            Add more field
          </button>

          {discriptionFields.map((field, idx) => {
            return (
              <div key={`${field}-${idx}`}>
                <input
                  style={{ marginTop: 10, marginBottom: 5 }}
                  className="form-control"
                  type="text"
                  value={field.value}
                  name="jobDescription"
                  placeholder="Describe Job"
                  onChange={(e) => handleDiscriptionChange(idx, e)}
                />
                <button
                  className="btn"
                  type="button"
                  onClick={() => handleDiscriptionRemove(idx)}
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>
        <div className="form-group">
          <label htmlhtmlFor="desired-skills">
            Desired Skills (add multiple lines){" "}
          </label>
          <button
            className="btn"
            style={{ marginLeft: 30 }}
            type="button"
            onClick={() => handleSkillsAdd()}
          >
            Add more field
          </button>

          {skillsFields.map((field, idx) => {
            return (
              <div key={`${field}-${idx}`}>
                <input
                  style={{ marginTop: 10, marginBottom: 5 }}
                  className="form-control"
                  type="text"
                  value={field.value}
                  name="desiredSkills"
                  placeholder="Add desired skills required for Job"
                  onChange={(e) => handleSkillsChange(idx, e)}
                />
                <button
                  className="btn"
                  type="button"
                  onClick={() => handleSkillsRemove(idx)}
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>
        <div className="form-group">
          <label htmlhtmlFor="criteria">
            Add Criteria (add multiple lines){" "}
          </label>
          <button
            className="btn"
            style={{ marginLeft: 30 }}
            type="button"
            onClick={() => handleCriteriaAdd()}
          >
            Add more field
          </button>

          {criteriaFields.map((field, idx) => {
            return (
              <div key={`${field}-${idx}`}>
                <input
                  style={{ marginTop: 10, marginBottom: 5 }}
                  className="form-control"
                  type="text"
                  value={field.value}
                  name="criteria"
                  placeholder="Enter criteria required for job"
                  onChange={(e) => handleCriteriaChange(idx, e)}
                />
                <button
                  className="btn"
                  type="button"
                  onClick={() => handleCriteriaRemove(idx)}
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>
        <div className="text-center submitButton">
          <a
            onClick={createNewJob}
            style={{ height: 50, width: 120, fontFamily: "sans-serif" }}
            name="addJob"
            type="button"
            className="btn btn-primary"
          >
            Add Job
          </a>
        </div>
      </form>
    </div>
  );
}
export default withRouter(CreateJobForm);
