import { Link, useLocation } from 'react-router-dom';
import gitHubLogo from '../assets/gitHubLogo.jpg'
import linkedInLogo from '../assets/linkedInLogo.jpg'


function Navbar() {
  const currentPage = useLocation().pathname;

  const linkStyle = {
    color: 'white',
    textDecoration: 'none', 
  };

  const activeLinkStyle = {
    color: 'white',
    borderBottom: '2px solid white',
  };

  const hoverLinkStyle = {
    color: 'red' 
  };

  return (
    <>
    <ul className="nav navbar">
      <h1>Cynthia Huertas</h1>
      <li className="nav-item ms-auto">
        <Link
          to="/About"
          className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
          style={currentPage === '/About' ? activeLinkStyle : linkStyle}
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Work"
          className={currentPage === '/Work' ? 'nav-link active' : 'nav-link'}
          style={currentPage === '/Work' ? activeLinkStyle : linkStyle}
        >
          Work
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
          style={currentPage === '/Contact' ? activeLinkStyle : linkStyle}
        >
          Contact Me
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Resume"
          className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
          style={currentPage === '/Resume' ? activeLinkStyle : linkStyle}
        >
          Resume
        </Link>
      </li>
      
    </ul>
    <nav className="row navbar ">
  <div className="container  d-flex justify-content-end">
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
export default Navbar;
