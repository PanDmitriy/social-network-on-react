import React from 'react';
import s from './Navbar.module.css'

export const Navbar = () => (
  <div className={s.nav}>
    <menu className={s.items}>
      <a href='#2' className={s.item}>Profile</a>
      <a href='#2' className={s.item}>Message</a>
      <a href='#2' className={s.item}>News</a>
      <a href='#2' className={s.item}>Music</a>
    </menu>
  </div>
)