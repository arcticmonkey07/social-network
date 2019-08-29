import React from 'react';
import './Login.css';
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className='login__form form'>
      <Field
        type="text"
        name={'login'}
        className='form__input'
        placeholder={'Login'}
        component={'input'}
      />
      <Field
        type="text"
        name={'password'}
        className='form__input'
        placeholder={'Password'}
        component={'input'}
      />
      <label className='form__input'>
        <Field
          type="checkbox"
          name={'rememberMe'}
          component={'input'}
        />Remember me
      </label>
      <button className='form__sumbit'>Login</button>
    </form>
  )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  )
}

export default Login;