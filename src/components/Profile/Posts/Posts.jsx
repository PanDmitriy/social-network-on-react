import React from 'react';
import s from './Posts.module.css'
import { Icon } from '@material-ui/core';
import { Button, TextField, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert'
import { addNewPostActionCreate } from '../../../Redux/state';
import { Post } from './Post/Post';

const Alert = props => (
  <MuiAlert elevation={6} variant='filled' {...props} />
)

export const Posts = props => {
  const { posts } = props.state;

  const [ valueNewPost, setValueNewPost ] = React.useState('')
  const [ alert, setAlert ] = React.useState({
    open: false,
    text: 'Alert',
    type: 'info',
    vertical: 'bottom',
    horizontal: 'right',
  })
  const {open, text, type, vertical, horizontal} = alert
  
  const handleClose = () => {
    setAlert({...alert, open: false,});
  };

  const addNewPost = () => {
    if (valueNewPost === ''){
      setAlert({ 
        ...alert, 
        open: true,
        type: 'error',
        text: 'The value cannot be null',
      });
      return
    }
    props.dispatch(addNewPostActionCreate(valueNewPost));
    setValueNewPost('');
    setAlert({
      ...alert,
      open: true,
      type: 'success',
      text: 'Publish your post success!',
    })
  }

  const onChangeNewPost = event => {
    console.log(event);
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
            label='Enter your post'
            onChange={onChangeNewPost} 
            value={valueNewPost}
            onKeyPress={event => console.log('keyPress',event)}
          /> 
          <Button
            startIcon={<Icon>create</Icon>}
            onClick={addNewPost}
          >
            Create
          </Button>
          <Snackbar 
            anchorOrigin={{vertical, horizontal}}
            open={open} 
            autoHideDuration={6000} 
            onClose={handleClose}
          >
            <Alert onClose={handleClose} severity={type}>
              {text}
            </Alert>
          </Snackbar>
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