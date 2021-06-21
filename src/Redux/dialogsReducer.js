const SEND_MESSAGE = 'SEND_MESSAGE';

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const newMessage = {
        id: Date.now().toString(),
        message: action.value,
      };
      state.messages.push(newMessage);
      console.log('New state App', state)
      return state;
    default: return state;
  }
};

export const sendMessageActionCreate = value => (
  {
    type: SEND_MESSAGE,
    value: value,
  }
)

export default dialogsReducer;