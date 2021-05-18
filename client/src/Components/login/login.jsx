import React, { Component } from 'react'
import './login.css'
import {BrowserRouter as Redirect} from 'react-router-dom';
class Login extends Component {
    constructor (props) {
        super(props);
        this.state = {
          users : [],
          username : '',
          password : '',
          loginFail : false,
          name : '',
          email: '',
          passwordIn :'',
          repeatPassword:'',
			    success: false
        }
    }

    componentDidMount () {
      fetch('http://localhost/ISVietNam/api/user')
            .then(response => response.json())
            .then(json => {
                const users = json.response.users.rows;
                this.setState({ users : users})
                
            })
    }
    
    handleChange = (event) => {
      console.log(event.target.value);
      if (event.target.name === 'user') this.setState({username: event.target.value});
      if (event.target.name === 'password')  this.setState({password: event.target.value}); 
      if (event.target.name === 'name') this.setState({name : event.target.value});
      if (event.target.name === 'email') this.setState({name : event.target.value});
      if (event.target.name === 'passwordIn') this.setState({name : event.target.value});
      if (event.target.name === 'repeatPassword') this.setState({name : event.target.value})
    }

    onSignUp () {
      var user = this.state.username;
		  var password = this.state.password;
		  const data = {user:user, password: password};
      if (data === this.state.users.filter(user => user === data) )
          {this.setState({success : true})}
          else{
            this.setState({
              loginFailed: true
            });
          }
    }

    onSignIn () {
      var name = this.state.name;
      var email = this.state.email;
      var password = this.state.password;
      var data = {name: name, email: email, password : password}
      fetch('https://example.com/profile', {
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

    handleSignUp () {
        document.getElementById("container").classList.add("right-panel-active")
    }

    handleSignIn () {
      document.getElementById("container").classList.remove("right-panel-active")
    }

    render () {
        
        return(
            <div className= 'page-sign' >
               <div className="container container-sign" id="container">
                  <div className="form-container sign-up-container">
                        {this.state.loginFailed ? 
                        <div className="alert alert-danger" role="alert">
                            Tài khoản/Mật khẩu không hợp lệ!
                        </div> : ''
                        }
                        {this.state.success ? 
                          <div className="alert alert-success" role="alert">
                            <Redirect to='/home' />
                            </div> : ''
                          }
                    <form action="/">
                      <h1>Create Account</h1>
                      <div className="social-container">
                        <a href="/" className="social"><i className="fab fa-facebook-f" /></a>
                        <a href="/" className="social"><i className="fab fa-google-plus-g" /></a>
                        <a href="/" className="social"><i className="fab fa-linkedin-in" /></a>
                      </div>
                      <span>or use your email for registration</span>
                      <input className='input-login' type="name" placeholder="Name" onChange={this.handleChange}/>
                      <input className='input-login' type="email" placeholder="Email" onChange={this.handleChange}/>
                      <input className='input-login' type="passwordIn" placeholder="Password" onChange={this.handleChange} />
                      <input className='input-login' type="repeatPassword" placeholder="RepeatPassword" onChange={this.handleChange} />
                      <button className='button-form-login' onClick = {this.onSignUp} >Sign Up</button>
                    </form>
                  </div>
                  <div className="form-container sign-in-container">
                    <form action="/">
                      <h1>Sign in</h1>
                      <div className="social-container">
                        <a href="/" className="social"><i className="fab fa-facebook-f" /></a>
                        <a href="/" className="social"><i className="fab fa-google-plus-g" /></a>
                        <a href="/" className="social"><i className="fab fa-linkedin-in" /></a>
                      </div>
                      <span>or use your account</span>
                      <input className='input-login' type="user" placeholder="Email" onChange={this.handleChange}/>
                      <input className='input-login' type="password" placeholder="Password" onChange={this.handleChange}/>
                      <a href="/">Forgot your password?</a>
                      <button className='button-form-login' onClick= {this.onSignIn} >Sign In</button>
                    </form>
                  </div>

                  <div className="overlay-container">
                    <div className="overlay">
                      <div className="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button className= 'ghost button-form-login' id='signUp' onClick={this.handleSignIn}>Sign In</button>
                      </div>
                      <div className="overlay-panel overlay-right">
                        <h1>Hello, Friend!</h1>
                        <p>Enter your personal details and start journey with us</p>
                        <button className="ghost button-form-login" id="signUp" onClick = {this.handleSignUp}>Sign Up</button>
                      </div>
                    </div>
                  </div>
                </div>
 
            </div>
        );
    }
}

export default Login ;
