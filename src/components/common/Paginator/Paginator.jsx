import React, {useState} from 'react';
import './Paginator.css';

let Paginator = ({currentPage, totalItemsCount, pageSize, onPageChanged, portionSize = 10}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;


  return <div className='paginator__pages'>
    { portionNumber > 1
      ? <button className='paginator__button' onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button>
      : <button disabled className='paginator__button paginator__button--disabled'>PREV</button>
    }
    {pages
      .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
      .map(p => {
      return <span className={currentPage === p && 'paginator__selected-page'} key={p} onClick={(e) => {
        onPageChanged(p);
      }}>{p}</span>
    })}
    { portionCount > portionNumber
    &&
    <button className='paginator__button' onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button>
    }
  </div>
};

export default Paginator;