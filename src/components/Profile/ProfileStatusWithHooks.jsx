import React, {useState} from 'react';

const ProfileStatusWithHooks = (props) => {

  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deActivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div>
      { !editMode &&
        <div className="profile__status">
          <span onDoubleClick={activateEditMode}>{props.status || 'no status'}</span>
        </div>
      }
      {editMode &&
        <div>
          <input onChange={onStatusChange} onBlur={deActivateEditMode} value={status} autoFocus={true} />
        </div>
      }
      </div>
    )
};

export default ProfileStatusWithHooks;