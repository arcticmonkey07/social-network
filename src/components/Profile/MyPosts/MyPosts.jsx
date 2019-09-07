import React from 'react';
import Post from './Post/Post.jsx'
import './MyPosts.css'
import {Field, reduxForm} from "redux-form";
import {required, maxLengthCreator} from '../../../utils/validators/validators.js';
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        name='newPostText'
        className='myposts__textarea'
        placeholder='Sample Text'
        validate={[required, maxLength10]}
      />
      <button className='myposts__button'>Add Post</button>
    </form>
  )
};

const AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm);


class MyPosts extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps !== this.props || nextState !== this.state;
  }

  render() {
    console.log('render');
    let postsElements =
      this.props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>);

    let addAddPost = (values) => {
      this.props.addPost(values.newPostText);
    };

    return (
      <section className="myposts">
        <AddNewPostFormRedux onSubmit={addAddPost}/>
        {postsElements}
      </section>
    )
  }
}

export default MyPosts;
