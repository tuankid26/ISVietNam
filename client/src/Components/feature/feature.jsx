import React from 'react';
import { Component } from "react";
import './feature.scss'

class Feature extends Component {
  state = {
    results: [],
    city: []
  }
  // countPlace = (e) =>{
  //   const count = 0
  //   this.state.results.filter((p)=> p.)
  // }
  componentDidMount() {
    fetch('http://localhost/ISVietNam/api/place')
      .then(response => { return response.json() })
      .then(data => {
        this.setState({
          results: data.response.place.rows
        })
      })
  }
  render() {
    this.state.results.map((p) => this.state.city.push(p.province))
    return (
      <section class="feature">

        <div class="feature__content container container--pall">

          <div class="feature__intro">
            <h2>Địa điểm nổi bật</h2>
            <p>
              Khám phá Việt Nam diệu kì
            </p>
          </div>

          <div class="feature__grid">
            <div class="feature__item">
              <div class="feature__icon"><img src="../../images/Home/hanoi.jpg" alt="Hà nội" /></div>
              <div class="feature__title">
                Hà Nội
            </div>
              <div class="feature__description">
                123 địa điểm
            </div>
            </div>

            <div class="feature__item">
              <div class="feature__icon"><img src="../../images/Home/TPHCM.jpg" alt="Hồ Chí Minh" /></div>
              <div class="feature__title">
                Hồ Chí Minh
            </div>
              <div class="feature__description">
                287 địa điểm
            </div>
            </div>

            <div class="feature__item">
              <div class="feature__icon"><img src="../../images/Home/danang.jpg" alt="Đà Nẵng" /></div>
              <div class="feature__title">
                Đà Nẵng
            </div>
              <div class="feature__description">
                26 địa điểm
            </div>
            </div>

            <div class="feature__item">
              <div class="feature__icon"><img src="../../images/Home/dalat.jpg" alt="Đà Lạt" /></div>
              <div class="feature__title">
                Đà Lạt
            </div>
              <div class="feature__description">
                20 địa điểm
            </div>
            </div>

            <div class="feature__item">
              <div class="feature__icon"><img src="../../images/Home/ninhbinh.jpg" alt="Ninh Bình" /></div>
              <div class="feature__title">
                Ninh Bình
            </div>
              <div class="feature__description">
                23 địa điểm
            </div>
            </div>
          </div>
        </div>

      </section>
    );
  }
}
export default Feature;