import React from 'react';
import { Dialogs } from './Dialogs';

export const DialogsContainer = ({store, dispatch}) => {
  const { dialogs, messages } = store;
  return (
    <Dialogs dialogs={dialogs} messages={messages} dispatch={dispatch} />
  )
}