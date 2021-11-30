import React, {useState, Component} from 'react'
import {Link, NavLink} from 'react-router-dom'
import '../../App.css'
import { ReactComponent as CloseMenu } from "./x.svg";
import { ReactComponent as MenuIcon } from "./menu.svg";
import { ReactComponent as Logo } from "./logo.svg";


const Navbar = () => {
    const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="header">
      <div className="logo-nav">
        <div className="logo-container">
          <a href="#">
            <Logo className="logo" />
          </a>
          <div className="title">
          <Link to="/">
            YourNote
          </Link>
          </div>
        </div>
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <NavLink to="/">HOME</NavLink>
          </li>
          
          
          <li className="option mobile-option" onClick={closeMobileMenu}>
          <NavLink className="sign-up" to="/favorites">FAVORITES</NavLink>
          </li>
        </ul>
      </div>
      <ul className="signin-up">
        
        <li onClick={closeMobileMenu}>
        <NavLink className="signup-btn" to="/favorites">FAVORITES</NavLink>
        </li>
      </ul>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );
};


export default Navbar
