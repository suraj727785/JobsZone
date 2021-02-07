import React, { useEffect, useState } from 'react';
import {Route,Switch} from 'react-router-dom';
import Search from './components/Search';
import CreateJobScreen from './screens/CreateJobScreen';
import CreateInternshipScreen from './screens/CreateInternshipScreen';
import InternshipDetailsScreen from './screens/InternshipDetailsScreen';
import JobDetailsScreen from './screens/JobDetailsScreen';
import JobScreen from './screens/JobScreen';
import ApplyJobScreen from './screens/ApplyJobScreen';
import { withAuthenticator} from '@aws-amplify/ui-react';
import Amplify, { API, Auth, graphqlOperation } from "aws-amplify";
import awsExports from "./aws-exports";
import ProfileScreen from './screens/ProfileScreen';
import FirstRegisterScreen from './screens/FirstRegisterScreen';
import {getUser, listUsers} from './graphql/queries';
import EditProfileScreen from './screens/EditProfileScreen';
import InternshipScreen from './screens/InternshipScreen';
import CompanyScreen from './screens/CompanyScreen';
import ViewAllJobsScreen from './screens/ViewAllJobsScreen';
import ViewAllInternshipsScreen from './screens/ViewAllInternshipsScreen';
import ViewJobApplicantsScreen from './screens/ViewJobApplicantsScreen';
import MyApplicationsScreen from './screens/MyAppicationsScreen';
import JobSearchScreen from './screens/JobSearchScreen';
Amplify.configure(awsExports);

function App(){

    return(
        <main>
            <Switch>
                <Route path="/" component={FirstRegisterScreen} exact />
                <Route path="/viewAllJobs" component={JobScreen} />
                <Route path="/internship" component={InternshipScreen} />
                <Route path="/job:jobId" component={JobDetailsScreen} />
                <Route path="/internship:jobId" component={InternshipDetailsScreen} />
                <Route path="/search" component={Search} />
                <Route path="/createJob" component={CreateJobScreen} />
                <Route path="/createInternship" component={CreateInternshipScreen} />
                <Route path="/apply:jobId" component={ApplyJobScreen} />
                <Route path="/profile" component={ProfileScreen} />
                <Route path="/editProfile" component={EditProfileScreen} />
                <Route path="/company" component={CompanyScreen} />
                <Route path="/viewAllJobs" component={ViewAllJobsScreen} />
                <Route path="/viewAllInternships" component={ViewAllInternshipsScreen} />
                <Route path="/viewJobApplicants:jobId" component={ViewJobApplicantsScreen} />
                <Route path="/myApplication" component={MyApplicationsScreen} />
                <Route path="/searchJob:searchTerm" component={JobSearchScreen}/>
                
            </Switch>
        </main>
        

    );
}

export default withAuthenticator(App);