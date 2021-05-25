import React from "react";
import { Component } from "react";
import Booking from "../booking/Booking";

import "./Detail.css";
// import arrow from './icon-arrow.png'
class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name_hotel: "",
      note: "",
      price: "",
      wifi: "",
      washing: "",
      TV: "",
      refesher: "",
      Fridge: "",
      id: this.props.id,
    };
  }

  componentDidMount() {
    fetch("http://localhost/ISVietNam/api/hotel")
      .then((response) => response.json())
      .then((result) => {
        const rs = result.response.hotel.rows;
        const id = this.state.id;
        this.setState({
          name_hotel: rs[id].name_hotel,
          note: rs[id].Note,
          wifi: rs[id].Wifi,
          TV: rs[id].TV,
          washing: rs[id].Washing,
          refesher: rs[id].refesher,
          Fridge: rs[id].Fridge,
          price: rs[id].price,
        });
      })
      .catch((error) => console.log("error", error));
  }

  render() {
    return (
      <div className="detail">
        <div className="container container--hotel">
          <div className="section">
            <div className="row">
              <div className="col col-md-9 col-xs-12 ">
                <div className="detail-left">
                  <div className="section">
                    <div className="breadcrumbs middle-xs  d-sm-flex">
                      <a href="/" className="nut-link-active">
                        ISVietNam
                      </a>
                      <i className="icon-arrow-right"></i>
                      <span className="is-flex middle-xs">
                        <a href="/"> Hà Nội</a>
                        <i className="icon-arrow-right"></i>
                      </span>
                      <span className="is-flex middle-xs">
                        <a href="/"> Hai Bà Trưng</a>
                        <i className="icon-arrow-right"></i>
                      </span>
                      <span className="is-flex middle-xs">
                        <a href="/"> Phường Bách Khoa</a>
                      </span>
                    </div>
                    <section>
                      <div className="row">
                        <div className="col-xs-8 col-sm-10">
                          <div>
                            <div className="title">
                              <div className="row">
                                <h1 className="mb-12 break-word">
                                  {this.state.name_hotel}
                                </h1>
                              </div>
                            </div>
                            <div className="detail-location is-flex middle-xs start-md mt--18">
                              <div>
                                <svg
                                  className="svg-icon svg-fill"
                                  width="24px"
                                  height="24px"
                                ></svg>
                                <span className="ml--6 bold">
                                  Trực Ninh, Nam Định, Việt Nam{" "}
                                </span>
                              </div>
                            </div>
                            <div className="detail__type is-short-intro is-flex">
                              <div>
                                <p className="mb--0">
                                  <span>Phòng riêng:</span>
                                  <span> 1 phòng tắm, </span>
                                  <span> 1 giường, </span>
                                  <span> 1 phòng ngủ, </span>
                                  <span> 2 khách (tối đa 3 khách) </span>
                                </p>
                              </div>
                            </div>
                            <div className=" d-sm-flex w--100 amenities mt--36">
                              <div className="detail-intro">
                                <div className="is-relative">
                                  <div
                                    id="short_intro"
                                    class="hotel-des dot show"
                                  >
                                    <p>
                                      <strong>
                                        Tóm tắt về {this.state.name_hotel}
                                      </strong>
                                    </p>
                                    <p>{this.state.note}</p>
                                  </div>
                                  {/* <a className = 'btn color-i pointer mt--6'>Đọc Thêm </a> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                  <div className="title mt--60">
                    <h3 class="mb--6"> Tiện nghi chỗ ở</h3>
                    <span>
                      Giới thiệu về các tiện nghi và dịch vụ nơi cư trú
                    </span>
                  </div>
                  <div className="is-flex amenities">
                    <div className="d-sm-flex w--100">
                      <div className="fl-item-stretch">
                        <h4 className="mt--24 mb--0">Tiện ích</h4>
                        <ul className="list list--3 is-flex">
                          <li className="mt--12">
                            {this.state.wifi === "1" ? <span>Wifi</span> : ""}
                          </li>
                          <li className="mt--12">
                            {this.state.TV === "1" ? <span>Ti Vi</span> : ""}
                          </li>
                          <li className="mt--12">
                            {this.state.Fridge === "1" ? (
                              <span>Tủ Lạnh</span>
                            ) : (
                              ""
                            )}
                          </li>
                          <li className="mt--12">
                            {this.state.refesher === "1" ? (
                              <span>Điều hòa</span>
                            ) : (
                              ""
                            )}
                          </li>
                          <li className="mt--12">
                            {this.state.washing === "1" ? (
                              <span>Máy Giặt</span>
                            ) : (
                              ""
                            )}
                          </li>
                          <li className="mt--12">
                            <span>Tủ Lạnh</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="d-block d-sm-none fl-item-stretch mt--24"></div>
                  </div>
                  <div>
                    <div class="title mt--60 mb--24">
                      <h3 class="mb--6">Giá phòng</h3>
                      <span>Giá có thể tăng vào cuối tuần hoặc ngày lễ</span>
                    </div>
                    <div class="room-price__wrap">
                      <div class="is-flex jbetween align-center py--12 px--18">
                        <span class="c-gray-3 fl-item-50">
                          Thứ hai - Thứ năm
                        </span>
                        <span class="c-gray-3 fl-item-50 pl--12 bold text-right">
                          {this.state.price}
                        </span>
                      </div>
                      <div class="is-flex jbetween align-center py--12 px--18">
                        <span class="c-gray-3 fl-item-50">
                          Thứ sáu - Chủ nhật
                        </span>
                        <span class="c-gray-3 fl-item-50 pl--12 bold text-right">
                          {this.state.price}
                        </span>
                      </div>
                      <div class="is-flex jbetween align-center py--12 px--18">
                        <span class="c-gray-3 fl-item-50 ">
                          Thuê theo tháng
                        </span>
                        <span class="c-gray-3 fl-item-50 pl--12 bold text-right">
                          -10.00 %
                        </span>
                      </div>
                      <div class="is-flex jbetween align-center py--12 px--18">
                        <span class="c-gray-3 fl-item-50">
                          Số đêm tối thiểu
                        </span>
                        <span class="c-gray-3 fl-item-50 pl--12 bold text-right">
                          1 đêm
                        </span>
                      </div>
                      <div class="is-flex jbetween align-center py--12 px--18">
                        <span class="c-gray-3 fl-item-50">Số đêm tối đa</span>
                        <span class="c-gray-3 fl-item-50 pl--12 bold text-right">
                          90 đêm
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 class="mt--24 mb--6">Thời gian nhận phòng</h4>
                    <div class="room-price__wrap">
                      <div class="is-flex jbetween align-center py--12 px--18">
                        <span class="c-gray-3 fl-item-50">Nhận phòng</span>
                        <span class="c-gray-3 fl-item-50 pl--12 bold text-right">
                          02:00 pm
                        </span>
                      </div>
                      <div class="is-flex jbetween align-center py--12 px--18">
                        <span class="c-gray-3 fl-item-50">Trả phòng</span>
                        <span class="c-gray-3 fl-item-50 pl--12 bold text-right">
                          12:00 pm
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Booking price={this.state.price}></Booking>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
