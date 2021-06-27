const SEND_MESSAGE = 'SEND_MESSAGE';

const initState = {
  dialogs: [
    {id: 1, name: 'Dmitriy'},
    {id: 2, name: 'Ivan'},
    {id: 3, name: 'Vova'},
    {id: 4, name: 'Daniil'},
    {id: 5, name: 'Jula'},
    {id: 6, name: 'Petr'},
    {id: 7, name: 'Timo'},
  ], 
  messages: [
    {id: 1, message: 'Hi!'},
    {id: 2, message: 'Hello!'},
    {id: 3, message: 'How are you?'},
    {id: 4, message: 'I am funny. Are you too?'},
    {id: 5, message: 'Yes.'},
    {id: 6, message: 'Goodbay!'},
    {id: 7, message: 'Bay!'},
  ],
};

const dialogsReducer = (state = initState, action) => {
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