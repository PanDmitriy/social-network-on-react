import React from 'react';
import s from './UserCard.module.css'

export const UserCard = () => {
  return(
    <div className={s.content} >
      <div className={s.img}>
        <img src="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg" alt="" />
      </div>
      <div className={s.name}> Dmitriy </div>
    </div>  
  )
}