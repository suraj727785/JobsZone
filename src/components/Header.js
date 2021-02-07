import { API, Auth, graphqlOperation } from 'aws-amplify';
import { useEffect, useState } from 'react';
import { getUser } from '../graphql/queries';
import logo from '../images/logo.png';
import './componentStyle.css';

function Header() {
	const [userRole,setUserRole]=useState('');
	useEffect(()=>{
		try{
			const getUserRole=async()=>{
				const userInfo=await Auth.currentAuthenticatedUser({bypassCache:true});
				const userData=await API.graphql(
					graphqlOperation(
						getUser,{
							id:userInfo.attributes.sub
						}
					)
				);
				setUserRole(userData.data.getUser.userRole);

		}
		getUserRole();
	}catch(e){
		console.log(e);
	}

	},[]);
	const signOut = async()=>{
		try {
			await Auth.signOut();
		} catch (error) {
			console.log('error signing out: ', error);
		}
	}
  return (
    <div className="navigation-wrap bg-light start-header start-style">
		<div className="container">
			<div className="row">
				<div className="col-12">
					<nav className="navbar navbar-expand-md navbar-light">
					
						<a className="navbar-brand" href="/viewAllJobs" ><img src={logo} alt="" /></a>	
						
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						
						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav ml-auto py-4 py-md-0">
              <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
									<a className="nav-link" href="/viewAllJobs">Jobs</a>
								</li>
								<li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
									<a className="nav-link" href="internship">Internship</a>
								</li>
								<li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
									<a className="nav-link" href="/profile">Profile</a>
								</li>
								{ userRole==="Admin" &&
								<li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
									<a className="nav-link" href="/company">Admin</a>
								</li>
                                 }
								 {userRole==="JobSeeker" &&
								 <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
								 <a className="nav-link" href="/myAppication">My Applications</a>
							 </li>
								 }
								 {userRole==="JobProvider" &&
								 <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
								 <a className="nav-link" href="/company">Manage Jobs</a>
							 </li>
								 }
								<li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
								<a onClick={signOut} href="/" className="nav-link">Logout</a>
								</li>
							</ul>
						</div>
						
					</nav>		
				</div>
			</div>
		</div>
	</div>
  );
}

export default Header;
