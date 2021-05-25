import React from "react";
import { Component } from "react";
import "./header.css"
import Search from '../search/search'
// import logo from '/images/Logo/logo.jpg'
class Header extends Component {
  state = {
    query: '',
    data: [],
  }
  clear = () => {
    localStorage.clear();
  }
  checkLogin = () => {
    const token = localStorage.getItem('token');
    console.log(token);
    if (token == null) {
      return (
        <div class="header__links hide-for-mobile">
          <a href='/'>Home</a>
          <a href='/news'>News</a>
          <a href='/'>Contact</a>
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
          <a href='/Login' onClick={this.clear()}>Log out</a>
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
              <a href="/" class="header__logo">
                <img src='../../../images/Logo/logo.jpg' alt=' ISVietNam' />
              </a>
              {/* <a id="btnHamburger" href="/" class="header__toggle hide-for-desktop">
                <span></span>
                <span></span>
                <span></span>
              </a> */}
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

            {/* <div class="header__menu has-fade">
              <a href="/">Home</a>
              <a href="/">About</a>
              <a href="/">Contact</a>
              <a href="/">Blog</a>
              <a href="/">Careers</a>
            </div> */}

        </div>
      </header>
    );
  }

}

export default Header;