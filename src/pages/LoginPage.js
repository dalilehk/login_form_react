// import React, { Component } from 'react';
import logo from '../logo_svg.svg';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  return (
    <section className="login-section">
      <div className="logo-wrapper">
        <Link to="/">
          <img className="logo" src={logo} alt="Logo OrgaFarm" />
        </Link>
      </div>
      <h1>
        Welcome back to <span>OrgaFarm</span>
      </h1>

      <LoginForm />
      <p className="sign-up">
        Don't have an account? <Link to="/sign-up">Sign up</Link>
      </p>
      <p className="terms-accept">
        By clickling the button above, you agree to our{' '}
        <Link to="/terms-and-conditions"> Terms and conditions</Link> and{' '}
        <Link to="/privacy-policy">Privacy Policy</Link>
      </p>
    </section>
  );
};

export default LoginPage;
