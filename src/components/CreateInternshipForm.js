import { API, Auth, graphqlOperation } from "aws-amplify";
import React, { useEffect, useState } from "react";
import {
  createJob,
  createJobCretaria,
  createJobDescription,
  createJobSkill,
  updateJobCount,
  createPerk,
} from "../graphql/mutations";
import { getJobCount } from "../graphql/queries";
import { withRouter } from "react-router-dom";

function CreateInternshipForm(props) {
  const [userId, setUserId] = useState("");
  const [discriptionFields, setDiscriptionFields] = useState([{ value: null }]);
  const [skillsFields, setSkillsFields] = useState([{ value: null }]);
  const [criteriaFields, setCriteriaFields] = useState([{ value: null }]);
  const [perksFields, setPerksFields] = useState([{ value: null }]);
  const [jobDetails, updateJobDetils] = useState({
    jobTitle: "",
    jobName: "",
    companyName: "",
    companyWebsite: "",
    aboutCompany: "",
    duration: "",
    salary: "",
    jobLocation: "",
    lastDate: "",
    positions: 0,
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
          id: "internshipCount",
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
  function handlePerksChange(i, event) {
    const values = [...perksFields];
    values[i].value = event.target.value;
    setPerksFields(values);
  }

  function handlePerksAdd() {
    const values = [...perksFields];
    values.push({ value: null });
    setPerksFields(values);
  }

  function handlePerksRemove(i) {
    const values = [...perksFields];
    values.splice(i, 1);
    setPerksFields(values);
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
          id: "internshipCount",
          count: jobCount,
        },
      })
    );
    await API.graphql(
      graphqlOperation(createJob, {
        input: {
          id: `internship${jobCount}`,
          jobName: jobDetails.jobName,
          jobTitle: jobDetails.jobTitle,
          jobType: "internship",
          jobStatus: "created",
          jobUserId: userId,
          companyName: jobDetails.companyName,
          companyWebsite: jobDetails.companyWebsite,
          aboutCompany: jobDetails.aboutCompany,
          duration: jobDetails.duration,
          noOfPosition: jobDetails.positions,
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
            jobID: `internship${jobCount}`,
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
            jobID: `internship${jobCount}`,
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
            jobID: `internship${jobCount}`,
          },
        })
      );
      iCri = iCri + 1;
    }
    let lPerks = perksFields.length;
    let iPerks = 0;
    while (iPerks < lPerks) {
      await API.graphql(
        graphqlOperation(createPerk, {
          input: {
            content: perksFields[iPerks].value,
            jobID: `internship${jobCount}`,
          },
        })
      );
      iPerks = iPerks + 1;
    }

    alert(
      "Sucessfully created a job. Your Job will be active within 2 hrs, If not contact us."
    );
    props.history.push("/internship");
  };

  return (
    <div className="formContainer">
      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="job-title">Job Title</label>
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
            <label htmlFor="job-name">Job Name</label>
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
            <label htmlFor="company-name">Company Name</label>
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
            <label htmlFor="company-website">Company Website</label>
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
          <label htmlFor="about-company">About Company</label>
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
            <label htmlFor="Duration">Duration</label>
            <input
              type="text"
              className="form-control"
              value={jobDetails.duration}
              onChange={handleChange}
              name="duration"
              id="duration"
              placeholder="Enter Internship Duration (eg:- 2 months or 12 weeks )"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="salary">Stipend</label>
            <input
              type="text"
              className="form-control"
              value={jobDetails.salary}
              onChange={handleChange}
              name="salary"
              id="stipend"
              placeholder="Enter Stipend Offered (eg:- 10000 /month or unpaid )"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="internship-location">Internship Loaction</label>
            <input
              type="text"
              className="form-control"
              value={jobDetails.jobLocation}
              onChange={handleChange}
              name="jobLocation"
              id="internship-location"
              placeholder="Enter Internship Location (for multiple enter Bengluru/Pune )"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="last-date">Last Date To Apply</label>
            <input
              type="date"
              className="form-control"
              value={jobDetails.lastDate}
              onChange={handleChange}
              name="lastDate"
              id="lastDate"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="positions">No Of Postions</label>
          <input
            type="number"
            className="form-control"
            value={jobDetails.positions}
            onChange={handleChange}
            id="positions"
            name="positions"
            min={1}
            max={1000000}
          />
        </div>
        <div className="form-group">
          <label htmlFor="internship-description">
            Internship Description (add multiple lines){" "}
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
                  name="internshipDescription"
                  placeholder="Describe Internship Role"
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
          <label htmlFor="desired-skills">
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
          <label htmlFor="criteria">Add Criteria (add multiple lines) </label>
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
                  placeholder="Enter criteria required for Internship"
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
        <div className="form-group">
          <label htmlFor="desired-skills">Perks (add multiple lines) </label>
          <button
            className="btn"
            style={{ marginLeft: 30 }}
            type="button"
            onClick={() => handlePerksAdd()}
          >
            Add more field
          </button>

          {perksFields.map((field, idx) => {
            return (
              <div key={`${field}-${idx}`}>
                <input
                  style={{ marginTop: 10, marginBottom: 5 }}
                  className="form-control"
                  type="text"
                  value={field.value}
                  name="perks"
                  placeholder="Add perks of doing Internship"
                  onChange={(e) => handlePerksChange(idx, e)}
                />
                <button
                  className="btn"
                  type="button"
                  onClick={() => handlePerksRemove(idx)}
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>
        <div className="text-center submitButton">
          <button
            onClick={createNewJob}
            style={{ height: 50, width: 120, fontFamily: "sans-serif" }}
            name="addJob"
            type="button"
            className="btn btn-primary"
          >
            Add Job
          </button>
        </div>
      </form>
    </div>
  );
}
export default withRouter(CreateInternshipForm);
