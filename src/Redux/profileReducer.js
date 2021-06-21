
const ADD_NEW_POST = 'ADD_NEW_POST';

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_NEW_POST: 
      const newPost = {
        id: Date(),
        message: action.value,
        likesCount: 0
      };
      state.posts.push(newPost);
      console.log('New state App', state)
      return state;
    default: return state
  }
};

export const addNewPostActionCreate = value => (
  {
    type: ADD_NEW_POST,
    value: value,
  }
)

export default profileReducer;