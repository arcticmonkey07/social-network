import React from 'react';
import './Login.css';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const maxLength10 = maxLengthCreator(10);

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className='login__form form'>
      <Field
        type="text"
        name={'login'}
        className='form__input'
        placeholder={'Login'}
        component={Input}
        validate={[required, maxLength10]}
      />
      <Field
        type="text"
        name={'password'}
        className='form__input'
        placeholder={'Password'}
        component={Input}
        validate={[required, maxLength10]}
      />
      <label className='form__input'>
        <Field
          type="checkbox"
          name={'rememberMe'}
          component={Input}
          validate={[required, maxLength10]}
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