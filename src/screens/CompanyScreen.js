import React from 'react';
import './authStyle.css';
import logo from '../images/logo.png';
import { GiTakeMyMoney } from 'react-icons/gi';

function CompanyScreen(){
    return (
        <div class="admin">
  <header class="admin__header">
    <a href="/"><img style={{height:120,width:250}} className="logo" src={logo} alt="" /></a>
    <div class="toolbar">
      <h3 style={{color:'white'}}>.</h3>
      <a href="#" class="logout">
        Log Out
      </a>
    </div>
  </header>
  <nav class="admin__nav">
    <ul class="menu">
      <li class="menu__item">
        <a class="menu__link" href="company">Dashboard</a>
      </li>
      <li class="menu__item">
        <a class="menu__link" href="viewAllJobs">View jobs</a>
      </li>
      <li class="menu__item">
        <a class="menu__link" href="createJob">Create a new Job</a>
      </li>
      <li class="menu__item">
        <a class="menu__link" href="viewAllInternships">View internships</a>
      </li>
      <li class="menu__item">
        <a class="menu__link" href="createInternship">Create a new internship</a>
      </li>
    </ul>
  </nav>
  <main class="admin__main">
    <h2>Dashboard</h2>
    <div class="dashboard">
      <div class="dashboard__item">
        <div class="admincard">
        <GiTakeMyMoney size={116} color='grey'/>
        <a href="viewAllJobs">
                <div class="panel-footer">
                    <span class="pull-left">View All Jobs</span>
                    <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
                    <div class="clearfix"></div>
                </div>
            </a>
        </div>
      </div>
      <div class="dashboard__item">
        <div class="admincard">
        <GiTakeMyMoney size={116} color='grey'/>
        <a href="viewAllInternships">
                <div class="panel-footer">
                    <span class="pull-left">View All Internship</span>
                    <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
                    <div class="clearfix"></div>
                </div>
            </a>
        </div>
      </div>
      <div class="dashboard__item">
        <div class="admincard">
        <GiTakeMyMoney size={116} color='grey'/>
        <a href="product.php">
                <div class="panel-footer">
                    <span class="pull-left">View All Applicants</span>
                    <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
                    <div class="clearfix"></div>
                </div>
            </a>
        </div>
      </div>
   
    </div>
  </main>
  <footer class="admin__footer">
    <span>
      &copy; 2018 Grid Inc.
    </span>
  </footer>
</div>
   );
}

export default CompanyScreen;