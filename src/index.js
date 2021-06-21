
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './Redux/store';

const rerenderEntireTree = (state) => {
  console.log('Store: ', state);
  ReactDOM.render(
    <React.StrictMode>
      <App 
        state={state} 
        dispatch={store.dispatch.bind(store)} 
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
  const state = store.getState();
  rerenderEntireTree(state);
});

reportWebVitals();