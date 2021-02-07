import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MyAppications from '../components/MyAppications';

function MyApplicationsScreen(){
    return (
        <div>
            <Header/>
            <div style={{marginTop:100}}>
            < MyAppications />
            </div>
            < Footer />
        </div>

    );
}

export default MyApplicationsScreen;