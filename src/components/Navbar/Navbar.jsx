import React from 'react';
import './Navbar.css'
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
      <nav className="nav">
        <ul className="nav_list">
          <li className="nav__item">
            <NavLink className="nav__link" activeClassName="nav__active" to="/profile">Моя страница</NavLink>
          </li>
          <li className="nav__item">
            <NavLink className="nav__link" activeClassName="nav__active" to="/news">Новости</NavLink>
          </li>
          <li className="nav__item">
            <NavLink className="nav__link" activeClassName="nav__active" to="/dialogs">Сообщения</NavLink>
          </li>
          <li className="nav__item">
            <NavLink className="nav__link" activeClassName="nav__active" to="/users">Друзья</NavLink>
          </li>
          <li className="nav__item">
            <NavLink className="nav__link" activeClassName="nav__active" to="/groups">Сообщества</NavLink>
          </li>
          <li className="nav__item">
            <NavLink className="nav__link" activeClassName="nav__active" to="/music">Музыка</NavLink>
          </li>
          <li className="nav__item">
            <NavLink className="nav__link" activeClassName="nav__active" to="/video">Видео</NavLink>
          </li>
          <li className="nav__item">
            <NavLink className="nav__link" activeClassName="nav__active" to="/favorites">Закладки</NavLink>
          </li>
          <li className="nav__item">
            <NavLink className="nav__link" activeClassName="nav__active" to="/settings">Настройки</NavLink>
          </li>
        </ul>
      </nav>
    )
}

export default Navbar;
