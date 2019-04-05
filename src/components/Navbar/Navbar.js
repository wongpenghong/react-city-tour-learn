import React from 'react';
import './Navbar.scss'; 
import logo from '../../logo.png';

const Navbar = () => (
  <nav className='navbar'>
    <img src={logo} alt='city tours logo' /> 
    <ul className='nav-links'>
        <li>
            <a href="/" className="nav-links">Home</a>
        </li>
        <li>
            <a href="/" className="nav-links">About</a>
        </li>
        <li>
            <a href="/" className="nav-links activate">Tours</a>
        </li>
    </ul>
  </nav>
  )
export default Navbar;