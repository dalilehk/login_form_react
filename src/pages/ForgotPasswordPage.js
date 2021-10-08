import logo from '../logo_svg.svg';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import '../styles/ForgotPassword.css';

const validateEmail = (text) =>
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
    text
  );

const ForgotPasswordPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const success = true;
    return success;
  };

  return (
    <section className="sub-page-section">
      <div className="logo-wrapper">
        <Link to="/login_form_react">
          <img className="logo" src={logo} alt="" />
        </Link>
      </div>
      <div className="forgot-password-wrapper">
        <h1>Forgot password?</h1>
        <div className="password-instructions">
          <p>
            Enter the email address you used when you joined and we’ll send you
            instructions to reset your password.
          </p>
          <p>
            For security reasons, we do NOT store your password. So rest assured
            that we will never send your password via email.
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="forgot-password-form"
          noValidate
        >
          <div type="email" className="forgot-password__element">
            <label htmlFor="email" className="forgot-password-label">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@mail.com"
              {...register('email', {
                required: 'This field is required',
                validate: (email) => validateEmail(email) || 'Wrong email',
              })}
            />
            <span className="alert">
              {errors.email && errors.email.message}
            </span>
          </div>
          <div type="submit" className="forgot-password__element">
            <input
              type="submit"
              value="Send Reset Instructions"
              className="btn-send-reset"
            />
          </div>
        </form>
        {/* <span className="alert">{success && `udalo sie`}</span> */}
      </div>
    </section>
  );
};
export default ForgotPasswordPage;
