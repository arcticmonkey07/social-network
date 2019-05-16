import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPostText} from './redux/state.js'
import {BrowserRouter} from 'react-router-dom';
import state, {subscribe} from './redux/state.js';
import * as serviceWorker from './serviceWorker';

let renderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
    </BrowserRouter>, document.getElementById('root'));
}

renderEntireTree(state);

subscribe(renderEntireTree);

serviceWorker.unregister();
