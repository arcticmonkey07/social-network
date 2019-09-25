import React from 'react';
import {connect} from 'react-redux';
import './Login.css';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

const maxLength30 = maxLengthCreator(30);

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
  return (
    <form onSubmit={handleSubmit} className='login__form form'>
      <Field
        type="text"
        name={'email'}
        className='form__input'
        placeholder={'Login'}
        component={Input}
        validate={[required, maxLength30]}
      />
      <Field
        type="password"
        name={'password'}
        className='form__input'
        placeholder={'Password'}
        component={Input}
        validate={[required, maxLength30]}
      />
      <label className='form__input'>
        <Field
          type="checkbox"
          name={'rememberMe'}
          component={Input}
        />Remember me
      </label>

      { captchaUrl && <img src={captchaUrl} alt='captcha' />}
      { captchaUrl && <Field
          type="text"
          name={'captcha'}
          className='form__input'
          placeholder={'captcha'}
          component={Input}
          validate={[required, maxLength30]}
          />
      }

      <div className='form__error'>
        {error}
      </div>
      <button className='form__sumbit'>Login</button>
    </form>
  )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
  };

  if (props.isAuth) {
    return <Redirect to={'/profile'} />
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  )
};

const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login} )(Login);