
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './Redux/state';

const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App 
        state={state} 
        addNewPost={store.addNewPost.bind(store)} 
        sendMessage={store.sendMessage.bind(store)} 
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

reportWebVitals();