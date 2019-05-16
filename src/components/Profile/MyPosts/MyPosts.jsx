import React from 'react';
import Post from './Post/Post.jsx'
import './MyPosts.css'

const MyPosts = (props) => {

  let postsElements = 
    props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} /> );

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
    props.updateNewPostText('');
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
      <section className="myposts">
        <textarea className="myposts__textarea" onChange={ onPostChange } value={props.newPostText} ref={ newPostElement } />
        <button className="myposts__button" onClick={ addPost }>Add Post</button>
        { postsElements }
      </section>
    )
}

export default MyPosts;
