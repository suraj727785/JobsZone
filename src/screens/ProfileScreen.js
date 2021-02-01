import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ViewProfile from '../components/ViewProfile';

function ProfileScreen(){
    return (
        <div>
            <Header/>
            <div style={{marginTop:100}}>
            <ViewProfile/>
            </div>
            
            < Footer />
        </div>

    );
}

export default ProfileScreen;