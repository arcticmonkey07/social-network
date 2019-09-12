import React from 'react';
import avatar from './../../img/ava.jpg';
import './Dialog.css';

const Dialog = (props) => {
  return (
    <div className='dialog'>
      <img className='dialog__avatar' src={avatar} alt="dialog-avatar"/>
      <div className='dialog__message-container'>
        <p className='dialog__name'>{props.name}</p>
        <p className='dialog__message'>{props.message}</p>
      </div>
    </div>
  )
};

export default Dialog;