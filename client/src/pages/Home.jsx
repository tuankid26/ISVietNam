import React from "react";
import { Component } from "react";
import "./css/Home.css"
import logo from '../images/logo.jpg'
import Search from '../Components/search/search.jsx'
import Slideshow from '../Components/slideshow/slideshow.jsx'
import img1 from '../images/hanoi.jpg';
import img2 from '../images/hochiminh.jpg';
import img3 from '../images/danang.jpg';
import Footer from '../Components/footer/footer.jsx';
import Feature from '../Components/feature/feature.jsx'
import Article from '../Components/article/article.jsx'

const collection = [
  { src: img1, caption: "Caption one" },
  { src: img2, caption: "Caption two" },
  { src: img3, caption: "Caption three" },

];

class App extends Component {
  state = {
    query: '',
    data: [],
}

handleInputChange = () => {
    this.setState({
        query: this.search.value
    })
    this.filterArray();
}

getData = () => {
    fetch(`http://localhost:3000`)
    .then(response => response.json())
    .then(responseData => {
      
        this.setState({
            data:responseData
        })
    })
}

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

componentWillMount() {
    this.getData();
}
  render() {
    return(
      <div className = 'Home'>
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
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <Search 
              valueSearch={this.state.valueSearch}
              handleSearch={this.handleSearch}
            />
          </div>
            
                 <div class="header__links hide-for-mobile">
                  <a href='/'>Home</a>
                  <a href='/'>News</a>
                  <a href='/'>Discover</a>
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
      <Slideshow
          input={collection}
          ratio={`3:2`}
          mode={`automatic`}
          timeout={`3000`}
        />
        <Feature></Feature>
        <Article></Article>
        <Footer></Footer>
      </div>
    );
  }

}

export default App ;