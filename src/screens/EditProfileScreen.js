import EditProfile from '../components/EditProfile';
import EditCompanyProfile from '../components/EditCompanyProfile';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import React, { useState } from 'react';
import { getUser } from '../graphql/queries';
import Footer from '../components/Footer';
import Header from '../components/Header';

function EditProfileScreen(){
    
  const [user,setUser]=useState([]);
    useState(()=>{
        const getProfile=async()=>{
          try{
            const userInfo = await Auth.currentAuthenticatedUser({bypassCache:true});
            const userData= await API.graphql(
              graphqlOperation(getUser,{id: userInfo.attributes.sub})
             );
             setUser(userData.data.getUser);   
    
          }catch(e){
            console.log(e);
          }
    
        }
        getProfile();
    
      },[]);
    return (
        <div>
            <Header/>
            <div  style={{marginTop:100,textAlign:'center',color:'rebeccapurple'}}>
            <h1 >Check and edit your profile!</h1>
            </div>{user.userRole==="jobSeeker"?<EditProfile />:<EditCompanyProfile />}
            
            < Footer />
        </div>

    );
}

export default EditProfileScreen;