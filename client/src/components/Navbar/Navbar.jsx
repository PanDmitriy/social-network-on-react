import React from 'react';
import s from './Navbar.module.css';
import { Paper, MenuList, MenuItem, ListItemIcon,Typography } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ForumIcon from '@material-ui/icons/Forum';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import SettingsIcon from '@material-ui/icons/Settings';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import { NavLink } from 'react-router-dom';

export const Navbar = () => (

  <div className={s.nav}>
    <Paper style={{width: '100%'}}>
      <MenuList>
      <NavLink to='/profile' className={s.item} activeClassName={s.activeLink}>
        <MenuItem>
          <ListItemIcon>
            <AccountCircleIcon
              fontSize='large'
            />
          </ListItemIcon>
          <Typography variant="inherit">Profile</Typography>
        </MenuItem>
        </NavLink>
      <NavLink to='/users' className={s.item} activeClassName={s.activeLink}>
        <MenuItem>
          <ListItemIcon>
            <SupervisedUserCircleIcon
              fontSize='large'
            />
          </ListItemIcon>
          <Typography variant="inherit">Users</Typography>
        </MenuItem>
        </NavLink>
        <NavLink to='/dialogs' className={s.item} activeClassName={s.activeLink}>
        <MenuItem>
          <ListItemIcon>
            <ForumIcon
              fontSize='large'
            />
          </ListItemIcon>
          <Typography variant="inherit">Message</Typography>
        </MenuItem>
        </NavLink>
        <NavLink to='/music' className={s.item} activeClassName={s.activeLink}>
        <MenuItem>
          <ListItemIcon>
            <LibraryMusicIcon
              fontSize='large'
            />
          </ListItemIcon>
          <Typography variant="inherit">Music</Typography>
        </MenuItem>
        </NavLink>
        <NavLink to='/news' className={s.item} activeClassName={s.activeLink}>
        <MenuItem>
          <ListItemIcon>
            <ImportantDevicesIcon
              fontSize='large'
            />
          </ListItemIcon>
          <Typography variant="inherit">News</Typography>
        </MenuItem>
        </NavLink>
        <NavLink to='/settings' className={s.item} activeClassName={s.activeLink}>
        <MenuItem>
          <ListItemIcon>
            <SettingsIcon
              fontSize='large'
            />
          </ListItemIcon>
          <Typography variant="inherit">Settings</Typography>
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