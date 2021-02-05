import './componentStyle.css';
import { FaMapMarkerAlt,FaUserAlt} from 'react-icons/fa';
import { GiTakeMyMoney } from 'react-icons/gi';
import { MdWork } from 'react-icons/md';
import {Link} from 'react-router-dom';
import moment from 'moment';

function InternshipCard(props){
    const jobID=props.jobID;
    
    return(
        <div style={{position:'relative',margin:'1rem'}}>
            <Link style={{color:'black'}} to={{
                pathname: `/internship${jobID}`
                }}>
        <div className="card card-1">
                <div className="company">
                <div className="jobProfile">
                    <h3 style={{marginTop:10}}>{props.companyName}</h3>
                    <p>Appy before <b>{moment(props.lastDate).format('ll')}</b></p>
                </div>
                </div>
                <div>
                  <div className="jobDetail row">
                  <FaUserAlt size={46} color='grey'/>
                  <div className="JobDis col">
                  <h6>Looking For</h6>
                  <p>{props.role}</p>
                  </div>
                  <FaMapMarkerAlt size={46} color='grey'/>
                  <div className="col">
                  <h6>Location</h6>
                  <p>{props.location}</p>
                  </div>
                  </div>
                  <div className="jobDetail row">
                  <GiTakeMyMoney size={46} color='grey'/>
                  <div className="col">
                  <h6>Salary</h6>
                  <p>{props.salary}</p>
                  </div>
                  <MdWork size={46} color='grey'/>
                  <div className="col">
                  <h6>Duration</h6>
                  <p>{props.duration}</p>
                  </div>
                  </div>
                </div>
            </div>
            </Link>
        </div>
    );
}

export default InternshipCard;