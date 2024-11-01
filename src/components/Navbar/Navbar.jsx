<<<<<<< HEAD
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './navbar.css';
import Dropdown from './Dropdown';
import { FaBars, FaTimes, FaSignOutAlt } from 'react-icons/fa';
import { logout, reset } from '../../features/auth/authSlice';
=======
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import Dropdown from './Dropdown';
import Dropdown2 from './Dropdown2';
import { FaBars, FaTimes } from "react-icons/fa";
>>>>>>> 8de4ec8f562bc6272f731b73e6994c561704d092

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
<<<<<<< HEAD
  const { userInfo } = useSelector((state) => state.auth); 
  const dispatch = useDispatch();
  const navigate = useNavigate();
=======
  const [dropdown2, setDropdown2] = useState(false);
  const navRef = useRef(null);
>>>>>>> 8de4ec8f562bc6272f731b73e6994c561704d092

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

<<<<<<< HEAD
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    localStorage.removeItem('user');  // Clear localStorage
    navigate('/');
    closeMobileMenu();
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' onClick={closeMobileMenu}>
          <h1 className="navbar-logo">🏳 BanderaTV®️🎸</h1>
        </Link>
        <div className='menu-icon' onClick={handleClick} role="button" aria-label="Toggle Menu">
=======
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
>>>>>>> 8de4ec8f562bc6272f731b73e6994c561704d092
          {click ? <FaTimes style={{ color: 'white' }} /> : <FaBars style={{ color: 'white' }} />}
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/card-display' className='nav-links' onClick={closeMobileMenu}>
              Inicio
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={() => handleDropdown1(true)}
            onMouseLeave={() => handleDropdown1(false)}
          >
<<<<<<< HEAD
=======
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
>>>>>>> 8de4ec8f562bc6272f731b73e6994c561704d092
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
<<<<<<< HEAD
            <Link to='/Bibliography' className='nav-links' onClick={closeMobileMenu}>
              Bibliography
=======
            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
              Contacto
>>>>>>> 8de4ec8f562bc6272f731b73e6994c561704d092
            </Link>
          </li>
          {userInfo ? (
            <>
              <li className='nav-item'>
                <Link to='/profile' className='nav-links' onClick={closeMobileMenu}>
                  Profile
                </Link>
              </li>
              <li className='nav-item'>
                <button className='nav-links' onClick={onLogout}>
                  <FaSignOutAlt /> Logout
                </button>
              </li>
            </>
          ) : (
            <li className='nav-item'>
              <Link to='/login' className='nav-links' onClick={closeMobileMenu}>
                Login/Register
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
