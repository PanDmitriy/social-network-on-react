import React, { useState } from 'react';
import { addNewPostActionCreate } from '../../../Redux/profileReducer';
import { Posts } from './Posts';


export const PostsContainer = props => {

  const addNewPost = (valueNewPost) => {
    props.dispatch(addNewPostActionCreate(valueNewPost));
  }



  return (
      <Posts addNewPost={addNewPost} posts={props.store.posts} />
  )
}