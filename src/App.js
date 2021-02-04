import React, { useEffect, useState } from 'react';
import {Route,Switch} from 'react-router-dom';
import Search from './components/Search';
import CreateJobScreen from './screens/CreateJobScreen';
import CreateInternshipScreen from './screens/CreateInternshipScreen';
import InternshipDetailsScreen from './screens/InternshipDetailsScreen';
import JobDetailsScreen from './screens/JobDetailsScreen';
import JobScreen from './screens/JobScreen';
import ApplyJobScreen from './screens/ApplyJobScreen';
import MyJobDetailsScreen from './screens/MyJobDetailsScreen';
import { withAuthenticator} from '@aws-amplify/ui-react';
import Amplify, { API, Auth, graphqlOperation } from "aws-amplify";
import awsExports from "./aws-exports";
import ProfileScreen from './screens/ProfileScreen';
import FirstRegisterScreen from './screens/FirstRegisterScreen';
import {getUser} from './graphql/queries';
import EditProfileScreen from './screens/EditProfileScreen';
Amplify.configure(awsExports);

function App(){
    const [isRegistered,setIsRegister]=useState(false);
    useEffect(()=>{
        const fetchUser= async()=>{
            const userInfo = await Auth.currentAuthenticatedUser({bypassCache:true});
            const userData= await API.graphql(
            graphqlOperation(getUser,{id: userInfo.attributes.sub})
           );
           if(userData.data.getUser){
               setIsRegister(true);
               return;
           }
        }
        fetchUser();

    },[]);
    return(
        <main>
            <Switch>
                <Route path="/" component={isRegistered?JobScreen:FirstRegisterScreen} exact />
                <Route path="/job:jobId" component={JobDetailsScreen} />
                <Route path="/internship" component={InternshipDetailsScreen} />
                <Route path="/search" component={Search} />
                <Route path="/somepage" component={CreateJobScreen} />
                <Route path="/other" component={CreateInternshipScreen} />
                <Route path="/apply:jobId" component={ApplyJobScreen} />
                <Route path="/myJobs" component={MyJobDetailsScreen} />
                <Route path="/profile" component={ProfileScreen} />
                <Route path="/editProfile" component={EditProfileScreen} />
            </Switch>
        </main>
        

    );
}

export default withAuthenticator(App);