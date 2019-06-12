import profileReducer from './profile-reducer.js';
import dialogsReducer from './dialogs-reducer.js';
import sidebarReducer from './sidebar-reducer.js';

let store = {

  _state: {
    profilePage: {
      posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 8},
        {id: 2, message: 'Its my first post', likesCount: 3},
      ],
      newPostText: 'sample text'
    },
    dialogsPage: {
      messages: [
        {message: 'Hi'},
        {message: 'How are you?'},
        {message: 'Hello'},
      ],
      dialogs: [
        {id: 1, name: 'Дмитрий'},
        {id: 2, name: 'Алексей'},
        {id: 3, name: 'Наталья'},
        {id: 4, name: 'Екатерина'},
        {id: 5, name: 'Илья'},
      ],
      newMessageBody: ''
    },
    sidebar: {}
  },
  _callSubscriber() {
    console.log('State changed!');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }
}

export default store;