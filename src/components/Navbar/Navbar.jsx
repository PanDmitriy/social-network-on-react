import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

export const Navbar = () => (
  <div className={s.nav}>
    <nav className={s.items}>
      <NavLink to='/profile' className={s.item}>Profile</NavLink>
      <NavLink to='/dialogs' className={s.item}>Message</NavLink>
      <NavLink to='/news' className={s.item}>News</NavLink>
      <NavLink to='/music' className={s.item}>Music</NavLink>
      <NavLink to='/settings' className={s.item}>Settings</NavLink>
    </nav>
  </div>
)