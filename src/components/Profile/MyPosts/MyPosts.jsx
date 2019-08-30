import React from 'react';
import Post from './Post/Post.jsx'
import './MyPosts.css'
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {

  let postsElements = 
    props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} key={p.id} /> );

  let addAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
      <section className="myposts">
        <AddNewPostFormRedux onSubmit={addAddPost}/>
        { postsElements }
      </section>
    )
}

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component='textarea'
        name='newPostText'
        className='myposts__textarea'
        placeholder='Sample Text'
      />
      <button className='myposts__button'>Add Post</button>
    </form>
  )
}

const AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm);

export default MyPosts;
