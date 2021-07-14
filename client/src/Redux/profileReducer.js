const ADD_NEW_POST = 'ADD_NEW_POST';

const initState = {
  posts: [
    {id: '1', message: 'Hi everyone!', likesCount: 2},
    {id: '2', message: 'I is my first post', likesCount: 13},
    {id: '3', message: 'Subscribe and read my posts.', likesCount: 18},
    {id: '4', message: 'Has subscribe me, friend?', likesCount: 15},
  ],
};

const profileReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_NEW_POST: 
      const newPost = {
        id: Date(),
        message: action.value,
        likesCount: 0
      };
      return {...state, posts: [...state.posts, newPost]}
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