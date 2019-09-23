import React, {useState} from 'react';
import './ProfileInfo.css'
import Preloader from "../../common/preloader/preloader.js";
import avatar from '../../../assets/images/avatar.png';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

  let [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader/>
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData) => {
    saveProfile(formData).then(
      () => {
        setEditMode(false);
      }
    );
  };

  return (
      <section className="profile__info info">
        <div className='info__avatar'>
          { profile.photos.large ? <img src={profile.photos.large} className='info__avatar-img' alt="avatar"/> : <img src={avatar} className='info__avatar-img' alt="avatar"/> }
          {isOwner &&
            <div className='info__avatar-change-container'>
              <label className='info__avatar-change-label'>
                Обновить фотографию
                <input className='visually-hidden' onChange={onMainPhotoSelected} type="file"/>
              </label>
            </div>
          }
        </div>
        { editMode
          ? <ProfileDataForm
              initialValues={profile}
              profile={profile}
              status={status}
              updateStatus={updateStatus}
              onSubmit={onSubmit}
            />
          : <ProfileData
              goToEditMode={() => {setEditMode(true)}}
              profile={profile}
              status={status}
              updateStatus={updateStatus}
              isOwner={isOwner}
            /> }
      </section>
    )
};

const ProfileData = ({profile, status, updateStatus, isOwner, goToEditMode}) => {
  return (
    <div className='info__description'>
      <div className='info__description-top'>
        <div className='info__name-container'>
          <h3 className='info__name'>{profile.fullName}</h3>
          { isOwner && <button onClick={goToEditMode} className='info__edit-button'>Edit Profile</button> }
        </div>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
      </div>
      <div className='info__sections'>
        <p className='info__info-headers'>Обо мне:</p>
        <p className='info__info-answers'>{profile.aboutMe}</p>
      </div>
      <div className='info__sections'>
        <p className='info__info-headers'>Работа:</p>
        {profile.lookingForAJob ? <p className='info__info-answers'>Ищу работу</p> : <p className='info__info-answers'>Не ищу работу</p>}
      </div>
      <div className='info__sections'>
        <p className='info__info-headers'>О работе:</p>
        <p className='info__info-answers'>{profile.lookingForAJobDescription}</p>
      </div>
      {/*<div className='info__social'>*/}
        {/*{ profile.contacts.facebook ? <a className='info__link' href={profile.contacts.facebook}>{profile.contacts.facebook}</a> : <></>}*/}
        {/*{ profile.contacts.website ? <a className='info__link' href={profile.contacts.website}>{profile.contacts.website}</a> : <></>}*/}
        {/*{ profile.contacts.vk ? <a className='info__link' href={profile.contacts.vk}>{profile.contacts.vk}</a> : <></>}*/}
        {/*{ profile.contacts.twitter ? <a className='info__link' href={profile.contacts.twitter}>{profile.contacts.twitter}</a> : <></>}*/}
        {/*{ profile.contacts.instagram ? <a className='info__link' href={profile.contacts.instagram}>{profile.contacts.instagram}</a> : <></>}*/}
        {/*{ profile.contacts.youtube ? <a className='info__link' href={profile.contacts.youtube}>{profile.contacts.youtube}</a> : <></>}*/}
        {/*{ profile.contacts.github ? <a className='info__link' href={profile.contacts.github}>{profile.contacts.github}</a> : <></>}*/}
        {/*{ profile.contacts.mainLink ? <a className='info__link' href={profile.contacts.mainLink}>{profile.contacts.mainLink}</a> : <></>}*/}
      {/*</div>*/}
      {Object.keys(profile.contacts).map(key => {
        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
      })}
    </div>
  )
};

const Contact = ({contactTitle, contactValue}) => {
  return (
    <div>
      <b>{contactTitle}:</b>
      <a className='info__link' href={contactValue}>{contactValue}</a>
    </div>
  )
};

export default ProfileInfo;