import React from "react";
import { Component } from "react";
import Slideshow from '../Components/slideshow/slideshow.jsx'
import img1 from '../images/hanoi.jpg';
import img2 from '../images/hochiminh.jpg';
import img3 from '../images/danang.jpg';
import Header from '../Components/header/header'
import Footer from '../Components/footer/footer.jsx';
import Feature from '../Components/feature/feature.jsx'
import Article from '../Components/article/article.jsx'

const collection = [
  { src: img1, caption: "Hà Nội " },
  { src: img2, caption: "Hồ Chí Minh" },
  { src: img3, caption: "Đà Nẵng" },

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