import React from 'react';
import { User } from './User';
import { List } from '@material-ui/core';

export const Users = (props) => {
  return (
    <List>
      {
        props.users.map( user => 
            <User
              key={user.id}
              id={user.id}
              name={user.name}
              status={user.status}
              photos={user.photos}
              uniqueUrlName={user.uniqueUrlName}
              followed={user.followed}
              subscribeToUser={props.subscribeToUser}
              unsubscribeToUser={props.unsubscribeToUser}
            />
        )
      }
    </List>
  );
}
