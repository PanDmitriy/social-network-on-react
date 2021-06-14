import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
  const path = `/dialogs/${props.id}`
  return (
    <NavLink 
      to={path} 
      activeClassName={s.active} 
      className={s.dialog}
    >
      {props.name}
    </NavLink>
  )
}

const MessageItem = (props) => {
  return (
    <div className={s.message}>
      {props.message}
    </div>
  )
}

export const Dialogs = props => {
  const { dialogsData, messagesData } = props;
  return (
    <div className={`${s.content} container`}>
      <div className={s.dialogs}>
        {
          dialogsData.map( 
            dialog => (
              <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>
            )
          )
        }
      </div>
      <div className={s.messanges}>
        {
          messagesData.map(
            message => (
              <MessageItem key={message.id} message={message.message}/>
            )
          )
        }
      </div>
    </div>
  )
}