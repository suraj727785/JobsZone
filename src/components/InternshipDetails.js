import { API, graphqlOperation } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import { getJob } from '../graphql/queries';
import moment from 'moment';



function InternshipDetails(){
    let { jobId } = useParams();
  const [jobDetails,setJobDetails]=useState([]);
  const [jobDescription,setJobDescription]=useState([]);
  const [desiredSkill,setDesiredSkill]=useState([]);
  const [criteria,setCriteria]=useState([]);
  const [perks,setPerks]=useState([]);
  useEffect(()=>{
    try{
      const getJobDetails=async()=>{
        const jobData=await API.graphql(
          graphqlOperation(
            getJob,{
            id:jobId
            }
          )
        );
        
      setJobDetails(jobData.data.getJob);
      setJobDescription(jobData.data.getJob.jobDescription.items);
      setDesiredSkill(jobData.data.getJob.jobSkills.items);
      setCriteria(jobData.data.getJob.jobCretaria.items);
      setPerks(jobData.data.getJob.perks.items);
      

      }

      getJobDetails();

    }catch(e){
      console.log(e)
    }

  },[]);
    return (
        <div className="jobContainer">
            <h1>{jobDetails.jobTitle}</h1>
            <h4>{jobDetails.jobName}</h4>
            <p>{jobDetails.companyName} <a href={`${jobDetails.companyWebsite}`}><FiExternalLink size={18}/></a></p>
            <ul className="jobTopList" >
                <li>
                    <ul>
                        <li style={{color:'grey'}}>Stipend</li>
                        <li><b>{jobDetails.salary}</b></li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li style={{color:'grey'}}>Duration</li>
                        <li><b>{jobDetails.duration}</b></li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li style={{color:'grey'}}>Job Location</li>
                        <li><b>{jobDetails.jobLocation}</b></li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li style={{color:'grey'}}>Apply By</li>
                        <li><b>{moment(jobDetails.lastDate).format('ll')}</b></li>
                    </ul>
                </li>
            </ul>
            <h4 style={{marginTop:30}}>About Company<a href={`${jobDetails.comapanyWebsite}`}><FiExternalLink size={22}/></a></h4>
            <p style={{marginTop:15}}>{jobDetails.aboutCompany}</p>
            <h5>Job Description</h5>
            <ul>
                {jobDescription.map(jobDescription => <li>{jobDescription.content}</li>)}
            </ul>
            <h5>Desired Skills</h5>
            <ul>
            {desiredSkill.map(desiredSkill => <li>{desiredSkill.content}</li>)}
            </ul>
            <h5>Applying Critaria</h5>
            <ul>
            {criteria.map(criteria => <li>{criteria.content}</li>)}    
            </ul>
          <h5>Perks</h5>
          <ul className="perks">
            {perks.map(perks => <li>{perks.content}</li>)}
          </ul>
          <h5>No of Position.</h5>
          <p>{jobDetails.noOfPosition}</p>
          <div className="text-center submitButton">
          <a href={`apply${jobId}`} style={{height:50,width:120,fontFamily:'sans-serif',fontSize:18,color:'white'}}  className="btn btn-primary">Apply Now</a>
          </div>
              
            
        </div>

    );
}

export default InternshipDetails;