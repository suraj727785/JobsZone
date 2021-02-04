import React from 'react';
import EditProfile from '../components/EditProfile';
import Footer from '../components/Footer';
import Header from '../components/Header';

function EditProfileScreen(){
    return (
        <div>
            <Header/>
            <div  style={{marginTop:100,textAlign:'center',color:'rebeccapurple'}}>
            <h1 >Check and edit your profile!</h1>
            </div>
            <EditProfile />
            < Footer />
        </div>

    );
}

export default EditProfileScreen;