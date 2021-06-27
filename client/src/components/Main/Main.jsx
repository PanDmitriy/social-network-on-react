import React from 'react';
import s from './Main.module.css';

export const Main = () => {
  return (
    <div className={`${s.content} container`}>
      <h2>Welcome!</h2>
      <h4>in social network <em>Bubliki</em>.</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sit distinctio aperiam voluptates porro dolore iste alias aliquid non adipisci, quidem ipsum ea impedit natus!</p>
    </div>
  )
}