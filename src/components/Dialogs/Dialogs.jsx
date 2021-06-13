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

export const Dialogs = () => {
  return (
    <div className={`${s.content} container`}>
      <div className={s.dialogs}>
        <DialogItem name={'Dmitriy'} id={1}/>
        <DialogItem name={'Ivan'} id={2}/>
        <DialogItem name={'Petr'} id={3}/>
        <DialogItem name={'Sofi'} id={4}/>
        <DialogItem name={'Philip'} id={5}/>
        <DialogItem name={'Karl'} id={6}/>
        <DialogItem name={'Nikolay'} id={7}/>
      </div>
      <div className={s.messanges}>
        <MessageItem message={'Hello!'}/>
        <MessageItem message={'Hi!'}/>
        <MessageItem message={'How are you?'}/>
        <MessageItem message={'It\'s okay! Are you too?'}/>
        <MessageItem message={'Yes, thanks!'}/>
      </div>
    </div>
  )
}