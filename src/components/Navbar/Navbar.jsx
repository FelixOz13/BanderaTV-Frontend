import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './navbar.css';
import Dropdown from './Dropdown';
import { FaBars, FaTimes, FaSignOutAlt } from 'react-icons/fa';
import { logout, reset } from '../../features/auth/authSlice';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const { userInfo } = useSelector((state) => state.auth); 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const handleDropdown = (isEntering) => {
    if (window.innerWidth >= 960) {
      setDropdown(isEntering);
    }
  };

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
            onMouseEnter={() => handleDropdown(true)}
            onMouseLeave={() => handleDropdown(false)}
          >
            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
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
            <Link to='/Bibliography' className='nav-links' onClick={closeMobileMenu}>
              Bibliography
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
