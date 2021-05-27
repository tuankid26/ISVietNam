import React, { Component } from "react";
import Header from "../Components/header/header";
import Footer from "../Components/footer/footer";
import "./css/location.css";
import Filter from "../Components/Filter/filter";
class Location extends Component {
  state = {
    id: this.props.match.params.id,
    city: "",
    results:[]
  };
  componentDidMount() {
    if (this.state.id === "1") this.setState({ city: "Hà Nội" });
    if (this.state.id === "2") this.setState({ city: "Hồ Chí Minh" });
    if (this.state.id === "3") this.setState({ city: "Đà Nẵng" });
    if (this.state.id === "4") this.setState({ city: "Nha Trang" });
    if (this.state.id === "5") this.setState({ city: "Ninh Bình" });
    console.log(this.state.id);
    fetch('http://localhost/ISVietNam/api/place')
    .then(response => { return response.json() })
    .then(data => {
      this.setState({
        results: data.response.place.rows,
      })
    })
  }

  render() {
    return (
      <div>
        <Header></Header>
        {this.state.city && (
          <div className="location">
            <div id="mapWrap" className="wapper">
              <div className="container container--md">
                {/* <Filter city={this.state.city}></Filter> */}
                <div className="el-row">
                  <div className="section mt--30">
                    <div className="row">
                      <h2 className="extra-bold col-xs- 12 col-md-9">
                        {/* 15 địa điểm tại {this.state.city} */}
                      </h2>
                    </div>
                  </div>
                </div>
                <Filter city={this.state.city}></Filter>
              </div>
            </div>
          </div>
        )}
        <Footer></Footer>
      </div>
    );
  }
}

export default Location;
