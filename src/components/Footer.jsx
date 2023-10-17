import { Link, useLocation } from 'react-router-dom';
import gitHubLogo from '../assets/gitHubLogo.jpg'
import linkedInLogo from '../assets/linkedInLogo.jpg'

function Footer() {
    return (
   <>
   <nav className="row navbar bg-body-tertiary mx-2">
  <div className="container  d-flex justify-content-center">
    <a className="navbar-brand" href="https://github.com/CyndiCodes">
      <img src={gitHubLogo} alt="" width="30" height="24"></img>
    </a>
   
    <a className="navbar-brand mx-4" href="https://www.linkedin.com/in/cyndi-codes-090498288/">
      <img src={linkedInLogo} alt="" width="30" height="24"></img>
    </a>
  
  </div>
</nav>
   </>
  );
}

export default Footer;
