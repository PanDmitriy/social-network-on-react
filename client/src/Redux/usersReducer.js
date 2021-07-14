const SET_USERS = 'SET_USERS';

const initState = {
  users: [],
};

const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {...state, users: [...state.users, ...action.payload]}
    default: return state
  }
};

export const setUsersAC = users => (
  {
    type: SET_USERS,
    payload: users,
  }
)

export default usersReducer;