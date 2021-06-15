import React from 'react';
import s from './Header.module.css';
import { Link } from 'react-router-dom';

export const Header = () => (
  <header className={s.header} >
    <Link to='/social-network-on-react' className={s.logo}>
      <h3>Bubliki</h3>
    </Link>
    <img src="https://www.banksandlloyd.com/wp-content/uploads/2018/10/value-connecting-icon.png" alt="" />
  </header>
)