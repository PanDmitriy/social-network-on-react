import React, { useState } from 'react';
import s from './FormSendMessage.module.css';
import { Button, Icon, TextField } from '@material-ui/core';



export const FormSendMessage = props => {
  const [textMessage, setTextMessage] = useState('');

  const changeValueMessage = (event) => {
    setTextMessage(event.target.value);
    // console.log();
  }
  const sendMessage = () => {
    props.sendMessage(textMessage);
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