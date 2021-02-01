import React from 'react';
import CreateJobForm from '../components/CreateJobForm';
import Footer from '../components/Footer';
import Header from '../components/Header';

function CreateJobScreen(){
    return (
        <div>
            <div style={{marginTop:100}}>
            <Header/>
            </div>
            <CreateJobForm/>
            < Footer />
        </div>

    );
}

export default CreateJobScreen;