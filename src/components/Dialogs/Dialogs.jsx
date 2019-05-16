import React from 'react';
import './Dialogs.css';
import {NavLink} from 'react-router-dom';

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

  let dialogsElements = 
    props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id} /> );


  let messagesElements = 
    props.state.messages.map ( m => <Message message={m.message}/> );

  return (
      <section className="dialogs">
        <ul className="dialogs__names-list">
          { dialogsElements }
        </ul>
        <ul className="dialogs__messages-list">
          { messagesElements }
        </ul>
      </section>
    )
}

export default Dialogs;
