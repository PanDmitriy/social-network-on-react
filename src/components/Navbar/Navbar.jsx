import React from 'react';
import s from './Navbar.module.css';
import { Paper, MenuList, MenuItem, ListItemIcon,Typography } from '@material-ui/core';
import DraftsIcon from '@material-ui/icons/Drafts';
import AccountCircleIcon from '@material-ui/icons/AccountCircleOutlined';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import { NavLink } from 'react-router-dom';

export const Navbar = () => (

  <div className={s.nav}>
    <Paper style={{width: '100%'}}>
      <MenuList>
      <NavLink to='/profile' className={s.item}>
        <MenuItem>
          <ListItemIcon>
            <AccountCircleIcon/>
          </ListItemIcon>
          <Typography variant="inherit">Profile</Typography>
        </MenuItem>
        </NavLink>
        <NavLink to='/dialogs' className={s.item}>
        <MenuItem>
          <ListItemIcon>
            <PriorityHighIcon/>
          </ListItemIcon>
          <Typography variant="inherit">Message</Typography>
        </MenuItem>
        </NavLink>
        <NavLink to='/news' className={s.item}>
        <MenuItem>
          <ListItemIcon>
            <DraftsIcon/>
          </ListItemIcon>
          <Typography variant="inherit">News</Typography>
        </MenuItem>
        </NavLink>
      </MenuList>
    </Paper>
  </div>

  // <div className={s.nav}>
  //   <nav className={s.items}>
  //     <NavLink to='/profile' className={s.item} activeClassName={s.activeLink}>Profile</NavLink>
  //     <NavLink to='/dialogs' className={s.item} activeClassName={s.activeLink}>Message</NavLink>
  //     <NavLink to='/news' className={s.item} activeClassName={s.activeLink}>News</NavLink>
  //     <NavLink to='/music' className={s.item} activeClassName={s.activeLink}>Music</NavLink>
  //     <NavLink to='/settings' className={s.item} activeClassName={s.activeLink}>Settings</NavLink>
  //   </nav>
  // </div>
)