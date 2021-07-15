const SET_USERS = 'SET_USERS';
const FOLLOW_USER = 'FOLLOW_USER';
const UNFOLLOW_USER = 'UNFOLLOW_USER';

const initState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
};

const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {...state, users: [...state.users, ...action.payload]}
    case FOLLOW_USER:
      // console.log(action.payload);
      return {...state, users: [...state.users.map( user => {
        if(user.id === action.payload) {
          return {...user, followed: true}
        }
        return user
      })]}
    case UNFOLLOW_USER:
      // console.log(action.payload);
      return {...state, users: [...state.users.map( user => {
        if(user.id === action.payload) {
          return {...user, followed: false}
        }
        return user
      })]}
    default: return state
  }
};

export const setUsersAC = users => (
  {
    type: SET_USERS,
    payload: users,
  }
)

export const followUserAC = userId => (
  {
    type: FOLLOW_USER,
    payload: userId,
  }
)

export const unfollowUserAC = userId => (
  {
    type: UNFOLLOW_USER,
    payload: userId,
  }
)

export default usersReducer;