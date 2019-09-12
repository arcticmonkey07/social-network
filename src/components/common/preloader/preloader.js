import React from 'react';
import './preloader.css';
import preloader from '../../../assets/images/preloader.svg';

let Preloader = (props) => {
  return <img className='preloader' src={preloader} alt=''/>
}

export default Preloader;