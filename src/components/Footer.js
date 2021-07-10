import "./componentStyle.css";
import playstore from "../images/playstore.png";
import appstore from "../images/appstore.png";
import facebook from "../images/facebook.png";
import youtube from "../images/youtube.png";
import linkedIn from "../images/linkedIn.jpg";

function Footer() {
  return (
    <div>
      <section className="links" style={{ marginBottom: 0 }}>
        <div className="links-inner">
          <ul>
            <li>
              <h3>Useful Links</h3>
            </li>
            <li>
              <a href="somepage">Privacy Policy</a>
            </li>
            <li>
              <a href="somepage">Terms Of Use</a>
            </li>
            <li>
              <a href="somepage">Return Policy</a>
            </li>
          </ul>
          <ul>
            <li>
              <h3>Company</h3>
            </li>
            <li>
              <a href="somepage">About Us</a>
            </li>
            <li>
              <a href="somepage">Contact US</a>
            </li>
            <li>
              <a href="somepage">Locate Us</a>
            </li>
          </ul>
          <ul>
            <li>
              <h3>Follow Us</h3>
            </li>
            <li>
              <a href="somepage">
                <img style={{ height: 26 }} src={facebook} alt="Facebook" />{" "}
                Facebook
              </a>
            </li>
            <li>
              <a href="somepage">
                <img style={{ height: 26 }} src={linkedIn} alt="Linkedin" />{" "}
                Linkedin
              </a>
            </li>
            <li>
              <a href="somepage">
                <img style={{ height: 26 }} src={youtube} alt="Youtube" />{" "}
                Youtube
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <h3>Download App</h3>
            </li>
            <li>
              <img className="footer-image" src={playstore} alt="" />{" "}
            </li>
            <li style={{ marginTop: 15 }}>
              <img className="footer-image" src={appstore} alt="" />{" "}
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Footer;
