import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Forms.css';
import { useForm } from 'react-hook-form';
import eye_show from '../eye-show.svg';
import eye_hide from '../eye-hide.svg';

const validateEmail = (text) =>
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
    text
  );

const SignUpForm = () => {
  const [isPasswordShowing, setIsPasswordShowing] = useState();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const password = useRef({});
  password.current = watch('password', '');

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="sign-up-form" noValidate>
      <div type="text" className="sign-up-form__element">
        <label htmlFor="name" className="sign-up-form__label">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Joe"
          {...register('name', {
            required: 'This field is required',
          })}
        />

        <span className="alert">{errors.name && errors.name.message}</span>
      </div>
      <div type="email" className="sign-up-form__element">
        <label htmlFor="email" className="sign-up-form__label">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="joe@mail.com"
          {...register('email', {
            required: 'This field is required',
            validate: (email) => validateEmail(email) || 'Wrong email',
          })}
        />
        <span className="alert">{errors.email && errors.email.message}</span>
      </div>
      <div type="password" className="sign-up-form__element">
        <label htmlFor="password" className="sign-up-form__label">
          Password
        </label>
        <input
          type={isPasswordShowing ? 'text' : 'password'}
          name="password"
          id="password"
          placeholder="at least 6 characters"
          {...register('password', {
            required: 'Please provide password, at least 6 characters long',
            minLength: {
              value: 6,
              message: 'Password must be have at least 6 characters',
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
      <div type="password" className="sign-up-form__element password">
        <label htmlFor="confirm-password" className="sign-up-form__label">
          Repeat Password
        </label>
        <input
          type={isPasswordShowing ? 'text' : 'password'}
          name="password_repeat"
          id="password_repeat"
          placeholder="repeat password"
          {...register('password_repeat', {
            required: 'You must to repeat your password',
            validate: (value) =>
              value === password.current || 'The passwords do not match',
          })}
        />
        <span className="alert">
          {errors.password_repeat && errors.password_repeat.message}
        </span>
      </div>
      <div type="checkbox" className="sign-up-form__element terms-accept">
        <input
          type="checkbox"
          name="terms_accept"
          id="terms_accept"
          {...register('terms_accept', {
            required:
              'To create an account, you must accept our Terms of Conditions and Privacy Policy',
          })}
        />
        <label htmlFor="terms_accept" className="sign-up-form__label">
          <p className="terms-accept">
            {' '}
            Creating an account means you're okay with our{' '}
            <Link to="/terms-and-conditions">
              {' '}
              Terms and conditions
            </Link> and <Link to="/privacy-policy">Privacy Policy</Link>
          </p>
        </label>
      </div>
      <span className="alert">
        {errors.terms_accept && errors.terms_accept.message}
      </span>
      <div type="submit" className="sign-up-form__element">
        <input
          type="submit"
          value="Create Account"
          className="sign-up-form__element-submit"
        />
      </div>
    </form>
  );
};

export default SignUpForm;
