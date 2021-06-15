import React from 'react';
import { Post } from './Post/Post';
import s from './Posts.module.css'

export const Posts = props => {
  const { posts } = props.state;

  const newPostInput = React.createRef();

  const addNewPost = () => {
    const value = newPostInput.current.value
    props.addNewPost(value);
    newPostInput.current.value = '';
  }
  
  return (
    <>
      <div className={s.added}>New post<div> 
        <textarea ref={newPostInput} ></textarea> 
        <button onClick={addNewPost}>Create</button> 
      </div> 
      </div>
      <div className={s.posts}>
        { 
          posts.map(
          post => (
              <Post key={post.id} message={post.message} like={post.likesCount} />
            )
          ) 
        }
      </div>
    </>
  )
}