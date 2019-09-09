import React from 'react';
import './Paginator.css';

let Paginator = ({currentPage, totalUsersCount, pageSize, onPageChanged}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return <div className='paginator__pages'>
    {pages.map(p => {
      return <span className={currentPage === p && 'paginator__selected-page'} key={p} onClick={(e) => {
        onPageChanged(p);
      }}>{p}</span>
    })}
  </div>
};

export default Paginator;