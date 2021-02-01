import React,{useState} from 'react';

function ApplyJobForm(){

    return (


    <div className="formContainer">
    <form>
    <div className="form-row">
    <div className="form-group col-md-6">
      <label for="first-name">First Name</label>
      <input type="text" className="form-control" name="fname" id="first-name" placeholder="Enter First Name" required/>
    </div>
    <div className="form-group col-md-6">
    <label for="last-name">Last Name</label>
      <input type="text" className="form-control" name="lastName" id="last-name" placeholder="Enter Last Name" required/>
    </div>
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
    <label for="email">Email</label>
      <input type="email" className="form-control" name="email" id="email" placeholder="Enter Your Email" required/>
    </div>
    <div className="form-group col-md-6">
    <label for="mobile-no">Mobile No</label>
      <input type="text" className="form-control" name="mobileNo" id="mobile-no" placeholder="Enter Your Mobile No" required/>
    </div>
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="address">Current Address</label>
      <input type="text" className="form-control" name="address" id="address" placeholder="Enter Your Current Address" required/>
    </div>
    <div className="form-group col-md-6">
    <label for="college-name">College Name</label>
      <input type="text" className="form-control" name="collegeName" id="college-name" placeholder="Enter Your College Name" required/>
    </div>
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
    <label for="stream">Stream</label>
      <input type="text" className="form-control" name="stream" id="stream" placeholder="Enter Your Stream" required/>
    </div>
    <div className="form-group col-md-6">
    <label for="course">Course Completion Date</label>
      <input type="date" className="form-control" name="course" id="course" required/>
    </div>
  </div>
  <div className="form-group">
    <label for="resume">Resume</label>
   <input type="file"  className="form-control" name="resume" id="resume" required/>
  </div>
  <div className="form-group">
    <label for="about-company">Why should we hire you?</label>
    <textarea class="form-control" id="about-company" name="aboutCompany" rows="4" 
    placeholder="mention skill and past experience and make you perfect for this job." required></textarea>
  </div>
  <div class="text-center submitButton">
            <button style={{height:50,width:120,fontFamily:'sans-serif'}} name="apply" type="button" class="btn btn-primary">Apply</button>
          </div>
</form>


    </div>


    );
}
export default ApplyJobForm;