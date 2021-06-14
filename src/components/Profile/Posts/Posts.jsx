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
        { 
          postsData.map(
          post => (
              <Post key={post.id} message={post.message} like={post.likesCount} />
            )
          ) 
        }
      </div>
    </>
  )
}