import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer.jsx'
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx'
import './Profile.css'

const Profile = (props) => {

  return (
      <main className="profile">
        <ProfileInfo
          savePhoto={props.savePhoto}
          isOwner={props.isOwner}
          profile={props.profile}
          status={props.status}
          updateStatus={props.updateStatus}
          saveProfile={props.saveProfile}
        />
        <MyPostsContainer  />
      </main>
    )
};

export default Profile;
