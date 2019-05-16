let renderEntireTree = () => {
  console.log(1);
}

let state = {

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
    ]
  }
}

export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0
  }

  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  renderEntireTree(state);
}

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  renderEntireTree(state);
}

export const subscribe = (observer) => {
  renderEntireTree = observer;
}

export default state;