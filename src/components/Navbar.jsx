import { Link, useLocation } from 'react-router-dom';


function Navbar() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav navbar ">
    
    <h1>Cynthia Huertas</h1>
    
      <li className="nav-item ms-auto">
        <Link
          to="/About"
          className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Work"
          className={currentPage === '/Work' ? 'nav-link active' : 'nav-link'}
        >
          Work
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact Me
        </Link>
      </li>
    </ul>
  );
}

export default Navbar;
