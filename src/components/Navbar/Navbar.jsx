import React from 'react';
import s from './Navbar.module.css'

export const Navbar = () => (
  <div className={s.nav}>
    <ul className={s.items}>
      <li href='#2' className={s.item}>Profile</li>
      <li href='#2' className={s.item}>Message</li>
      <li href='#2' className={s.item}>News</li>
      <li href='#2' className={s.item}>Music</li>
    </ul>
  </div>
)