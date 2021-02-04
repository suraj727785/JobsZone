import { API, Auth, graphqlOperation } from 'aws-amplify';
import React, { useState } from 'react';
import { getUser } from '../graphql/queries';
import './componentStyle.css';
import moment from 'moment';

function ViewProfile(){
  const [user,setUser]=useState([]);
  useState(()=>{
    const getProfile=async()=>{
      try{
        const userInfo = await Auth.currentAuthenticatedUser({bypassCache:true});
        const userData= await API.graphql(
          graphqlOperation(getUser,{id: userInfo.attributes.sub})
         );
         setUser(userData.data.getUser);
         console.log(userData);
        

      }catch(e){
        console.log(e);
      }

    }
    getProfile();

  },[]);
  const yyyy = moment(user.courseCompletion).format('yyyy');
    return (
        <div style={{marginLeft:30}} className="ViewProfile">
            <div className="profileConatiner">
            <div className="tab">
                <h2>Personal Details</h2>
            </div>
            <div style={{marginTop:30}}>
          <h4>{user.firstName} {user.lastName}</h4>
          <h6>{user.Sex} {user.Age}</h6>
          <h6>Email : {user.email}</h6>
          <h6>Mob No. : {user.mobileNo}</h6>
          <h6>Address : {user.address}</h6>
        </div>
        <div className="tab">
                <h2>Academics Details</h2>
            </div>
            <div style={{marginTop:30}}>
          <h6>College Name :{user.collegeName}</h6>
          <h6>Degree : {user.degree}</h6>
          <h6>Major Field Of Study: {user.branch}</h6>
          <h6>Passing Year : {yyyy}</h6>
          <h6>College Address : {user.collegeAddress}</h6>
          <div style={{width:'50%'}} className="text-center submitButton">
            <a href="editProfile" style={{height:50,width:120,fontFamily:'sans-serif',fontSize:18,color:'white'}}  className="btn btn-secondary">Edit</a>
          </div>
        </div>
        </div>    
        </div>

    );
}

export default ViewProfile;