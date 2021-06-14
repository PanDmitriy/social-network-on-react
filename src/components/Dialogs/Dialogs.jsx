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
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
        <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
        <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>
      </div>
      <div className={s.messanges}>
        <MessageItem message={messagesData[0].message}/>
        <MessageItem message={messagesData[1].message}/>
        <MessageItem message={messagesData[2].message}/>
        <MessageItem message={messagesData[3].message}/>
        <MessageItem message={messagesData[4].message}/>
        <MessageItem message={messagesData[5].message}/>
      </div>
    </div>
  )
}