import logo from '../logo_svg.svg';
import { Link } from 'react-router-dom';
const ErrorPage = () => {
  return (
    <section className="sub-page-section">
      <div className="logo-wrapper">
        <Link to="/">
          <img className="logo" src={logo} alt="" />
        </Link>
      </div>
      <h1>Oooops! Page not Found </h1>
    </section>
  );
};
export default ErrorPage;
