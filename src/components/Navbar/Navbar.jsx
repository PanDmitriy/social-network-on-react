import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

export const Navbar = () => (
  <div className={s.nav}>
    <nav className={s.items}>
      <NavLink to='/profile' className={s.item} activeClassName={s.activeLink}>Profile</NavLink>
      <NavLink to='/dialogs' className={s.item} activeClassName={s.activeLink}>Message</NavLink>
      <NavLink to='/news' className={s.item} activeClassName={s.activeLink}>News</NavLink>
      <NavLink to='/music' className={s.item} activeClassName={s.activeLink}>Music</NavLink>
      <NavLink to='/settings' className={s.item} activeClassName={s.activeLink}>Settings</NavLink>
    </nav>
  </div>
)