import React from 'react';
import './componentStyle.css';

function ViewProfile(){
    return (
        <div style={{marginLeft:30}} className="ViewProfile">
            <div className="profileConatiner">
            <div class="tab">
                <h2>Personal Details</h2>
            </div>
            <div style={{marginTop:30}}>
          <h4>Suraj Kumar</h4>
          <h6>M 20</h6>
          <h6>Email : surajkr727785@gmail.com</h6>
          <h6>Mob No. : 9162741700</h6>
          <h6>Address : Kochi, India</h6>
        </div>
        <div class="tab">
                <h2>Academics Details</h2>
            </div>
            <div style={{marginTop:30}}>
          <h6>College Name : School Of Engineering, Cochin University of Science And Technology</h6>
          <h6>Degree : B.Tech</h6>
          <h6>Major Field Of Study: Information Technology</h6>
          <h6>Passing Year : 2022</h6>
          <h6>College Address : Ernakulam, Kochi</h6>
          <div style={{width:'50%'}} class="text-center submitButton">
            <a href="apply" style={{height:50,width:120,fontFamily:'sans-serif',fontSize:18,color:'white'}}  class="btn btn-secondary">Edit</a>
          </div>
        </div>
        </div>    
        </div>

    );
}

export default ViewProfile;