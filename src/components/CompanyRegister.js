import { API, Auth, graphqlOperation } from 'aws-amplify';
import React,{useEffect, useState} from 'react';
import {createUser} from '../graphql/mutations';
import { withRouter } from 'react-router-dom';

    const CompanyRegister =(props)=>{
    const[formState,updateFormState]=useState({
      fname:'',lname:'',email:'',mobileNo:'',address:'',
      age:20,sex:'',companyName:'',userPost:'',companyWebsite:'',
      officeAddress:''

    });
    const[userId,setUserId]=useState('');

    function handleChange(evt) {
      const value = evt.target.value;
      updateFormState({
        ...formState,
        [evt.target.name]: value
      });
    }
 
   useEffect(()=>{
       try{
       const completeRegistration = async()=>{
        const userInfo = await Auth.currentAuthenticatedUser({bypassCache:true});
        updateFormState({ email: userInfo.attributes.email });
        updateFormState({ mobileNo: userInfo.attributes.phone_number });
        setUserId(userInfo.attributes.sub)
       }

       completeRegistration();
    }catch(e){
        console.log(e);
    }

   },[]);
   const submitForm = async()=>{
    await API.graphql(
      graphqlOperation(
        createUser,
          {
            input:{
              id:`${userId}`,
              firstName:formState.fname,
              lastName :formState.lname,
              age:formState.age,
              sex:formState.sex,
              email:formState.email,
              mobileNo:formState.mobileNo,
              address:formState.address,
              companyName:formState.companyName,
              companyWebsite:formState.companyWebsite,
              userPost:formState.userPost,
              officeAddress:formState.officeAddress
            }

          }
      ));
      alert("Registration Sucessfull");
      props.history.push('/viewAllJobs');
  }

    return (


    <div className="formContainer">
    <form >
    <div className="form-row">
    <div className="form-group col-md-6">
      <label for="first-name">First Name</label>
      <input type="text" value={formState.fname} onChange={handleChange} className="form-control" name="fname"  placeholder="Enter First Name" required/>
    </div>
    <div className="form-group col-md-6">
    <label for="last-name">Last Name</label>
      <input type="text" value={formState.lname} onChange={handleChange} className="form-control" name="lname"  placeholder="Enter Last Name" required/>
    </div>
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
    <label for="email">Email</label>
      <input type="email" value={formState.email} onChange={handleChange} className="form-control" name="email"  placeholder="Enter Your Email" required/>
    </div>
    <div className="form-group col-md-6">
    <label for="mobile-no">Mobile No</label>
      <input type="text" value={formState.mobileNo}  onChange={handleChange} className="form-control" name="mobileNo"  placeholder="Enter Your Mobile No" required/>
    </div>
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
    <label for="age">Age</label>
      <input type="number" value={formState.age} onChange={handleChange} className="form-control" name="age"  placeholder="Enter Your Age" required/>
    </div>
    <div className="form-group col-md-6">
    <label for="sex">Gender</label>
    <select  value={formState.sex}  onChange={handleChange} className="form-control" name="sex" required>
     <option value=''>Select Your Gender</option>
      <option value='M'>Male</option>
      <option value='F'>Female</option>
      <option value='NB'>Can't prefer to say</option>
      </select>
    </div>
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="address">Current Address</label>
      <input type="text" value={formState.address}  onChange={handleChange} className="form-control" name="address"  placeholder="Enter Your Current Address" required/>
    </div>
    <div className="form-group col-md-6">
    <label for="company-name">Comapny Name</label>
      <input type="text" value={formState.companyName}  onChange={handleChange} className="form-control" name="collegeName"  placeholder="Enter Your Organization Name" required/>
    </div>
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
    <label for="userPost">Your Designation</label>
      <input type="text" value={formState.userPost} onChange={handleChange} className="form-control" name="userPost"  placeholder="Enter Your Designation in Company" required/>
    </div>
    <div className="form-group col-md-6">
    <label for="stream">Company Website</label>
      <input type="text" value={formState.companyWebsite}  onChange={handleChange} className="form-control" name="companyWebsite" placeholder="Enter Your Company Website" required/>
    </div>
  </div>
   <div className="form-group">
    <label for="officeAddress">Office Address</label>
    <input type="text" value={formState.officeAddress}  onChange={handleChange} className="form-control" name="officeAddress" placeholder="Enter Your Company Website" required/>
   </div>
  <div className="text-center submitButton">
            <button  onClick={submitForm} style={{height:50,width:120,fontFamily:'sans-serif',color:'white',fontSize:20}} name="submit" type="submit" className="btn btn-primary">Submit</button>
          </div>
</form>
    </div>


    );
}
export default CompanyRegister;