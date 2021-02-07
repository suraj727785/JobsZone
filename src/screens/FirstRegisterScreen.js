import { API, Auth, graphqlOperation } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import CompanyRegister from '../components/CompanyRegister';
import FirstRegister from '../components/FirstRegister';
import { listUsers } from '../graphql/queries';

function FirstRegisterScreen(props){
    useEffect(()=>{
        try{
            const fetchUser=async()=>{
                const userInfo = await Auth.currentAuthenticatedUser({bypassCache:true});
                const userData= await API.graphql(
                graphqlOperation(listUsers,
                    {
                        filter:{
                            id:{contains:userInfo.attributes.sub}
                        }
                    }
            ));
            if(userData.data.listUsers.items.length!==0){
                props.history.push('/viewAllJobs');

             }
            }
            fetchUser();

        }catch(e){
            console.log(e);
        }
    })
    const[isCompanyRegister,setIsCompanyRegister] = useState(false);
    return (
        <div>
            <div  style={{marginTop:100,textAlign:'center',color:'rebeccapurple'}}>
            <h1 >Please Fill the Details..</h1>
            {
                isCompanyRegister?  <h5 style={{color:'red'}}>Want to apply for a job? <Link onClick={()=>{setIsCompanyRegister(false)}}>Register Here..</Link></h5>:
                <h5 style={{color:'red'}}>Want to create a job? <Link onClick={()=>{setIsCompanyRegister(true)}}>Register Here..</Link></h5>
              
             }
                </div>
          {isCompanyRegister?<CompanyRegister />:<FirstRegister />}
        </div>

    );
}

export default withRouter(FirstRegisterScreen);