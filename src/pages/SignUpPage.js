import logo from '../logo_svg.svg';
import { Link } from 'react-router-dom';
import SignUpForm from '../components/SignUpForm';

const SignUpPage = () => {
  return (
    <section className="sub-page-section sign-up">
      <div className="logo-wrapper">
        <Link to="/">
          <img className="logo" src={logo} alt="" />
        </Link>
      </div>
      <h1>
        Sign up to <span>OrgaFarm</span>
      </h1>
      <SignUpForm />
      <p className="already-a-member">
        Already a member? <Link to="/">Sign in</Link>
      </p>
    </section>
  );
};

export default SignUpPage;
