import React from 'react';
import s from './User.module.css'
import { Avatar, Divider, IconButton, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Typography } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DoneIcon from '@material-ui/icons/Done';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

export const User = (props) => {
  const { name, id, status, photos, uniqueUrlName, followed, subscribeToUser, unsubscribeToUser} = props;
  const isSubscriberButtonClick = userId => {
    console.log(userId);
    followed ? unsubscribeToUser(userId) : subscribeToUser(userId)
  }
  return (
    <div className={s.container}>
      <Divider />
      <ListItem divider>
        <ListItemAvatar>
          { 
            photos.small || photos.large 
            ? <Avatar alt={name} src={photos.small} />
            : <Avatar>
                <AccountCircleIcon/>
              </Avatar>
          }
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                color="textPrimary"
                className={s.inline}
              >
                {status}
              </Typography>
            </React.Fragment>
          }
        />
        <ListItemSecondaryAction>
          <IconButton 
            color='primary' 
            edge="end" 
            aria-label="follow/unfollow" 
            onClick={()=> isSubscriberButtonClick(id)} 
          >
            {followed ? <DoneIcon/> : <PersonAddIcon/>}
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </div>
  )
}