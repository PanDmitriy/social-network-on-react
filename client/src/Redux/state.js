import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

// Global app store
let store = {
  _state: {
    profilePage: {
      posts: [
        {id: '1', message: 'Hi everyone!', likesCount: 2},
        {id: '2', message: 'I is my first post', likesCount: 13},
        {id: '3', message: 'Subscribe and read my posts.', likesCount: 18},
        {id: '4', message: 'Has subscribe me, friend?', likesCount: 15},
      ],
    },
    dialogsPage: {
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
    },
  },
  _callSubscriber() {
    console.log('State changed');
  },
  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._callSubscriber(this._state);
  },
}

console.log('Prev state App', store.getState());

window.store = store;
export default store;