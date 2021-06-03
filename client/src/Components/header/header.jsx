import React from "react";
import { Component } from "react";
import "./header.css"
import Search from '../search/search';
// import { Redirect } from 'react-router-dom';
// import logo from '/images/Logo/logo.jpg'
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      data: [],
      isOpen : false
    }
  }

  clear = (e) => {
    e.preventDefault()
    localStorage.removeItem('token');
    window.location.href = '/login'

  }
  checkLogin = () => {
    const token = localStorage.getItem('token');
    if (token == null) {
      return (
        <div class="header__links hide-for-mobile">
          <a href='/'>Home</a>
          <a href='/news'>News</a>
          <a href='/contact'>Contact</a>
          <a href='/login'>Sign in</a>
          <a href='/login'>Sign up</a>
        </div>
      )
    }
    else {
      return (
        <div class="header__links hide-for-mobile">
          <a href='/'>Home</a>
          <a href='/news'>News</a>
          <a href='/'>Contact</a>
          <a href="/" onClick={(e) => this.clear(e)}>Log out</a>
        </div>
      )
    }
  }
  render() {
    return (
      <header className="header">
        <div className='header-top'>
          {/* <div className='container-fix'></div> */}
          <nav className='container container--pall flex flex-jc-sb flex-ai-c'>
            <a href="/" className="header__logo">
              <img src='../../../images/Logo/logo.jpg' alt=' ISVietNam' />
            </a>
            <div id="btnHamburger"  onClick = {() => {this.setState({isOpen:!this.state.isOpen})}} className="header__toggle hide-for-desktop">
                <span></span>
                <span></span>
                <span></span>
              </div>
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <Search
                valueSearch={this.state.valueSearch}
                handleSearch={this.handleSearch}
              />
            </div>
            {
              this.checkLogin()
            }
          </nav>

           {this.state.isOpen ? <div class="header__menu has-fade">
              <a href="/">Home</a>
              <a href="/news">News</a>
              <a href="/contact">Contact</a>
              <a href="/login">SignUp</a>
              <a href="/login">SignIn</a>
            </div> : null }

        </div>
      </header>
    );
  }

}

export default Header;