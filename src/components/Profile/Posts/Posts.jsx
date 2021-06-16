import { Icon } from '@material-ui/core';
import { Button, TextField } from '@material-ui/core';
import React from 'react';
import { addNewPostActionCreate } from '../../../Redux/state';
import { Post } from './Post/Post';
import s from './Posts.module.css'

export const Posts = props => {
  const { posts } = props.state;

  const [ valueNewPost, setValueNewPost ] = React.useState('')
  const [ labelInput, setLabelInput ] = React.useState('Enter text post.')
  

  const addNewPost = () => {
    if (valueNewPost === ''){
      setLabelInput('The value cannot be null. Please, enter text post.')
      console.error('The value cannot be null.');
      return
    }
    props.dispatch(addNewPostActionCreate(valueNewPost));
    setValueNewPost('');
    setTimeout(()=> {
      setLabelInput('Enter text post.')
    }, 5000);
    setLabelInput('New post published.')
  }

  const onChangeNewPost = event => {
    setValueNewPost(event.target.value)
  }
  
  return (
    <>
      <div className={s.added}>
        <div className={s.title}>Publish a new post</div>
        <div> 
          <TextField 
            fullWidth
            variant='outlined'
            label={labelInput}
            placeholder='New post' 
            onChange={onChangeNewPost} 
            value={valueNewPost} 
          /> 
          <Button 
            
            startIcon={<Icon>create</Icon>}
            onClick={addNewPost}
          >
            Create
          </Button> 
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