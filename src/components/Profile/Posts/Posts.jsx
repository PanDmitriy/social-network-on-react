import React from 'react';
import { Post } from './Post/Post';
import s from './Posts.module.css'

export const Posts = () => {
  return (
    <div className={s.posts}>
      <Post message={'One'} like={0} />
      <Post message={'Two'} like={5} />
      <Post message={'Three'} like={34} />
      <Post message={'Four'} like={4} />
      <Post message={'Five'} like={12} />
      <Post message={'Six'}  like={23} />
      <Post message={'Six'}  like={23} />
      <Post message={'Six'}  like={23} />
      <Post message={'Six'}  like={23} />
      <Post message={'Six'}  like={23} />
      <Post message={'Six'}  like={23} />
      <Post message={'Six'}  like={23} />
      <Post message={'Six'}  like={23} />
    </div>
  )
}