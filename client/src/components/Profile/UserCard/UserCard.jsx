import React from 'react';
import s from './UserCard.module.css'

export const UserCard = () => {
  return(
    <div className={s.content} >
      <div className={s.img}>
        <img src="https://www.vippng.com/png/full/68-689427_spiritual-coaching-coincides-with-the-discover-discipleship-ad.png" alt="Foto profile" />
      </div>
      <div className={s.name}> Dmitriy </div>
    </div>  
  )
}