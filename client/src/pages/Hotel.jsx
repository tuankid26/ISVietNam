import React, { Component } from "react";
import Header from "../Components/header/header";
import Gallery from "../Components/Gallery/Gallery";
import Detail from "../Components/Detail/Detail";
import Footer from "../Components/footer/footer";
// import {HOST_URL} from "../config";
// import Booking from '../Components/booking/Booking'

// const collection = [
//     { src: '../images/Banner/hanoi.jpg', caption: " " },
//     { src: '../images/Banner/hochiminh.jpg', caption: " " },
//     { src: '../images/Banner/danang.jpg', caption: " " },

//   ];

class Hotel extends Component {
  state = {
    id: this.props.match.params.id,
    collection: [],
    img1: "",
    img2: "",
    img3: "",
  };
  componentDidMount() {
    fetch("http://localhost/ISVietNam/api/hotel")
      .then((response) => response.json())
      .then((result) => {
        const rs = result.response.hotel.rows;
        const id = this.state.id;
        this.setState({
          img1: rs[id].path_image_hotel,
          img2: rs[id].path_image_hotel2,
          img3: rs[id].path_image_hotel3,
        });
        console.log(`../images/Image/${this.state.img1}`);
        const img = [
          { src: `../images/Image/${this.state.img1}`, caption: " " },
          { src: `../images/Image/${this.state.img2}`, caption: " " },
          { src: `../images/Image/${this.state.img3}`, caption: " " },
        ];
        this.setState({
          collection: img,
        });
      });
  }

  render() {
    return (
      <div className="_layout">
        <Header></Header>
        <div className="i_hotel">
          <Gallery
            input={this.state.collection}
            ratio={`5:2`}
            mode={`automatic`}
            timeout={`4000`}
          ></Gallery>
          <Detail id={this.state.id}></Detail>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Hotel;
