import { Link, useLocation } from 'react-router-dom';
import gitHubLogo from '../assets/gitHubLogo.jpg'
import linkedInLogo from '../assets/linkedInLogo.jpg' 
import '../App.css';

function Navbar() {
  const currentPage = useLocation().pathname;
  const activeLinkStyle = {
    color: 'white',
    borderBottom: '2px solid white',
  };
  const linkStyle = {
    color: 'white',
    textDecoration: 'none', 
  };

  return (
    <>
    
    
    <ul className="nav navbar glow-text">
    
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
  

   </>
  );
}

export default Navbar;
