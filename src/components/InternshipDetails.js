import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import './componentStyle.css';


function InternshipDetails(){
    return (
        <div className="jobContainer">
            <h1>Job Title</h1>
            <h4>Job Name</h4>
            <p>Company Name  <a href='/'><FiExternalLink size={18}/></a></p>
            <ul className="jobTopList" >
                <li>
                    <ul>
                        <li style={{color:'grey'}}>Salary</li>
                        <li><b>20LPA</b></li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li style={{color:'grey'}}>Duration</li>
                        <li><b>2 months</b></li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li style={{color:'grey'}}>Job Location</li>
                        <li><b>Benguluru</b></li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li style={{color:'grey'}}>Apply By</li>
                        <li><b>31st Jan</b></li>
                    </ul>
                </li>
            </ul>
            <h4 style={{marginTop:30}}>About Company  <a href='/'><FiExternalLink size={22}/></a></h4>
            <p style={{marginTop:15}}>Anar is a free networking platform for 60 million+ SMEs in India where they can connect, share, discover products, chat, and build a long-lasting business network. Anar was founded by 2 batchmates of IIM Lucknow, Nishank Jain, who has also worked with Amazon, and Sanjay Bhat, a BITSian, who has experience working with Paytm. We are quite lucky to have been backed by funding from Rohit Bansal and Kunal Bahl of Snapdeal, and from First Cheque. So far, we have had 100k+ downloads post the launch.</p>
            <h5>Job Description</h5>
            <ul>
                <li>Promote Anar app through various social media platforms, organically</li>
                <li>Plan and make creative concepts such as posts, banners, videos, etc. for social media</li>
                <li>Handle media campaigns</li>
                <li>Plan and create content with the potential to go viral</li>
                <li>Work on explaining the concept of Anar to potential customers through personal</li>
                <li>Interact with people on various social media platforms</li>
            </ul>
            <h5>Desired Skills</h5>
            <ul>
                <li>Hands on experience in native iOS development for at least 3 years.</li>
                <li>Hands on experience in React, React Native, Redux, ES7, Axios, ECMAScript (OOJS) and JSX, Native bridging & HTML5.</li>
                <li>Experience with offline storage, threading, and performance tuning.</li>
                <li>Excellent HTML, CSS knowledge.</li>
                <li>Hands-on Redux/Flux Architecture.</li>
                <li>Hands on experience on Android in creating Hybrid apps is an added advantage.</li>
            </ul>
            <h5>Applying Critaria</h5>
            <ul>
                <li>Student those who graduate in 2020 or will be graduate in 2021 can only apply </li>
                
            </ul>
          <h5>Perks</h5>
          <ul className="perks">
              <li>Certificate</li>
              <li>Letter of recommendation</li>
          </ul>
          <h5>No of Position.</h5>
          <p>30</p>
          <div class="text-center submitButton">
            <button style={{height:50,width:120,fontFamily:'sans-serif'}} type="button" class="btn btn-primary">Apply Now</button>
          </div>
              
            
        </div>

    );
}

export default InternshipDetails;