import React from 'react';
import s from './Profile.module.css'

export const Profile = () => {
  return (
    <div className={s.content}>
      <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="" />
      
      <div>
        <div className="avatar">
          <img src="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg" alt="" />
        </div>
        <div className="user-name"> User Name </div>
      </div>
    </div>
  )
}