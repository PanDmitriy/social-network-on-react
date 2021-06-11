import React from 'react';
import { Posts } from './Posts/Posts';
import s from './Profile.module.css'

export const Profile = () => {
  return (
    <div className={s.content}>
      <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="" />
      <div>New post 
        <div> 
          <textarea name="" id="" cols="90" rows="4"></textarea> 
          <button>Create</button> 
        </div> 
      </div>
      <Posts/>
    </div>
  )
}