import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { addNewPost } from './Redux/state'
import { sendMessage } from './Redux/state';

export const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addNewPost={addNewPost} sendMessage={sendMessage} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

reportWebVitals();
