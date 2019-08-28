import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer.jsx'
import ProfileInfo from './ProfileInfo.jsx'
import './Profile.css'

const Profile = (props) => {

  return (
      <main className="profile">
        <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
        <MyPostsContainer  />
      </main>
    )
}

export default Profile;
