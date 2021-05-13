import React, { Component } from 'react'
import './login.css'

class Login extends Component {
    
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
                    <form action="/">
                      <h1>Create Account</h1>
                      <div className="social-container">
                        <a href="/" className="social"><i className="fab fa-facebook-f" /></a>
                        <a href="/" className="social"><i className="fab fa-google-plus-g" /></a>
                        <a href="/" className="social"><i className="fab fa-linkedin-in" /></a>
                      </div>
                      <span>or use your email for registration</span>
                      <input className='input-login' type="text" placeholder="Name" />
                      <input className='input-login' type="email" placeholder="Email" />
                      <input className='input-login' type="password" placeholder="Password" />
                      <button className='button-form-login' >Sign Up</button>
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
                      <input className='input-login' type="email" placeholder="Email" />
                      <input className='input-login' type="password" placeholder="Password" />
                      <a href="/">Forgot your password?</a>
                      <button className='button-form-login'  >Sign In</button>
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
