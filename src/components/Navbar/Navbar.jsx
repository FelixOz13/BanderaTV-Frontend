import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import Dropdown from './Dropdown';
import Dropdown2 from './Dropdown2';
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const navRef = useRef(null);

  // Toggle mobile menu open/close
  const handleClick = () => setClick(!click);

  // Close mobile menu when a link is clicked
  const closeMobileMenu = () => setClick(false);

  // Handle dropdown visibility based on hover for desktop
  const handleDropdown1 = (isEntering) => {
    if (window.innerWidth >= 960) {
      setDropdown(isEntering);
    }
  };

  const handleDropdown2 = (isEntering) => {
    if (window.innerWidth >= 960) {
      setDropdown2(isEntering);
    }
  };

  // Close the mobile menu when clicking outside the navbar
  const handleClickOutside = (e) => {
    if (navRef.current && !navRef.current.contains(e.target)) {
      setClick(false);
    }
  };

  useEffect(() => {
    if (click) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [click]);

  return (
    <>
      <nav className='navbar' ref={navRef}>
        <Link to='/categories' onClick={closeMobileMenu}>
          <h1 className="navbar-logo">🏳 Bandera Musical®️🎸</h1>
        </Link>
        <div 
          className='menu-icon' 
          onClick={handleClick} 
          onKeyPress={(e) => { if (e.key === 'Enter') handleClick() }} 
          role="button" 
          tabIndex="0" 
          aria-label="Toggle Menu"
        >
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
            onMouseEnter={() => handleDropdown1(true)}
            onMouseLeave={() => handleDropdown1(false)}
          >
            <Link to='/events' className='nav-links' onClick={closeMobileMenu}>
              Eventos <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown2 />}
          </li>
          <li
            className='nav-item'
            onMouseEnter={() => handleDropdown2(true)}
            onMouseLeave={() => handleDropdown2(false)}
          >
            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
              Servicios <i className='fas fa-caret-down' />
            </Link>
            {dropdown2 && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
              Acerca
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
