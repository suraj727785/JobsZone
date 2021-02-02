import React from 'react';
import FirstRegister from '../components/FirstRegister';
import Footer from '../components/Footer';
import Header from '../components/Header';

function FirstRegisterScreen(){
    return (
        <div>
            <Header/>
            <div  style={{marginTop:100,textAlign:'center',color:'rebeccapurple'}}>
            <h1 >Please Fill the Details..</h1>
            </div>
            <FirstRegister />
            < Footer />
        </div>

    );
}

export default FirstRegisterScreen;