import React from 'react';
import s from './Navbar.module.css';
import { Link } from 'react-router-dom';

export const Navbar = () => (
  <div className={s.nav}>
    <nav className={s.items}>
      <Link to='/profile' className={s.item}>Profile</Link>
      <Link to='/dialogs' className={s.item}>Message</Link>
      <Link to='/news' className={s.item}>News</Link>
      <Link to='/music' className={s.item}>Music</Link>
      <Link to='/settings' className={s.item}>Settings</Link>
    </nav>
  </div>
)