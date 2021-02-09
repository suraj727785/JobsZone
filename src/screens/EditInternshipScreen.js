import React from 'react';
import EditInternshipForm from '../components/EditInternshipForm';
import Footer from '../components/Footer';
import Header from '../components/Header';

function EditInternshipScreen(){
    return (
        <div>
            <div style={{marginTop:100}}>
            <Header/>
            </div>
            <EditInternshipForm/>
            < Footer />
        </div>

    );
}

export default EditInternshipScreen;