import React from 'react';
import StoreContext from '../../StoreContext';
import { Dialogs } from './Dialogs';

export const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {
        store => {
          const { dialogs, messages } = store.getState().dialogsPage;
          return (
            <Dialogs dialogs={dialogs} messages={messages} dispatch={store.dispatch} />
          )
        }
      }
    </StoreContext.Consumer>
  )
}