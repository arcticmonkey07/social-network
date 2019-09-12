import React from 'react';
import './Header.css'
import {NavLink} from "react-router-dom";
import img from './../../img/share.svg';
import avatar from './../../img/ava.jpg';


const Header = (props) => {
  return (
      <div className="header__container">
        <div className="header">
          {
            <NavLink to={'/'}>
              <img src={img} className='header__logo' alt="logo" width="60" height="60"/>
            </NavLink>
          }
          <div className='header__login'>
            { props.isAuth
              ? <div className='login'>
                  <span className='login__name'>{props.login}</span>
                  <img className='login__avatar' src={avatar} alt="avatar"/>
                  <button className='login__button' onClick={props.logout}>Выйти</button>
              </div>
              : <NavLink to={'/login'} className='login__button login__button--exit'>Войти</NavLink> }
          </div>
        </div>
      </div>
    )
};

export default Header;
