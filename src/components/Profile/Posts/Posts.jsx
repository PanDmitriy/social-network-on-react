import React from 'react';
import { Post } from './Post/Post';
import s from './Posts.module.css'

const postsData = [
  {id: 1, message: 'Hi everyone!', likesCount: 2},
  {id: 2, message: 'I is my first post', likesCount: 13},
  {id: 3, message: 'Subscribe and read my posts.', likesCount: 18}
]

export const Posts = () => {
  return (
    <div className={s.posts}>
      <Post message={postsData[2].message} like={postsData[2].likesCount} />
      <Post message={postsData[1].message} like={postsData[1].likesCount} />
      <Post message={postsData[0].message} like={postsData[0].likesCount} />
    </div>
  )
}