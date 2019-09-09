import React from 'react';
import './FormControl.css';

const FormControl = ({input, meta: {touched, error}, children}) => {
  const hasError = touched && error;
  return (
    <div className={'form__control' + ' ' + (hasError ? 'form__error' : '')}>
      {children}
      { hasError && <span className='form__span'>{error}</span> }
    </div>
  )
};

export const Textarea = (props) => {
  const {input, meta, child, ...restProps} = props;
  return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
};

export const Input = (props) => {
  const {input, meta, child, ...restProps} = props;
  return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
};