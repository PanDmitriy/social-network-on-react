import { connect } from 'react-redux';
import { addNewPost } from '../../../Redux/profileReducer';
import { Posts } from './Posts';

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
  }
}

export const PostsContainer = connect(mapStateToProps,{
  addNewPost,
})(Posts);