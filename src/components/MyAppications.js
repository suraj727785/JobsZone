import React from 'react';

function myAppication(){
    return (
        <div>
             <table class="table table-bordered table-hover">
                <thead>
                     <tr>
                        <th>Name</th>
                        <th>College</th>
                        <th>Email</th>
                        <th>Mobile No.</th>
                        <th>Applied Date</th>
                        <th>View Resume</th>
                    </tr>   
                </thead>
                <tbody>
                    {jobApplicants.map(jobApplicants=>
                                <tr>
                                    <td>{jobApplicants.user.firstName} {jobApplicants.user.lastName}</td>
                                    <td>{jobApplicants.user.collegeName}</td>
                                    <td>{jobApplicants.user.email}</td>
                                    <td>{jobApplicants.user.mobileNo}</td>
                                    <td>{moment(jobApplicants.createdAt).format('ll')}</td>
                                    <td><Link onClick={() =>{getResumeUrl(jobApplicants.user.resumeFile)}} style={{color:'black'}}>View</Link>
                                    </td>
                                </tr>
                        )}
                </tbody>
            </table>
         
        </div>

    );
}

export default myAppication;