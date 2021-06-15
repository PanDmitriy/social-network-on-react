import React from 'react';
import { Post } from './Post/Post';
import s from './Posts.module.css'

export const Posts = props => {
  const { posts, newPostText } = props.state;

  const newPostInput = React.createRef();

  const addNewPost = () => {
    props.addNewPost();
  }

  const onChangeNewPost = () => {
    const value = newPostInput.current.value
    props.updateNewPostText(value)
  }
  
  return (
    <>
      <div className={s.added}>New post<div> 
        <textarea onChange={onChangeNewPost} ref={newPostInput} value={newPostText} /> 
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