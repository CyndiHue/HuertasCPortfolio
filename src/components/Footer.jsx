import { Link, useLocation } from 'react-router-dom';
import gitHubLogo from '../assets/gitHubLogo.jpg'
import linkedInLogo from '../assets/linkedInLogo.jpg'

function Footer() {
    return (
   <>
     <nav className="d-flex justify-content-center">
      <div className="">
      <a className="" href="https://github.com/CyndiHue">
          <img src={gitHubLogo} alt="" width="30" height="24"></img>
        </a>
      
        <a href="https://www.linkedin.com/in/cyndi-hue">
          <img src={linkedInLogo} alt="" width="30" height="24"></img>
        </a>
      
      </div>
    </nav>
   </>
  );
}

export default Footer;
