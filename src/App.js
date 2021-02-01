import React from 'react';
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
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
import ProfileScreen from './screens/ProfileScreen';
Amplify.configure(awsExports);

function App(){
    return(
        <main>
            <Switch>
                <Route path="/" component={JobScreen} exact />
                <Route path="/job" component={JobDetailsScreen} />
                <Route path="/internship" component={InternshipDetailsScreen} />
                <Route path="/search" component={Search} />
                <Route path="/somepage" component={CreateJobScreen} />
                <Route path="/other" component={CreateInternshipScreen} />
                <Route path="/apply" component={ApplyJobScreen} />
                <Route path="/myJobs" component={MyJobDetailsScreen} />
                <Route path="/profile" component={ProfileScreen} />
            </Switch>
        </main>
        

    );
}

export default App;