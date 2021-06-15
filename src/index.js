
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './Redux/state';
import { addNewPost, updateNewPostText, sendMessage, subscribe } from './Redux/state';

const rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addNewPost={addNewPost} sendMessage={sendMessage} updateNewPostText={updateNewPostText} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);

reportWebVitals();