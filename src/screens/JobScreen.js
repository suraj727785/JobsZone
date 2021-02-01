import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import JobCard from "../components/JobCard";
import { useMediaQuery } from 'react-responsive';
import './screensStyle.css';
import Search from '../components/Search';


function JobScreen() {
  const isTablet = useMediaQuery({ query: '(max-width: 1100px)' })
  const isMobile = useMediaQuery({
    query: '(max-width: 600px)'
  })
  return (
    <div >
     <Header />
     <div className="LargeSearchContainer" style={{marginTop:100,marginLeft:400}} >
     <Search />
     </div>
     <div className={ (isMobile) ? "JobsSmall" : ((isTablet) ? "JobsMedium" : "JobsLarge")} >
     <JobCard 
     companyName="Goggle"
     lastDate="23 feb 2021"
     role="SDE"
     salary="20 LPA"
     experience=" 0 years"
     location="Bengluru"
     />
     <JobCard 
     companyName="Goggle"
     lastDate="23 feb 2021"
     role="SDE"
     salary="20 LPA"
     experience=" 0 years"
     location="Bengluru"
     />
     <JobCard 
     companyName="Goggle"
     lastDate="23 feb 2021"
     role="SDE"
     salary="20 LPA"
     experience=" 0 years"
     location="Bengluru"
     />
     <JobCard 
     companyName="Goggle"
     lastDate="23 feb 2021"
     role="SDE"
     salary="20 LPA"
     experience=" 0 years"
     location="Bengluru"
     />
     <JobCard 
     companyName="Goggle"
     lastDate="23 feb 2021"
     role="SDE"
     salary="20 LPA"
     experience=" 0 years"
     location="Bengluru"
     />
     </div>
     <Footer />
    </div>
  );
}

export default JobScreen;
