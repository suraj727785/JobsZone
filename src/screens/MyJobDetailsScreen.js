import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MyJobDetails from '../components/MyJobDetails';
import './screensStyle.css';


function MyJobDetailsScreen(){
    return (
        <div>
            <Header/>
            <MyJobDetails/>
            < Footer />
        </div>
    );
}

export default MyJobDetailsScreen;