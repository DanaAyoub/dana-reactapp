import React from 'react';
import logo from '../../assets/logo.png';
import './Header.scss';

const Header = () => {

  return (
    <div className='Header'>
      <img className="Header__logo" alt='logo' src={logo} />
      <a className='Header__bar' href="#home">Home</a>
      <a className='Header__bar' href="#about">About</a>
      <a className='Header__bar' href="#contact">Contact</a>
      <a className='Header__bar' href="signIn">Sign In</a>
      <input className='Header__search' type="text" placeholder="Search.."></input>
    </div>
  );
}

export default Header;