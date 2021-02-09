import { API, Auth, graphqlOperation,Storage } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { listJobApplicants } from '../graphql/queries';
import moment from 'moment';

function MyAppications(){
    const [jobApplicants,setJobApplicants]=useState([]);
    useEffect(()=>{
        try{
            const fetchAppliedJobs=async()=>{
                const userInfo=await Auth.currentAuthenticatedUser({bypassCache:true});
                const ApplicantData=await API.graphql(
                    graphqlOperation(
                        listJobApplicants,{
                            filter:{
                                userID: {contains: userInfo.attributes.sub}
                              }
                        }
                    )
                );
                console.log(ApplicantData.data.listJobApplicants.items);
                setJobApplicants(ApplicantData.data.listJobApplicants.items);

        }

        fetchAppliedJobs();
    }catch(e){
        console.log(e);
    }

    },[]);
    const getResumeUrl=async(resumeFile)=>{
        const resumeUrl=await Storage.get(resumeFile);
        console.log(resumeUrl);
        window.open(resumeUrl, '_blank', 'noopener,noreferrer')
        
      }
    return (
        <div style={{width:'90%',margin:'auto'}}>
             <table className="table table-borderless table-hover ">
                <thead style={{backgroundColor:'#f8f9fa'}}>
                     <tr>
                        <th>Job Name</th>
                        <th>Company Name</th>
                        <th>Employment Type</th>
                        <th>Applied On</th>
                        <th>Current Status</th>
                        <th>View Resume</th>
                    </tr>   
                </thead>
                <tbody>
                    {jobApplicants.map(jobApplicants=>
                                <tr>
                                    <td>{jobApplicants.job.jobName}</td>
                                    <td>{jobApplicants.job.companyName}</td>
                                    <td>{jobApplicants.job.jobType}</td>
                                    <td>{moment(jobApplicants.createdAt).format('ll')}</td>
                                    <td>In-Touch</td>
                                    <td><Link onClick={() =>{getResumeUrl(jobApplicants.user.resumeFile)}} style={{color:'black'}}>View</Link>
                                    </td>
                                </tr>
                        )}
                </tbody>
            </table>
         
        </div>

    );
}

export default MyAppications;