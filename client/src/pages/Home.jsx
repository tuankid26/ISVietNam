import React from "react";
import { Component } from "react";
import axios from 'axios';
import Slideshow from '../Components/slideshow/slideshow.jsx'
import img1 from '../images/hanoi.jpg';
import img2 from '../images/hochiminh.jpg';
import img3 from '../images/danang.jpg';
import Header from '../Components/header/header'
import Footer from '../Components/footer/footer.jsx';
import Feature from '../Components/feature/feature.jsx'
import Article from '../Components/article/article.jsx'

const collection = [
  { src: img1, caption: "Caption one" },
  { src: img2, caption: "Caption two" },
  { src: img3, caption: "Caption three" },

];

class Home extends Component {
  state = {
    query: '',
    data: [],
    number_place : []

}

componentDidMount() {
  axios.get(`http://localhost/ISVIETNAM/api/home`)
    .then(res => {
      const number_place = res.data.data.row.sum;
      console.log({number_place})
      
      this.setState({ number_place });
    
    })
    .catch(error => console.log(error));
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
          timeout={`3000`}
        />
        <Feature></Feature>
        <Article></Article>
        <Footer></Footer>
      </div>
    );
  }

}

export default Home ;