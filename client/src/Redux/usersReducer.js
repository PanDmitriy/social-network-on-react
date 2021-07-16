const SET_USERS = 'SET_USERS';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const FOLLOW_USER = 'FOLLOW_USER';
const UNFOLLOW_USER = 'UNFOLLOW_USER';
const TO_SWITCH_USERS_PAGE = 'TO_SWITCH_USERS_PAGE';
const IS_LOADING_TRUE = 'IS_LOADING_TRUE';
const IS_LOADING_FALSE = 'IS_LOADING_FALSE';

const initState = {
  users: [],
  pageSize: 14,
  totalUsersCount: 0,
  pageCounter: 1,
  isLoading: false,
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
    case IS_LOADING_TRUE:
      return {...state, isLoading: action.payload}
    case IS_LOADING_FALSE:
      return {...state, isLoading: action.payload}
    default: return state
  }
};

export const setUsers = users => (
  {
    type: SET_USERS,
    payload: users,
  }
)

export const setTotalUsersCounts = number => (
  {
    type: SET_TOTAL_USERS_COUNT,
    payload: number,
  }
)

export const followUser = id => (
  {
    type: FOLLOW_USER,
    payload: id,
  }
)

export const unfollowUser = id => (
  {
    type: UNFOLLOW_USER,
    payload: id,
  }
)

export const toSwitchUsersPage = number => (
  {
    type: TO_SWITCH_USERS_PAGE,
    payload: number,
  }
)

export const isLoadingTrue = () => (
  {
    type: IS_LOADING_TRUE,
    payload: true,
  }
)

export const isLoadingFalse = () => (
  {
    type: IS_LOADING_FALSE,
    payload: false,
  }
)

export default usersReducer;