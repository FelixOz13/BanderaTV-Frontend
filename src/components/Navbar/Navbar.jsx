import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import Dropdown from './Dropdown';
import { FaBars, FaTimes, FaHome } from "react-icons/fa";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const handleDropdown = (isEntering) => {
    if (window.innerWidth >= 960) {
      setDropdown(isEntering);
    }
  };

  return (
    <>
    
      <nav className='navbar'>
      
        <Link to='/' onClick={closeMobileMenu}>
          <img className="navbar-logo" src="images/mobileregi6.jpg" alt="Website Logo" />
        </Link>
        <Link to='/categories' style={{color:'white'}}>
        <FaHome />
      </Link>
        <div className='menu-icon' onClick={handleClick} role="button" aria-label="Toggle Menu">
          {click ? <FaTimes style={{ color: 'white' }} /> : <FaBars style={{ color: 'white' }} />}
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/categories' className='nav-links' onClick={closeMobileMenu}>
              Inicio
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={() => handleDropdown(true)}
            onMouseLeave={() => handleDropdown(false)}
          >
            <Link
              to='/services'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Servicios <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
              Acerca
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/bibliography' className='nav-links' onClick={closeMobileMenu}>
              Bibliografía
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
