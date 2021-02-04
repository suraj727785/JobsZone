import logo from '../images/logo.png';
import './componentStyle.css';
import { AmplifySignOut } from '@aws-amplify/ui-react';

function Header() {
  return (
    <div className="navigation-wrap bg-light start-header start-style">
		<div className="container">
			<div className="row">
				<div className="col-12">
					<nav className="navbar navbar-expand-md navbar-light">
					
						<a className="navbar-brand" href="/" ><img src={logo} alt="" /></a>	
						
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						
						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav ml-auto py-4 py-md-0">
              <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
									<a className="nav-link" href="/">Jobs</a>
								</li>
                <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
									<a className="nav-link" href="/">Freshers Job</a>
								</li>
								<li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
									<a className="nav-link" href="/">Internship</a>
								</li>
								<li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
									<a className="nav-link" href="/profile">Profile</a>
								</li>
								<li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
								<AmplifySignOut />
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
