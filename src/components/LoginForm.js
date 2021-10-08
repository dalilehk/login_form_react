import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import eye_show from '../eye-show.svg';
import eye_hide from '../eye-hide.svg';

const validateEmail = (text) =>
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
    text
  );

const LoginForm = () => {
  const [isPasswordShowing, setIsPasswordShowing] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="log-in-form">
      <div className="log-in-form__element">
        <label htmlFor="email" className="log-in-form__label">
          Email
        </label>
        <input
          id="email"
          name="email"
          placeholder="example@mail.com"
          type="email"
          {...register('email', {
            required: 'This field is required',
            validate: (email) => validateEmail(email) || 'Wrong email',
          })}
        />
        <span className="alert">{errors.email && errors.email.message}</span>
      </div>
      <div className="log-in-form__element password">
        <label htmlFor="password" className="log-in-form__label">
          Password
        </label>
        <input
          id="password"
          name="password"
          placeholder="enter a password..."
          type={isPasswordShowing ? 'text' : 'password'}
          {...register('password', {
            required: 'Please provide password, at least 6 characters long',
            minLength: {
              value: 6,
              message: 'Your password is too short',
            },
          })}
        />

        <span className="alert">
          {errors.password && errors.password.message}
        </span>

        {/* SHOW / HIDE password */}
        <button
          className="btn-eye"
          onClick={() => setIsPasswordShowing(!isPasswordShowing)}
        >
          <img
            alt={isPasswordShowing ? 'hide password' : 'show password'}
            className="active"
            src={isPasswordShowing ? eye_hide : eye_show}
          />
        </button>
      </div>
      <div className="remember-pass-wrapper log-in-form__element">
        <input
          className="remember-me-checkbox"
          id="remember"
          name="remember"
          type="checkbox"
          {...register('remember')}
        />
        <label
          htmlFor="remember"
          className="remember-me-label log-in-form__label"
        >
          <span>Remember me</span>
        </label>
        <Link to="/forgot-password">Forgot password?</Link>
      </div>
      <input className="btn-login" type="submit" value="Login" />
    </form>
  );
};

export default LoginForm;
