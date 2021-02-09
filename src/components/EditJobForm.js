import { API, Auth, graphqlOperation } from 'aws-amplify';
import React,{useEffect, useState} from 'react';
import { updateJob,updateJobCretaria, updateJobDescription, updateJobSkill } from '../graphql/mutations';
import { getJob } from '../graphql/queries';
import { useParams, withRouter } from 'react-router-dom';

function EditJobForm(props){

  const {jobId} =useParams();
  const [userId,setUserId]=useState('');
  const [discriptionFields, setDiscriptionFields] = useState([{ value: '',id:'' }]);
  const [skillsFields, setSkillsFields] = useState([{ value: '',id:'' }]);
  const [criteriaFields, setCriteriaFields] = useState([{ value: '',id:'' }]);
  const [jobDetails,updateJobDetils]=useState({
    jobTitle:'',jobName:'',companyName:'',companyWebsite:'',aboutCompany:'',
    experience:'',salary:'',jobLocation:'',lastDate:''
  });
  useEffect(()=>{
    const fetchJobCount= async()=>{
      const userInfo=await Auth.currentAuthenticatedUser({bypassCache:true});
      setUserId(userInfo.attributes.sub);
      const oldJobData= await API.graphql(
        graphqlOperation(
          getJob,{
            id:jobId
          }
        )
      );
      updateJobDetils({
        jobTitle:oldJobData.data.getJob.jobTitle,
        jobName:oldJobData.data.getJob.jobName,
        companyName:oldJobData.data.getJob.companyName,
        companyWebsite:oldJobData.data.getJob.companyWebsite,
        aboutCompany:oldJobData.data.getJob.aboutCompany,
        experience:oldJobData.data.getJob.experience,
        salary:oldJobData.data.getJob.salary,
        jobLocation:oldJobData.data.getJob.jobLocation,
        lastDate:oldJobData.data.getJob.lastDate,

      });
      let discriptionFieldsCount = oldJobData.data.getJob.jobDescription.items.length;
      let newDis=0;
      let values = [];
      while(newDis<discriptionFieldsCount){ 
        values.push({ 
          value: oldJobData.data.getJob.jobDescription.items[newDis].content,
          id: oldJobData.data.getJob.jobDescription.items[newDis].id });
        newDis=newDis+1;
      }
      setDiscriptionFields(values);
      console.log(oldJobData);
      let criteriaFieldsCount = oldJobData.data.getJob.jobCretaria.items.length;
      let newCri=0;
      values = [];
      while(newCri<criteriaFieldsCount){    
        values.push({ 
          value: oldJobData.data.getJob.jobCretaria.items[newCri].content,
          id: oldJobData.data.getJob.jobCretaria.items[newCri].id});
        newCri=newCri+1;
      }
      setCriteriaFields(values);
      let skillsFieldsCount = oldJobData.data.getJob.jobSkills.items.length;
      let newSki=0;
      values=[];
      while(newSki<skillsFieldsCount){ 
        values.push({ 
          value: oldJobData.data.getJob.jobSkills.items[newSki].content,
          id: oldJobData.data.getJob.jobSkills.items[newSki].id });
        newSki=newSki+1;
      }
      setSkillsFields(values)
     }

     fetchJobCount();

  },[]);

  function handleDiscriptionChange(i, event) {
    const values = [...discriptionFields];
    values[i].value = event.target.value;
    setDiscriptionFields(values);
  }


  function handleSkillsChange(i, event) {
    const values = [...skillsFields];
    values[i].value = event.target.value;
    setSkillsFields(values);
  }


  function handleCriteriaChange(i, event) {
    const values = [...criteriaFields];
    values[i].value = event.target.value;
    setCriteriaFields(values);
  }


  function handleChange(evt) {
    const value = evt.target.value;
    updateJobDetils({
      ...jobDetails,
      [evt.target.name]: value
    });
  }
   const createNewJob=async()=>{
     await API.graphql(
       graphqlOperation(
         updateJob,{
           input:{
            id:jobId,
            jobName:jobDetails.jobName,
            jobType:"job",
            jobUserId:userId,
            jobStatus:"created",
            jobTitle:jobDetails.jobTitle,
            companyName:jobDetails.companyName,
            companyWebsite:jobDetails.companyWebsite,
            aboutCompany:jobDetails.aboutCompany,
            experience:jobDetails.experience,
            salary:jobDetails.salary,
            jobLocation:jobDetails.jobLocation,
            lastDate:jobDetails.lastDate
           }
         }
       )
     );
     let lDis =discriptionFields.length;
     let iDis=0;
     while(iDis<lDis){
     await API.graphql(
       graphqlOperation(
         updateJobDescription,{
           input:{
             id:discriptionFields[iDis].id,
             content:discriptionFields[iDis].value
           }
         }
       )
     );
     iDis=iDis+1;
        }
        let lSkil=skillsFields.length;
        let iSkill=0
        while(iSkill<lSkil){
     await API.graphql(
      graphqlOperation(
        updateJobSkill,{
          input:{
            content:skillsFields[iSkill].value,
            id:skillsFields[iSkill].id
          }
        }
      )
    );
    iSkill=iSkill+1;
      }
      let lCri=criteriaFields.length;
      let iCri=0;
      while(iCri<lCri){
    await API.graphql(
      graphqlOperation(
        updateJobCretaria,{
          input:{
            content:criteriaFields[iCri].value,
            id:criteriaFields[iCri].id
          }
        }
      )
    );
    iCri=iCri+1
      }
      alert("Sucessfully updated a job. Your Job will be active within 2 hrs, If not contact us.");
      props.history.push('/viewAllJobs');

        }

    return (


    <div className="formContainer">
    <form >
    <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlhtmlFor="job-title">Job Title</label>
      <input type="text" value={jobDetails.jobTitle} onChange={handleChange} className="form-control" name="jobTitle" id="job-title" placeholder="Enter Job Title" />
    </div>
    <div className="form-group col-md-6">
    <label htmlhtmlFor="job-name">Job Name</label>
      <input type="text" value={jobDetails.jobName} onChange={handleChange} className="form-control" name="jobName" id="job-name" placeholder="Enter Job Name" />
    </div>
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
    <label htmlhtmlFor="company-name">Company Name</label>
      <input type="text" value={jobDetails.companyName} onChange={handleChange} className="form-control" name="companyName" id="job-title" placeholder="Enter Your Company Name" />
    </div>
    <div className="form-group col-md-6">
    <label htmlhtmlFor="company-website">Company Website</label>
      <input type="text" value={jobDetails.companyWebsite} onChange={handleChange} className="form-control" name="companyWebsite" id="job-website" placeholder="Enter Company Official Website" />
    </div>
  </div>
  <div className="form-group">
    <label htmlhtmlFor="about-company">About Company</label>
    <textarea className="form-control" value={jobDetails.aboutCompany} onChange={handleChange} id="about-company" name="aboutCompany" rows="3"></textarea>
  </div>
  <div className="form-row">
  <div className="form-group col-md-6">
    <label htmlhtmlFor="experience">Experience Required</label>
    <input type="text" id="experience" value={jobDetails.experience} onChange={handleChange}  name="experience"className="form-control" placeholder="Enter Experience Required For Job (eg:- 0-1years)" />
    </div>
    <div className="form-group col-md-6">
      <label htmlhtmlFor="salary">Salary</label>
      <input type="text" value={jobDetails.salary} onChange={handleChange} className="form-control" name="salary" id="salary" placeholder="Enter Salary Offered (eg:- 3 LPA )" />
    </div>   
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
    <label htmlhtmlFor="job-location">Job Loaction</label>
      <input type="text" value={jobDetails.jobLocation} onChange={handleChange} className="form-control" name="jobLocation" id="job-location" placeholder="Enter Job Location (for multiple enter Bengluru/Pune )" />
    </div>
    <div className="form-group col-md-6">
    <label htmlhtmlFor="last-date">Last Date To Apply</label>
      <input type="date" value={jobDetails.lastDate} onChange={handleChange} className="form-control" name="lastDate" id="lastDate"  />
    </div>
  </div>
  <div className="form-group">
    <label htmlhtmlFor="job-description">Job Description </label>
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
          </div>
        );
      })}
  </div>
  <div className="form-group">
    <label htmlhtmlFor="desired-skills">Desired Skills  </label>
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
          </div>
        );
      })}
  </div>
  <div className="form-group">
    <label htmlhtmlFor="criteria">Add Criteria </label>

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
          </div>
        );
      })}
  </div>
  <div className="text-center submitButton">
            <a onClick={createNewJob} style={{height:50,width:120,fontFamily:'sans-serif'}} name="addJob" type="button" className="btn btn-primary">Update Job</a>
          </div>
</form>


    </div>


    );
}
export default withRouter(EditJobForm);