import React, {useEffect, useState} from 'react';
import './ProfileStatus.css';

const ProfileStatusWithHooks = (props) => {

  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect( () => {
    setStatus(props.status);
  }, [props.status] );

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deActivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      setEditMode(false);
      props.updateStatus(status);
    }
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  const noStatus = () => {
    return <span className='profile__no-status'>изменить статус</span>
  };

  return (
    <div className="profile__status">
      { !editMode &&
        <span
          onClick={activateEditMode}
          className='profile__status-show'
        >{props.status || noStatus()}</span>
      }
      {editMode &&
        <input
          onKeyDown={handleKeyDown}
          onChange={onStatusChange}
          onBlur={deActivateEditMode}
          value={status}
          autoFocus={true}
          className='profile__status-input'
        />
      }
      </div>
    )
};

export default ProfileStatusWithHooks;