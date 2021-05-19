import React, { Component } from 'react'
import './login.css'
class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [],
			username: '',
			password: '',
			loginFail: false,
			name: '',
			email: '',
			passwordUp: '',
			repeatPassword: '',
			success: false
		}
	}

	handleChange = (event) => {
		console.log(event.target.value);
		if (event.target.name === 'user') this.setState({ username: event.target.value });
		if (event.target.name === 'password') this.setState({ password: event.target.value });
		if (event.target.name === 'name') this.setState({ name: event.target.value });
		if (event.target.name === 'email') this.setState({ email: event.target.value });
		if (event.target.name === 'passwordUp') this.setState({ passwordUp: event.target.value });
		if (event.target.name === 'repeatPassword') this.setState({ repeatPassword: event.target.value })
	}
	onSignIn = (e) => {
		e.preventDefault();
		const { history } = this.props;
		var user = this.state.username;
		var password = this.state.password;
		var email = this.state.email;
		const data = { username: user, password: password, user_email: email }
		console.log(data);
		fetch('http://localhost/ISVietNam/api/validate', {
			method: 'POST', // or 'PUT'
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			// .then(response => response.json())
			.then(res => {
				console.log(res)
				if (!res.ok) {
					alert('Failed')
				}
				else {
					history.push('/')
				}
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	}

	onSignUp = (e) => {
		e.preventDefault()
		var name = this.state.name;
		var email = this.state.email;
		var password = this.state.passwordUp;
		var data = { username: name, password: password, user_email: email }

		fetch('http://localhost/ISVietNam/api/register', {
			method: 'POST', // or 'PUT'
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then(response => response.json())
			.then(data => {
				console.log('Success:', data);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	}

	handleSignUp() {
		document.getElementById("container").classList.add("right-panel-active")
	}

	handleSignIn() {
		document.getElementById("container").classList.remove("right-panel-active")
	}

	render() {

		return (
			<div className='page-sign' >
				<div className="container container-sign" id="container">
					<div className="form-container sign-up-container">
						<form onSubmit={this.onSignUp}>
							<h1>Create Account</h1>
							<div className="social-container">
								<a href="/" className="social"><i className="fab fa-facebook-f" /></a>
								<a href="/" className="social"><i className="fab fa-google-plus-g" /></a>
								<a href="/" className="social"><i className="fab fa-linkedin-in" /></a>
							</div>
							<span>or use your email for registration</span>
							<input className='input-login' name='name' type="text" placeholder="Name" onChange={this.handleChange} />
							<input className='input-login' name='email' type="email" placeholder="Email" onChange={this.handleChange} />
							<input className='input-login' name='passwordUp' type="text" placeholder="Password" onChange={this.handleChange} />
							<input className='input-login' name='repeatPassword' type="text" placeholder="RepeatPassword" onChange={this.handleChange} />
							<button className='button-form-login' >Sign Up</button>
						</form>
					</div>
					<div className="form-container sign-in-container">
						<form onSubmit={this.onSignIn}>
							<h1>Sign in</h1>
							<div className="social-container">
								<a href="/" className="social"><i className="fab fa-facebook-f" /></a>
								<a href="/" className="social"><i className="fab fa-google-plus-g" /></a>
								<a href="/" className="social"><i className="fab fa-linkedin-in" /></a>
							</div>
							<span>or use your account</span>
							<input className='input-login' required name='user' type="user" placeholder="User" onChange={this.handleChange} />
							<input className='input-login' required name='password' type="password" placeholder="Password" onChange={this.handleChange} />
							<a href="/">Forgot your password?</a>
							<button className='button-form-login'>Sign In</button>
						</form>
					</div>
					<div className="overlay-container">
						<div className="overlay">
							<div className="overlay-panel overlay-left">
								<h1>Welcome Back!</h1>
								<p>To keep connected with us please login with your personal info</p>
								<button className='ghost button-form-login' id='signUp' onClick={this.handleSignIn}>Sign In</button>
							</div>
							<div className="overlay-panel overlay-right">
								<h1>Hello, Friend!</h1>
								<p>Enter your personal details and start journey with us</p>
								<button className="ghost button-form-login" id="signUp" onClick={this.handleSignUp}>Sign Up</button>
							</div>
						</div>
					</div>
				</div>

			</div>
		);
	}
}

export default Login;
