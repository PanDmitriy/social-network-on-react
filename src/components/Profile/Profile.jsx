import React from 'react';
import { Posts } from './Posts/Posts';
import s from './Profile.module.css'

export const Profile = props => {
  return (
    <div className={`${s.content} container`}>
      <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="" />
      <Posts {...props} />
    </div>
  )
}