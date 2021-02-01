import React from 'react';
import ApplyJobForm from '../components/ApplyJobForm';
import Footer from '../components/Footer';
import Header from '../components/Header';

function ApplyJobScreen(){
    return (
        <div>
            <div style={{marginTop:100}}>
            <Header/>
            </div>
            <ApplyJobForm />
            < Footer />
        </div>

    );
}

export default ApplyJobScreen;