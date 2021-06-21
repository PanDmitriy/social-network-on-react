import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
import Avatar from '@material-ui/core/Avatar';
import FaceIcon  from '@material-ui/icons/Face';
import { Button, Icon, TextField } from '@material-ui/core';
import { sendMessageActionCreate } from '../../Redux/dialogsReducer';

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

const SendMessage = props => {
  const [textMessage, setTextMessage] = useState('');

  const changeValueMessage = (event) => {
    setTextMessage(event.target.value);
    // console.log();
  }
  const sendMessage = () => {
    props.dispatch(sendMessageActionCreate(textMessage));
    setTextMessage('');
  }
  const keyPressHandler = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      sendMessage();
    }
  }
  return (
    <div className={s.send}>
      <TextField 
        id="outlined-multiline-flexible"
        label="You message" 
        variant="outlined"
        fullWidth
        multiline
        rowsMax={4}
        onChange={changeValueMessage} 
        value={textMessage}
        onKeyPress={keyPressHandler}
      />
      <Button variant='outlined' endIcon={<Icon>send</Icon>} onClick={sendMessage}>Send</Button>
    </div>
  )
}

export const Dialogs = props => {
  const { dialogs, messages } = props.state;
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
          <SendMessage dispatch={props.dispatch} />
        </div>
      </div>
  )
}