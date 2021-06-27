import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
import Avatar from '@material-ui/core/Avatar';
import FaceIcon  from '@material-ui/icons/Face';
import { FormSendMessage } from './FormSendMessage/FormSendMessage';

const DialogItem = (props) => {
  const path = `/dialogs/${props.id}`
  return (
    <>
      <NavLink 
        to={path} 
        activeClassName={s.active}
        className={s.dialog}
      >
        <Avatar>
          <FaceIcon style={{color: '#222'}}  />
        </Avatar>
        <span>{props.name}</span>
      </NavLink>
    </>
  )
}

const MessageItem = (props) => {
  return (
    <div className={s.message}>
      {props.message}
    </div>
  )
}

export const Dialogs = ({ dialogs, messages, dispatch}) => {
  return (
    <div className={`${s.content} container`}>
      <div className={s.dialogs}>
        {
          dialogs.map( 
            dialog => (
              <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>
            )
          )
        }
      </div>
      <div className={s.columnRight}>
        <div className={s.messages}>
          {
            messages.map(
              message => (
                <MessageItem key={message.id} message={message.message}/>
              )
            )
          }
        </div>
          <FormSendMessage dispatch={dispatch} />
        </div>
      </div>
  )
}