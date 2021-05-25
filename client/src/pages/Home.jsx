import React from "react";
import { Component } from "react";
import Slideshow from '../Components/slideshow/slideshow.jsx'
import Header from '../Components/header/header'
import Footer from '../Components/footer/footer.jsx';
import Feature from '../Components/feature/feature.jsx'
import Article from '../Components/article/article.jsx'

const collection = [
  { src: '../images/Banner/hanoi.jpg', caption: "Hà Nội " },
  { src: '../images/Banner/hochiminh.jpg', caption: "Hồ Chí Minh" },
  { src: '../images/Banner/danang.jpg', caption: "Đà Nẵng" },

];

class Home extends Component {
  state = {
    query: '',
    data: [],
    number_place : []

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


componentWillMount() {
    this.getData();
}
  render() {
    
    return(
      <div className = 'Home'>
      <Header></Header>
      <Slideshow
          input={collection}
          ratio={`3:2`}
          mode={`automatic`}
          timeout={`4000`}
        />
        <Feature></Feature>
        <Article></Article>
        <Footer></Footer>
      </div>
    );
  }

}

export default Home ;