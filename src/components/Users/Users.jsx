import React from 'react';
import {NavLink} from 'react-router-dom';
import './Users.css';
import userPhoto from '../../assets/images/avatar.png';

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i=1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return <section className='users'>
    <div>
      {pages.map( p => {
        return <span className={props.currentPage === p && 'selectedPage' } key={p} onClick={(e) => { props.onPageChanged(p); }}>{p}</span>
      })}
    </div>
    {
      props.users.map( u => <div className='users__wrapper' key={u.id}>
        <div className='users__avatar-wrapper'>
          <NavLink to={'/profile/' + u.id}>
            <img src={ u.photos.small != null ? u.photos.small : userPhoto } alt="" />
          </NavLink>

          { u.followed
            ? <button disabled={props.followingInProgress.some(id => id === u.id)} className='users__button' onClick={ () => { props.unfollow(u.id); } }>Unfollow</button>

            : <button disabled={props.followingInProgress.some(id => id === u.id)} className='users__button' onClick={ () => { props.follow(u.id); } }>Follow</button>}

        </div>

        <div className='users__description-wrapper'>
          <div className='users__name-wrapper'>
            <h2 className='users__name'>{u.name}</h2>
            <p className='users__status'>{u.status}</p>
          </div>
          <div className='users__counrty-wrapper'>
            <p className='users__country'>{'u.location.country'},</p>
            <p className='users__city'>{'u.location.city'}</p>
          </div>
        </div>
      </div>)
    }
  </section>
}

export default Users;