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
            <a class="feature__item" href='/location/1'>
              
              <div class="feature__icon"><img src="/images/Image/Home/hanoi.png" alt="Hà nội" /></div>
              <div class="feature__title">
                Hà Nội
            </div>
              <div class="feature__description">
                {this.count('Hà Nội')} địa điểm
            </div>
            </a>

            <a class="feature__item" href='/location/2'>
              <div class="feature__icon"><img src="/images/Image/Home/TPHCM.png" alt="Hồ Chí Minh" /></div>
              <div class="feature__title">
                Hồ Chí Minh
            </div>
              <div class="feature__description">
                {this.count('Hồ Chí Minh')} địa điểm
            </div>
            </a>

            <a class="feature__item" href='/location/3'>
              <div class="feature__icon"><img src="/images/Image/Home/danang.png" alt="Đà Nẵng" /></div>
              <div class="feature__title">
                Đà Nẵng
            </div>
              <div class="feature__description">
                {this.count('Đà Nẵng')} địa điểm
            </div>
            </a>

            <a class="feature__item" href='/location/4'>
              <div class="feature__icon"><img src="/images/Image/Home/dalat.png" alt="Đà Lạt" /></div>
              <div class="feature__title">
                Nha Trang
            </div>
              <div class="feature__description">
                {this.count('Nha Trang')} địa điểm
            </div>
            </a>

            <a class="feature__item" href='/location/5'>
              <div class="feature__icon"><img src="/images/Image/Home/ninhbinh.png" alt="Ninh Bình" /></div>
              <div class="feature__title">
                Ninh Bình
            </div>
              <div class="feature__description">
                {this.count('Ninh Bình')} địa điểm
            </div>
            </a>
          </div>
        </div>

      </section>
    );
  }
}
export default Feature;