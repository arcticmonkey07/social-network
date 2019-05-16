import React from 'react';
import './Navbar.css'
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
      <nav className="app__nav nav">
        <ul className="nav_list">
          <li className="nav__item">
            <NavLink className="nav__link" activeClassName="nav__active" to="/profile">Profile</NavLink>
            </li>
          <li className="nav__item">
            <NavLink className="nav__link" activeClassName="nav__active" to="/dialogs">Messages</NavLink>
            </li>
          <li className="nav__item">
            <NavLink className="nav__link" activeClassName="nav__active" to="/news">News</NavLink>
            </li>
          <li className="nav__item">
            <NavLink className="nav__link" activeClassName="nav__active" to="/music">Music</NavLink>
            </li>
          <li className="nav__item">
            <NavLink className="nav__link" activeClassName="nav__active" to="/settings">Settings</NavLink>
            </li>
        </ul>
      </nav>
    )
}

export default Navbar;
