import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { login } from '../actions/auth';

class Login extends Component {
	submit = (data) => {
		this.props.login(data).then(() => this.props.history.push('/'));
	};

	render() {
		return (
			<div>
				<h1>Login</h1>
				<Link to="/">homepage</Link>
				<LoginForm submit={this.submit} />
			</div>
		);
	}
}

export default connect(null, { login })(Login);
