import React from 'react';
import { Post } from './Post/Post';
import s from './Posts.module.css'

export const Posts = props => {
  const { postsData } = props;
  return (
    <>
      <div className={s.added}>New post<div> 
        <textarea></textarea> 
        <button>Create</button> 
      </div> 
      </div>
      <div className={s.posts}>
        <Post message={postsData[2].message} like={postsData[2].likesCount} />
        <Post message={postsData[1].message} like={postsData[1].likesCount} />
        <Post message={postsData[0].message} like={postsData[0].likesCount} />
      </div>
    </>
  )
}