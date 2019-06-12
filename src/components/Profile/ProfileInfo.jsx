import React from 'react';
import './ProfileInfo.css'
import Preloader from "../common/preloader/preloader.js";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }
  return (
      <div className="profileinfo">
        <section>
          <img src={props.profile.photos.large} alt=""/>
          <h3>{props.profile.fullName}</h3>
          <p>{props.profile.aboutMe}</p>
          {props.profile.lookingForAJob ? <p>Ищу работу</p> : <p>Не ищу работу</p>}
          <p>{props.profile.lookingForAJobDescription}</p>
          <ul>
            <li>{props.profile.contacts.facebook}</li>
            <li>{props.profile.contacts.website}</li>
            <li>{props.profile.contacts.vk}</li>
            <li>{props.profile.contacts.twitter}</li>
            <li>{props.profile.contacts.instagram}</li>
            <li>{props.profile.contacts.youtube}</li>
            <li>{props.profile.contacts.github}</li>
            <li>{props.profile.contacts.mainLink}</li>
          </ul>
        </section>
      </div>
    )
}

export default ProfileInfo;