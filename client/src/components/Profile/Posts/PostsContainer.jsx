import React from 'react';
import { addNewPostActionCreate } from '../../../Redux/profileReducer';
import StoreContext from '../../../StoreContext';
import { Posts } from './Posts';


export const PostsContainer = props => {

  return (
    <StoreContext.Consumer> 
      {
        store => {
          const addNewPost = (valueNewPost) => {
            store.dispatch(addNewPostActionCreate(valueNewPost));
          }
          return (
            <Posts addNewPost={addNewPost} posts={store.getState().profilePage.posts} />
          )

        }
      }
    </StoreContext.Consumer>
  )
}