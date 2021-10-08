import PictureSection from './components/PictureSection';
import LoginPage from './pages/LoginPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import SignUpPage from './pages/SignUpPage';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import ErrorPage from './pages/ErrorPage';
import './styles/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <main className="main">
        <div className="wrapper">
          <PictureSection />
          <Switch>
            <Route path="/login_form_react" exact component={LoginPage} />
            <Route
              path="/forgot-password"
              exact
              component={ForgotPasswordPage}
            />
            <Route path="/sign-up" exact component={SignUpPage} />
            <Route
              path="/terms-and-conditions"
              exact
              component={TermsAndConditionsPage}
            />
            <Route path="/privacy-policy" exact component={PrivacyPolicyPage} />
            <Route component={ErrorPage} />
          </Switch>
        </div>
      </main>
    </Router>
  );
}

export default App;
