import React, { useEffect, useState } from 'react';
import './authStyle.css';
import logo from '../images/logo.png';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import {listJobs, listUsers} from '../graphql/queries';
import {Link,withRouter} from 'react-router-dom';
import moment from 'moment';
import { deleteJob, deleteUser } from '../graphql/mutations';

function ViewAllCompaniesScreen(props){

  const [users,setUsers]=useState([]);
  const [admins,setAdmins]=useState([]);
  useEffect(()=>{
      try{
        const getUserList= async()=>{
        const userlist=await API.graphql(
          graphqlOperation(
            listUsers,{
                filter:{
                  userRole: {contains: "jobProvider"},
                }
            }   
        ));
        const adminlist=await API.graphql(
            graphqlOperation(
              listUsers,{
                  filter:{
                    userRole: {contains: "Admin"},
                  }
              }   
          ));
        setUsers(userlist.data.listUsers.items);
        setAdmins(adminlist.data.listUsers.items)
        }
      
        getUserList();
      }
      catch(e){
        console.log(e)
  
      }
  
    },[]);

    async function deleteThisUser (userId){
      await API.graphql(
        graphqlOperation(
          deleteUser,{
            input:{
              id:userId
            }
          }
        )
      );
      alert("User Deleted Sucessfully");
      window.location.reload();
    }; 

    return (
        <div class="admin">
        <header class="admin__header">
          <a href="/viewAllJobs"><img style={{height:120,width:250}} className="logo" src={logo} alt="" /></a>
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
        <a class="menu__link" href="admin">Dashboard</a>
      </li>
      <li class="menu__item">
        <a class="menu__link" href="approveJobs">View all jobs requests</a>
      </li>
      <li class="menu__item">
        <a class="menu__link" href="adminJobs">View jobs</a>
      </li>
      <li class="menu__item">
        <a class="menu__link" href="createJob">Create a new Job</a>
      </li>
      <li class="menu__item">
        <a class="menu__link" href="adminInternship">View internships</a>
      </li>
      <li class="menu__item">
        <a class="menu__link" href="createInternship">Create a new internship</a>
      </li>
      <li class="menu__item">
        <a class="menu__link" href="viewAllUsers">View All users</a>
      </li>
      <li class="menu__item">
        <a class="menu__link" href="viewAllCompanies">View All Companies</a>
      </li>
    </ul>
  </nav>
        <main class="admin__main">
        <h2 style={{color:'rebeccapurple'}}>All Jobs </h2>
          <p style={{color:'rebeccapurple'}}>Posted By Companies</p>
          <div class="dashboard">
          <table class="table table-bordered table-hover">
                <thead>
                     <tr>
                        <th>Name</th>
                        <th>Company Name</th>
                        <th>Designation</th>
                        <th>Office Address</th>
                        <th>Website</th>
                        <th>Edit Details</th>
                        <th>Delete</th>
                    </tr>   
                </thead>
                <tbody>
                    {users.map(users=>
                                <tr>
                                    <td><Link style={{color:'black'}} to={{
                                            pathname: `/job${users.id}`
                                            }}>{users.firstName} {users.lastName}</Link></td>
                                    <td>{users.companyName}</td>
                                    <td>{users.userPost}</td>
                                    <td>{users.officeAddress}</td>
                                    <td>{users.companyWebsite}</td>
                                    <td><Link style={{color:'black'}} to={{
                                            pathname: `/editJob${users.id}`
                                            }}>Edit</Link>
                                    </td>
                                    <td><Link onClick={() =>{deleteThisUser(users.id)}} style={{color:'black'}}>Remove</Link>
                                    </td>
                                </tr>
                        )}
                         {admins.map(admins=>
                                <tr>
                                    <td><Link style={{color:'black'}} to={{
                                            pathname: `/job${admins.id}`
                                            }}>{admins.firstName} {admins.lastName}</Link></td>
                                    <td>{admins.companyName}</td>
                                    <td>{admins.userPost}</td>
                                    <td>{admins.officeAddress}</td>
                                    <td><a style={{color:'black'}} href={admins.companyWebsite}
                                        >{admins.companyWebsite}</a></td>
                                    <td><Link style={{color:'black'}} to={{
                                            pathname: `/editJob${admins.id}`
                                            }}>Edit</Link>
                                    </td>
                                    <td><Link onClick={() =>{deleteThisUser(admins.id)}} style={{color:'black'}}>Remove</Link>
                                    </td>
                                </tr>
                        )}
                </tbody>
            </table>
         
         
          </div>
        </main>
        <footer class="admin__footer">
          <span>
            &copy; 2021 JobsZone
          </span>
        </footer>
      </div>

    );
}

export default withRouter(ViewAllCompaniesScreen);