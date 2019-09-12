import React from 'react';
import './Dialogs.css';
import {Redirect} from 'react-router-dom';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import Dialog from "./Dialog";

const Dialogs = (props) => {
  let state = props.dialogsPage;
  let dialogsElements = state.dialogs.map( d => <Dialog name={d.name} key={d.id} message={d.message} id={d.id} /> );

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  };

  if (!props.isAuth) return <Redirect to={'/login'} />;

  return (
      <section className="dialogs">
        <AddMessageFormRedux onSubmit={addNewMessage} />
        { dialogsElements }
      </section>
    )
};

const AddMessageForm = (props) => {
  return (
    <form
      className='dialog__new-message new-message'
      onSubmit={props.handleSubmit}>
      <div>
        <Field
          className='new-message__textarea'
          component={Textarea}
          name='newMessageBody'
          placeholder='Enter your message'
        />
      </div>
      <div>
        <button className='new-message__button'>Отправить</button>
      </div>
    </form>
  )
};

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

export default Dialogs;
