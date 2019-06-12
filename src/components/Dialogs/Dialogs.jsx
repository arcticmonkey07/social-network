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

  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} key={d.id} id={d.id} /> );
  let messagesElements = state.messages.map ( m => <Message message={m.message} key={m.id} /> );
  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  }

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  }

  return (
      <section className="dialogs">
        <ul className="dialogs__names-list">
          { dialogsElements }
        </ul>
        <ul className="dialogs__messages-list">
          <div>{ messagesElements }</div>
          <div>
            <div>
              <textarea 
                value={newMessageBody} 
                onChange={onNewMessageChange}
                placeholder="Enter your message"
              ></textarea>
            </div>
            <div>
              <button onClick={onSendMessageClick}>Send</button>
            </div>
          </div>
        </ul>
      </section>
    )
}

export default Dialogs;
