import React from 'react';
import { Post } from './Post/Post';
import s from './Posts.module.css'

export const Posts = props => {
  const { posts } = props.state;

  const newPostInput = React.createRef();
  const [ valueNewPost, setValueNewPost ] = React.useState('')

  const addNewPost = () => {
    props.addNewPost(valueNewPost);
    setValueNewPost('');
  }

  const onChangeNewPost = () => {
    const value = newPostInput.current.value
    setValueNewPost(value)
  }
  
  return (
    <>
      <div className={s.added}>New post<div> 
        <textarea onChange={onChangeNewPost} ref={newPostInput} value={valueNewPost} /> 
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