import React from 'react';
import {NavLink} from 'react-router-dom';
import './Users.css';
import userPhoto from '../../assets/images/avatar.png';

let User = ({user, followingInProgress, unfollow, follow}) => {
  return <div className='users__item'>
        <div className='users__avatar-wrapper'>
          <NavLink to={'/profile/' + user.id}>
            <img src={ user.photos.small != null ? user.photos.small : userPhoto } alt="" />
          </NavLink>

          { user.followed
            ? <button disabled={followingInProgress.some(id => id === user.id)} className='users__button' onClick={ () => { unfollow(user.id); } }>Unfollow</button>

            : <button disabled={followingInProgress.some(id => id === user.id)} className='users__button' onClick={ () => { follow(user.id); } }>Follow</button>}

        </div>

        <div className='users__description-wrapper'>
          <div className='users__name-wrapper'>
            <h2 className='users__name'>{user.name}</h2>
            <p className='users__status'>{user.status}</p>
          </div>
          <div className='users__counrty-wrapper'>
            <p className='users__country'>{'user.location.country'},</p>
            <p className='users__city'>{'user.location.city'}</p>
          </div>
        </div>
      </div>
};

export default User;