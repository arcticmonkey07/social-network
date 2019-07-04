import React from 'react';
import './ProfileInfo.css'
import Preloader from "../common/preloader/preloader.js";
import avatar from '../../assets/images/avatar.png';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }
  return (
      <div className="profileinfo">
        <section>
          { props.profile.photos.large ? <img src={props.profile.photos.large} alt="avatar"/> : <img src={avatar} alt="avatar"/> }
          <ProfileStatus status={"Hello my friends"}/>
          <h3>{props.profile.fullName}</h3>
          <p>{props.profile.aboutMe}</p>
          {props.profile.lookingForAJob ? <p>Ищу работу</p> : <p>Не ищу работу</p>}
          <p>{props.profile.lookingForAJobDescription}</p>
          <ul>
            { props.profile.contacts.facebook ? <li>{props.profile.contacts.facebook}</li> : <div></div>}
            { props.profile.contacts.website ? <li>{props.profile.contacts.website}</li> : <div></div>}
            { props.profile.contacts.vk ? <li>{props.profile.contacts.vk}</li> : <div></div>}
            { props.profile.contacts.twitter ? <li>{props.profile.contacts.twitter}</li> : <div></div>}
            { props.profile.contacts.instagram ? <li>{props.profile.contacts.instagram}</li> : <div></div>}
            { props.profile.contacts.youtube ? <li>{props.profile.contacts.youtube}</li> : <div></div>}
            { props.profile.contacts.github ? <li>{props.profile.contacts.github}</li> : <div></div>}
            { props.profile.contacts.mainLink ? <li>{props.profile.contacts.mainLink}</li> : <div></div>}
          </ul>
        </section>
      </div>
    )
}

export default ProfileInfo;