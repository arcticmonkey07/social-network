import React from 'react';
import Post from './Post/Post.jsx'
import './MyPosts.css'

const MyPosts = (props) => {

  let postsElements = 
    props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} key={p.id} /> );

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
      <section className="myposts">
        <textarea className="myposts__textarea" onChange={ onPostChange } value={props.newPostText} ref={ newPostElement } />
        <button className="myposts__button" onClick={ onAddPost }>Add Post</button>
        { postsElements }
      </section>
    )
}

export default MyPosts;
