import { connect } from 'react-redux';
import { addNewPostActionCreate } from '../../../Redux/profileReducer';
import { Posts } from './Posts';

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewPost: (value) => {
      dispatch(addNewPostActionCreate(value))
    }
    }
}

export const PostsContainer = connect(mapStateToProps,mapDispatchToProps)(Posts);