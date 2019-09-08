import ReactDOM from "react-dom";
import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
  posts: [
    {id: 1, message: 'Hi, how are you?', likesCount: 8},
    {id: 2, message: 'Its my first post', likesCount: 3},
  ]
};

it('length of posts should be incremented', () => {
  // 1. test data
  let action = addPostActionCreator('petr');


  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(3);
  expect(newState.posts[2].message).toBe('petr');
});

it('after deleting length of messages should be decremented', () => {
  // 1. test data
  let action = deletePost(1);

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(1);
});

it(`after deleting length of messages shouldn't be decremented if id is incorrect`, () => {
  // 1. test data
  let action = deletePost(1000);

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(2);
});

