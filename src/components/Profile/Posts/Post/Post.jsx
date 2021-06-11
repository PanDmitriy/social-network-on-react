import React from 'react';
import s from './Post.module.css';

export const Post = ({message, like}) => {
  return (
    <div className={s.item}>
      <div className={s.header}>
        <img src="https://w7.pngwing.com/pngs/410/341/png-transparent-business-management-document-computer-icons-menlove-law-ambulance-text-service-people.png" alt="" />
      </div>
      <div className={s.message}>
        {message}
      </div>
      <div className={s.footer}>
        <span>Like - {like}</span>
      </div>
    </div>
  )
}