import React from 'react';

function Navbar() {
  return (
    <nav>
      <a href="#home" className='logo'>
        Software Engineer
      </a>
      <input className='menu-btn' type="checkbox" id="menu-btn" />
      <label className='menu-icon' htmlFor="menu-btn">
        <span className='nav-icon'></span>
      </label>
      <ul className='menu'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#Experience">Experiance</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
      </ul>
      <a href="#" className='Hey'>Hey!</a>
    </nav>
  );
}

export default Navbar;
