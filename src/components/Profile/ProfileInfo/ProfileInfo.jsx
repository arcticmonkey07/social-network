import React from 'react';
import './ProfileInfo.css'
import Preloader from "../../common/preloader/preloader.js";
import avatar from '../../../assets/images/avatar.png';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {

  if (!profile) {
    return <Preloader/>
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
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
        <div className='info__description'>
          <div className='info__description-top'>
            <h3 className='info__name'>{profile.fullName}</h3>
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
          <div className='info__social'>
            { profile.contacts.facebook ? <a className='info__link' href={profile.contacts.facebook}>{profile.contacts.facebook}</a> : <></>}
            { profile.contacts.website ? <a className='info__link' href={profile.contacts.website}>{profile.contacts.website}</a> : <></>}
            { profile.contacts.vk ? <a className='info__link' href={profile.contacts.vk}>{profile.contacts.vk}</a> : <></>}
            { profile.contacts.twitter ? <a className='info__link' href={profile.contacts.twitter}>{profile.contacts.twitter}</a> : <></>}
            { profile.contacts.instagram ? <a className='info__link' href={profile.contacts.instagram}>{profile.contacts.instagram}</a> : <></>}
            { profile.contacts.youtube ? <a className='info__link' href={profile.contacts.youtube}>{profile.contacts.youtube}</a> : <></>}
            { profile.contacts.github ? <a className='info__link' href={profile.contacts.github}>{profile.contacts.github}</a> : <></>}
            { profile.contacts.mainLink ? <a className='info__link' href={profile.contacts.mainLink}>{profile.contacts.mainLink}</a> : <></>}
          </div>
        </div>
      </section>
    )
}

export default ProfileInfo;