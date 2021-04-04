import React from "react";
import { Component } from "react";
import "./header.css"
import logo from './images/logo.jpg'
class Header extends Component {

  render() {
    return(
      <header className= "header">
          <div className = 'header-top'>
            <div className = 'container-fix'>
              <nav className = 'container container--pall flex flex-jc-sb flex-ai-c'>
                <a href="/" class="header__logo">
                  <img src={logo} alt =' ISVietNam'  />
                </a>
                {/* <a id="btnHamburger" href="#" class="header__toggle hide-for-desktop">
                  <span></span>
                  <span></span>
                  <span></span>
                </a> */}
                 <div class="header__links hide-for-mobile">
                  <a href='/'>Home</a>
                  <a href='/'>News</a>
                  <a href='/'>Contact</a>
                  <a href='/'>Sign in</a>
                  <a href='/'>Sign up</a>
              </div>
              </nav>
             
              <div class="header__menu has-fade">
                  <a href="/">Home</a>
                  <a href="/">About</a>
                  <a href="/">Contact</a>
                  <a href="/">Blog</a>
                  <a href="/">Careers</a>
              </div>
            </div>

        </div>
      </header>
    );
  }

}

export default Header ;