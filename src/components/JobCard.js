import './componentStyle.css';
import { FaMapMarkerAlt,FaUserAlt} from 'react-icons/fa';
import { GiTakeMyMoney } from 'react-icons/gi';
import { MdWork } from 'react-icons/md';

function JobCard(props){
    return(
        <div data-link="job" style={{position:'relative',margin:'1rem'}}>
            <div className="card card-1">
                <div className="company">
                <div className="jobProfile">
                    <h3 style={{marginTop:10}}>{props.companyName}</h3>
                    <p>Appy before<b>{props.lastDate}</b></p>
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
                  <h6>Experience</h6>
                  <p>{props.experience}</p>
                  </div>
                  </div>
                </div>
            </div>
        </div>
    );
}

export default JobCard;