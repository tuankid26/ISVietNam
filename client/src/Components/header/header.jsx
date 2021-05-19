import React from "react";
import { Component } from "react";
import "./header.css"
import Search from '../search/search'
import logo from '../../images/logo.jpg'
class Header extends Component {
      state = {
        query: '',
        data: [],
    }

    // handleInputChange = () => {
    //     this.setState({
    //         query: this.search.value
    //     })
    //     this.filterArray();
    // }

    // getData = () => {
    //     fetch(`http://localhost/ISVIETNAM/api/home`)
    //     .then(response => response.json())
    //     .then(responseData => {
          
    //         this.setState({
    //             data:responseData
    //         })
    //     })
    // }

    // filterArray = () => {
    //     var searchString = this.state.query;
    //     var responseData = this.state.data
    //     if(searchString.length > 0){
    //         // console.log(responseData[i].name);
    //         responseData = responseData.filter(l => {
    //             console.log( l.name.toLowerCase().match(searchString));
    //         })
    //     }
    // }

    // componentWillMount() {
    //     this.getData();
    // }
  render() {
    return(
      <header className= "header">
          <div className = 'header-top'>
            <div className = 'container-fix'>
              <nav className = 'container container--pall flex flex-jc-sb flex-ai-c'>
                <a href="/" class="header__logo">
                  <img src={logo} alt =' ISVietNam'  />
                </a>
                <a id="btnHamburger" href="/" class="header__toggle hide-for-desktop">
                  <span></span>
                  <span></span>
                  <span></span>
                </a>
                 <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                  <Search 
                    valueSearch={this.state.valueSearch}
                    handleSearch={this.handleSearch}
                  />
                </div>
                 <div class="header__links hide-for-mobile">
                  <a href='/'>Home</a>
                  <a href='/news'>News</a>
                  <a href='/'>Contact</a>
                  <a href='/login'>Sign in</a>
                  <a href='/login'>Sign up</a>
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