import React from 'react';
import './ProfileInfo.css'
import Preloader from "../common/preloader/preloader.js";
import avatar from '../../assets/images/avatar.png';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {
  if (!profile) {
    return <Preloader/>
  }
  return (
      <div className="profileinfo">
        <section>
          { profile.photos.large ? <img src={profile.photos.large} alt="avatar"/> : <img src={avatar} alt="avatar"/> }
          <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
          <h3>{profile.fullName}</h3>
          <p>{profile.aboutMe}</p>
          {profile.lookingForAJob ? <p>Ищу работу</p> : <p>Не ищу работу</p>}
          <p>{profile.lookingForAJobDescription}</p>
          <ul>
            { profile.contacts.facebook ? <li>{profile.contacts.facebook}</li> : <div></div>}
            { profile.contacts.website ? <li>{profile.contacts.website}</li> : <div></div>}
            { profile.contacts.vk ? <li>{profile.contacts.vk}</li> : <div></div>}
            { profile.contacts.twitter ? <li>{profile.contacts.twitter}</li> : <div></div>}
            { profile.contacts.instagram ? <li>{profile.contacts.instagram}</li> : <div></div>}
            { profile.contacts.youtube ? <li>{profile.contacts.youtube}</li> : <div></div>}
            { profile.contacts.github ? <li>{profile.contacts.github}</li> : <div></div>}
            { profile.contacts.mainLink ? <li>{profile.contacts.mainLink}</li> : <div></div>}
          </ul>
        </section>
      </div>
    )
}

export default ProfileInfo;