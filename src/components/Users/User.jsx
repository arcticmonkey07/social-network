import React from 'react';
import {NavLink} from 'react-router-dom';
import './User.css';
import userPhoto from '../../assets/images/avatar.png';

let User = ({user, followingInProgress, unfollow, follow}) => {
  return <div className='user'>
            <NavLink to={'/profile/' + user.id}>
              <img className='user__avatar' src={ user.photos.small != null ? user.photos.small : userPhoto } alt="" />
            </NavLink>
            <div className='user__name-container'>
              <h2 className='user__name'>{user.name}</h2>
              <p className='user__status'>{user.status}</p>
            </div>
          </div>

          /*{ user.followed
            ? <button disabled={followingInProgress.some(id => id === user.id)} className='users__button' onClick={ () => { unfollow(user.id); } }>Unfollow</button>

            : <button disabled={followingInProgress.some(id => id === user.id)} className='users__button' onClick={ () => { follow(user.id); } }>Follow</button>}*/
};

export default User;