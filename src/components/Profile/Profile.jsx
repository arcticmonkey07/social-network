import React from 'react';
import MyPosts from './MyPosts/MyPosts.jsx'
import ProfileInfo from './ProfileInfo.jsx'
import './Profile.css'

const Profile = (props) => {

  return (
      <main className="profile">
        <ProfileInfo />
        <MyPosts posts={props.profilePage.posts}
                 newPostText={props.profilePage.newPostText}
                 addPost={props.addPost}
                 updateNewPostText={props.updateNewPostText}/>
      </main>
    )
}

export default Profile;
