import React from 'react';
import './Users.css';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {
  return <section className='users'>
    <Paginator
      currentPage={currentPage}
      onPageChanged={onPageChanged}
      totalItemsCount={totalUsersCount}
      pageSize={pageSize}
    />
    {
      users.map( u => <User
        user={u}
        followingInProgress={props.followingInProgress}
        unfollow={props.unfollow}
        follow={props.follow}
        key={u.id}
      />)
  }
  </section>
};

export default Users;