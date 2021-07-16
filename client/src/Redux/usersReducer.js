const SET_USERS = 'SET_USERS';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const FOLLOW_USER = 'FOLLOW_USER';
const UNFOLLOW_USER = 'UNFOLLOW_USER';
const TO_SWITCH_USERS_PAGE = 'TO_SWITCH_USERS_PAGE';

const initState = {
  users: [],
  pageSize: 14,
  totalUsersCount: 0,
  pageCounter: 1,
};

const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {...state, users: [...action.payload]}
    case TO_SWITCH_USERS_PAGE:
      return {...state, pageCounter: action.payload}
    case SET_TOTAL_USERS_COUNT:
      return {...state, totalUsersCount: action.payload}
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

export const setTotalUsersCountsAC = number => (
  {
    type: SET_TOTAL_USERS_COUNT,
    payload: number,
  }
)

export const followUserAC = id => (
  {
    type: FOLLOW_USER,
    payload: id,
  }
)

export const unfollowUserAC = id => (
  {
    type: UNFOLLOW_USER,
    payload: id,
  }
)

export const toSwitchUsersPageAC = number => (
  {
    type: TO_SWITCH_USERS_PAGE,
    payload: number,
  }
)

export default usersReducer;