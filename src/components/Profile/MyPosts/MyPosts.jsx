import React from 'react';
import Post from './Post/Post.jsx'
import './MyPosts.css'
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";

const AddNewPostForm = (props) => {
  return (
    <form
      onSubmit={props.handleSubmit}
      className='posts__send'
    >
      <Field
        component={Textarea}
        name='newPostText'
        className='posts__textarea'
        placeholder='Что у Вас нового?'
      />
      <button className='posts__button'>Опубликовать</button>
    </form>
  )
};

const AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm);

class MyPosts extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps !== this.props || nextState !== this.state;
  }

  render() {
    let postsElements =
      this.props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>);

    let addAddPost = (values) => {
      this.props.addPost(values.newPostText);
    };

    return (
      <section className="posts">
        <AddNewPostFormRedux onSubmit={addAddPost}/>
        {postsElements}
      </section>
    )
  }
}

export default MyPosts;
