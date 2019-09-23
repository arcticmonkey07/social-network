import React from 'react';
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileDataForm = ({profile, handleSubmit, status, updateStatus, error}) => {
  return (
    <form onSubmit={handleSubmit} className='info__description'>
      <div className='info__description-top'>
        <div className='info__name-container'>
          <h3 className='info__name'>{ createField('Full Name', 'fullName', [], Input) }</h3>
          <button className='info__edit-button'>Save</button>
        </div>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        <div className='form__error'>
          {error}
        </div>
      </div>
      <div className='info__sections'>
        <p className='info__info-headers'>Обо мне:</p>
        <div className='info__info-answers'>{ createField('Обо мне', 'aboutMe', [], Textarea) }</div>
      </div>
      <div className='info__sections'>
        <p className='info__info-headers'>Работа:</p>
        { createField('', 'lookingForAJob', [], Input, {type: 'checkbox'}) }
      </div>
      <div className='info__sections'>
        <p className='info__info-headers'>О работе:</p>
        <div className='info__info-answers'>{ createField('О работе:', 'lookingForAJobDescription', [], Textarea)}</div>
      </div>
      <div>
        {Object.keys(profile.contacts).map(key => {
          return (
            <div key={key}>{key}: { createField(key, 'contacts.' + key, [], Input) }</div>
          )
        })}
      </div>
    </form>
  )
};

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;