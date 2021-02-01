import React,{useState} from 'react';

function CreateJobForm(){

  const [discriptionFields, setDiscriptionFields] = useState([{ value: null }]);
  const [skillsFields, setSkillsFields] = useState([{ value: null }]);
  const [criteriaFields, setCriteriaFields] = useState([{ value: null }]);

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
   
    return (


    <div className="formContainer">
    <form>
    <div className="form-row">
    <div className="form-group col-md-6">
      <label for="job-title">Job Title</label>
      <input type="text" className="form-control" name="jobTitle" id="job-title" placeholder="Enter Job Title" />
    </div>
    <div className="form-group col-md-6">
    <label for="job-name">Job Name</label>
      <input type="text" className="form-control" name="jobName" id="job-name" placeholder="Enter Job Name" />
    </div>
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
    <label for="company-name">Company Name</label>
      <input type="text" className="form-control" name="companyName" id="job-title" placeholder="Enter Your Company Name" />
    </div>
    <div className="form-group col-md-6">
    <label for="company-website">Company Website</label>
      <input type="text" className="form-control" name="companyWebsite" id="job-website" placeholder="Enter Company Official Website" />
    </div>
  </div>
  <div className="form-group">
    <label for="about-company">About Company</label>
    <textarea class="form-control" id="about-company" name="aboutCompany" rows="3"></textarea>
  </div>
  <div className="form-row">
  <div className="form-group col-md-6">
    <label for="experience">Experience Required</label>
    <select id="experience"  name="experience"className="form-control">
        <option selected>0 years</option>
        <option>0-1 years</option>
        <option>1-2 years</option>
        <option>2-3 years</option>
        <option>3-4 years</option>
        <option>4-5 years</option>
        <option>5-6 years</option>
        <option>7-8 years</option>
        <option>8-9 years</option>
        <option>9-10 years</option>
        <option>10+ years</option>
      </select>
    </div>
    <div className="form-group col-md-6">
      <label for="salary">Salary</label>
      <input type="text" className="form-control" name="salary" id="salary" placeholder="Enter Salary Offered (eg:- 3 LPA )" />
    </div>   
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
    <label for="job-location">Job Loaction</label>
      <input type="text" className="form-control" name="jobLocation" id="job-location" placeholder="Enter Job Location (for multiple enter Bengluru/Pune )" />
    </div>
    <div className="form-group col-md-6">
    <label for="last-date">Last Date To Apply</label>
      <input type="date" className="form-control" name="lastDate" id="lastDate"  />
    </div>
  </div>
  <div className="form-group">
    <label for="job-description">Job Description (add multiple lines) </label>
    <button className="btn" style={{marginLeft:30}} type="button" onClick={() => handleDiscriptionAdd()}>
       Add more field
      </button>

      {discriptionFields.map((field, idx) => {
        return (
          <div key={`${field}-${idx}`}>
            <input
              style={{marginTop:10,marginBottom:5}}
              className="form-control"
              type="text"
              value={field.value}
              name="jobDescription"
              placeholder="Describe Job"
              onChange={e => handleDiscriptionChange(idx, e)}
            />
            <button className="btn" type="button" onClick={() => handleDiscriptionRemove(idx)}>
             Remove
            </button>
          </div>
        );
      })}
  </div>
  <div className="form-group">
    <label for="desired-skills">Desired Skills (add multiple lines) </label>
    <button className="btn" style={{marginLeft:30}} type="button" onClick={() => handleSkillsAdd()}>
       Add more field
      </button>

      {skillsFields.map((field, idx) => {
        return (
          <div key={`${field}-${idx}`}>
            <input
              style={{marginTop:10,marginBottom:5}}
              className="form-control"
              type="text"
              value={field.value}
              name="desiredSkills"
              placeholder="Add desired skills required for Job"
              onChange={e => handleSkillsChange(idx, e)}
            />
            <button className="btn" type="button" onClick={() => handleSkillsRemove(idx)}>
             Remove
            </button>
          </div>
        );
      })}
  </div>
  <div className="form-group">
    <label for="criteria">Add Criteria (add multiple lines) </label>
    <button className="btn" style={{marginLeft:30}} type="button" onClick={() => handleCriteriaAdd()}>
       Add more field
      </button>

      {criteriaFields.map((field, idx) => {
        return (
          <div key={`${field}-${idx}`}>
            <input
              style={{marginTop:10,marginBottom:5}}
              className="form-control"
              type="text"
              value={field.value}
              name="criteria"
              placeholder="Enter criteria required for job"
              onChange={e => handleCriteriaChange(idx, e)}
            />
            <button className="btn" type="button" onClick={() => handleCriteriaRemove(idx)}>
             Remove
            </button>
          </div>
        );
      })}
  </div>
  <div class="text-center submitButton">
            <button style={{height:50,width:120,fontFamily:'sans-serif'}} name="addJob" type="button" class="btn btn-primary">Add Job</button>
          </div>
</form>


    </div>


    );
}
export default CreateJobForm;