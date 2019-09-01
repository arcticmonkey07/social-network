import React from 'react';
import './Header.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return (
      <header className="app__header header">
        <img src="https://cdn.worldvectorlogo.com/logos/react.svg" alt="" width="60" height="60"/>
        <div className='header__login'>
          { props.isAuth
            ? <div>{props.login} - <button onClick={props.logout}>Log Out</button></div>
            : <NavLink to={'/login'} className='header__login-link'>Login</NavLink> }
        </div>
      </header>
    )
}

export default Header;
