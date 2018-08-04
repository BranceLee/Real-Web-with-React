import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import Homepage from '../src/components/Homepage';
import Login from '../src/components/login/Login';
import SignUpPage from '../src/components/signUp/SignUpPage';
import Dashboard from '../src/components/Dashboard';
import UserRoute from '../src/components/routes/UserRoute';
import GuestRoute from '../src/components/routes/GuestRoute';
import VerifyEmailPage from '../src/components/login/VerifyEmailPage';
import ResetPasswordPage from '../src/components/pages/ResetPasswordPage';
import ForgotPasswordPage from '../src/components/pages/ForgotPasswordPage';

class App extends Component {
	render() {
		const { location } = this.props;
		return (
			<div className="ui container">
				<Route location={location} exact path="/" component={Homepage} />
				<GuestRoute location={location} exact path="/login" component={Login} />
				<GuestRoute location={location} exact path="/signup" component={SignUpPage} />
				{/* <GuestRoute location={location} exact path="/forgot_password" component={ResetPasswordPage} /> */}
				<UserRoute location={location} exact path="/dashboard" component={Dashboard} />
				<Route location={location} exact path="/confirmation/:confirmationToken" component={VerifyEmailPage} />
				<GuestRoute location={location} exact path="/forgot_password" component={ForgotPasswordPage} />
				<Route location={location} exact path="/resetpassword_confirm/:email/:token" component={ResetPasswordPage} />
			</div>
		);
	}
}

export default App;
