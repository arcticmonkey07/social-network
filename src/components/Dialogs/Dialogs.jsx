import React from 'react';
import './Dialogs.css';
import {NavLink, Redirect} from 'react-router-dom';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {required, maxLengthCreator} from '../../utils/validators/validators.js';

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <li className="dialogs__name">
      <NavLink className="dialogs__link" activeClassName="dialogs__active" to={path}>{props.name}</NavLink>
    </li>
  )
}

const Message = (props) => {
  return (
    <li className="dialogs__message">{props.message}</li>
  )
}

const Dialogs = (props) => {

  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} key={d.id} id={d.id} /> );
  let messagesElements = state.messages.map ( m => <Message message={m.message} key={m.id} /> );

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  }

  if (!props.isAuth) return <Redirect to={'/login'} />;

  return (
      <section className="dialogs">
        <ul className="dialogs__names-list">
          { dialogsElements }
        </ul>
        <ul className="dialogs__messages-list">
          <div>{ messagesElements }</div>
          <AddMessageFormRedux onSubmit={addNewMessage} />
        </ul>
      </section>
    )
}

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          validate={[required, maxLength50]}
          name='newMessageBody'
          placeholder='Enter your message'
        />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

export default Dialogs;
