import React from 'react';
import { Component } from "react";
import './feature.scss'

class Feature extends Component {
  state = {
    results: [],
    city: []
  }
  count(e) {
    var count = 0
    this.state.results.filter((p) => p.province === e).map((_) => {
      count += 1
      return null
    })
    return count
  }
  componentDidMount() {
    fetch('http://localhost/ISVietNam/api/place')
      .then(response => { return response.json() })
      .then(data => {
        this.setState({
          results: data.response.place.rows,
        })
      })
  }
  render() {
    this.state.results.map((p) => this.state.city.push(p.province))
    console.log(this.state.city)
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
              <div class="feature__icon"><img src="/images/Image/Home/hanoi.jpg" alt="Hà nội" /></div>
              <div class="feature__title">
                Hà Nội
            </div>
              <div class="feature__description">
                {this.count('Hà Nội')} địa điểm
            </div>
            </div>

            <div class="feature__item">
              <div class="feature__icon"><img src="/images/Image/Home/TPHCM.jpg" alt="Hồ Chí Minh" /></div>
              <div class="feature__title">
                Hồ Chí Minh
            </div>
              <div class="feature__description">
                {this.count('HCM')} địa điểm
            </div>
            </div>

            <div class="feature__item">
              <div class="feature__icon"><img src="/images/Image/Home/danang.jpg" alt="Đà Nẵng" /></div>
              <div class="feature__title">
                Đà Nẵng
            </div>
              <div class="feature__description">
                {this.count('Đà Nẵng')} địa điểm
            </div>
            </div>

            <div class="feature__item">
              <div class="feature__icon"><img src="/images/Image/Home/dalat.jpg" alt="Đà Lạt" /></div>
              <div class="feature__title">
                Nha Trang
            </div>
              <div class="feature__description">
                {this.count('Nha Trang')} địa điểm
            </div>
            </div>

            <div class="feature__item">
              <div class="feature__icon"><img src="/images/Image/Home/ninhbinh.jpg" alt="Ninh Bình" /></div>
              <div class="feature__title">
                Ninh Bình
            </div>
              <div class="feature__description">
                {this.count('Ninh Bình')} địa điểm
            </div>
            </div>
          </div>
        </div>

      </section>
    );
  }
}
export default Feature;