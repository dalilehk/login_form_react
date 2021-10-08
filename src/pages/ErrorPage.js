import logo from '../logo_svg.svg';
import { Link } from 'react-router-dom';
const ErrorPage = () => {
  return (
    <section className="sub-page-section">
      <div className="logo-wrapper">
        <Link to="/login_form_react">
          <img className="logo" src={logo} alt="Logo OrgaFarm" />
        </Link>
      </div>
      <h1>Oooops! Page not Found </h1>
      <button className="btn-back-home">
        <Link to="/login_form_react">Back to home</Link>
      </button>
    </section>
  );
};
export default ErrorPage;
