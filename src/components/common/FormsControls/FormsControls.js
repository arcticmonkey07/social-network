import React from 'react';
import './FormControl.css';

const FormControl = ({input, meta, child, ...props}) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={'form__control' + ' ' + (hasError ? 'form__error' : '')}>
      {props.children}
      { hasError && <span className='form__span'>{meta.error}</span> }
    </div>
  )
}

export const Textarea = (props) => {
  const {input, meta, child, ...restProps} = props;
  return <FormControl {...props}><input {...input} {...restProps}></input></FormControl>
}

export const Input = (props) => {
  const {input, meta, child, ...restProps} = props;
  return <FormControl {...props}><input {...input} {...restProps}></input></FormControl>
}