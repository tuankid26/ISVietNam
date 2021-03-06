import React from "react";
import { Component } from "react";
import Booking from "../booking/Booking";

import "./Detail.css";
// import arrow from './icon-arrow.png'
// const ID_place = this.props.ID_place
class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name_hotel: "",
      note: "",
      price: "",
      wifi: "",
      Washing: "",
      TV: "",
      Refesher: "",
      Fridge: "",
      id: this.props.id,
      ID_place: this.props.ID_place,
      province: " ",
      district: " ",
    };
  }

  componentDidMount() {
    console.log(this.state.ID_place);
    fetch("http://localhost/ISVietNam/api/hotel")
      .then((response) => response.json())
      .then((result) => {
        const rs = result.response.hotel.rows;
        const id = this.state.id;
        console.log(rs);
        this.setState({
          name_hotel: rs[id].name_hotel,
          ID_place: rs[id].ID_place,
          note: rs[id].Note,
          wifi: rs[id].Wifi,
          TV: rs[id].TV,
          Washing: rs[id].Washing,
          Refesher: rs[id].Refesher,
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
                            {/* <div className="detail-location is-flex middle-xs start-md mt--18">
                              <div>
                                <svg
                                  className="svg-icon svg-fill"
                                  width="24px"
                                  height="24px"
                                ></svg>
                                <span className="ml--6 bold">
                                  {this.props.district}
                                </span>
                              </div>
                            </div> */}
                            <div className="detail__type is-short-intro is-flex">
                              <div>
                                <p className="mb--0">
                                  <span>Ph??ng ri??ng:</span>
                                  <span> 1 ph??ng t???m, </span>
                                  <span> 1 gi?????ng, </span>
                                  <span> 1 ph??ng ng???, </span>
                                  <span> 2 kh??ch (t???i ??a 3 kh??ch) </span>
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
                                        T??m t???t v??? {this.state.name_hotel}
                                      </strong>
                                    </p>
                                    <p>{this.state.note}</p>
                                  </div>
                                  {/* <a className = 'btn color-i pointer mt--6'>?????c Th??m </a> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                  <div className="title mt--60">
                    <h3 class="mb--6"> Ti???n nghi ch??? ???</h3>
                    <span>
                      Gi???i thi???u v??? c??c ti???n nghi v?? d???ch v??? n??i c?? tr??
                    </span>
                  </div>
                  <div className="is-flex amenities">
                    <div className="d-sm-flex w--100">
                      <div className="fl-item-stretch">
                        <h4 className="mt--24 mb--0">Ti???n ??ch</h4>
                        <ul className="list list--3 is-flex">
                          <li className="mt--12">
                            {this.state.wifi === "1" ? (
                              <div>
                                <img
                                  className="icon"
                                  src="/images/Icon/wifi.png"
                                  alt="icon"
                                />
                                <span>Wifi</span>
                              </div>
                            ) : (
                              ""
                            )}
                          </li>
                          <li className="mt--12">
                            {this.state.TV === "1" ? (
                              <div>
                                <img
                                  className="icon"
                                  src="/images/Icon/television.png"
                                  alt="icon"
                                />
                                <span>Ti Vi</span>{" "}
                              </div>
                            ) : (
                              ""
                            )}
                          </li>
                          <li className="mt--12">
                            {this.state.Fridge === "1" ? (
                              <div>
                                <img
                                  className="icon"
                                  src="/images/Icon/fridge.png"
                                  alt="icon"
                                />
                                <span>T??? L???nh</span>
                              </div>
                            ) : (
                              ""
                            )}
                          </li>
                          <li className="mt--12">
                            {this.state.Refesher === "1" ? (
                              <div>
                                <img
                                  className="icon"
                                  src="/images/Icon/air-conditioning.png"
                                  alt="icon"
                                />
                                <span>??i???u h??a</span>
                              </div>
                            ) : (
                              ""
                            )}
                          </li>

                          <li className="mt--12">
                            {this.state.Washing === "1" ? (
                              <div>
                                <img
                                  className="icon"
                                  src="/images/Icon/washing-machine.png"
                                  alt="icon"
                                />
                                <span>M??y Gi???t</span>
                              </div>
                            ) : (
                              ""
                            )}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="d-block d-sm-none fl-item-stretch mt--24"></div>
                  </div>
                  <div>
                    <div class="title mt--60 mb--24">
                      <h3 class="mb--6">Gi?? ph??ng</h3>
                      <span>Gi?? c?? th??? t??ng v??o cu???i tu???n ho???c ng??y l???</span>
                    </div>
                    <div class="room-price__wrap">
                      <div class="is-flex jbetween align-center py--12 px--18">
                        <span class="c-gray-3 fl-item-50">
                          Th??? hai - Th??? n??m
                        </span>
                        <span class="c-gray-3 fl-item-50 pl--12 bold text-right">
                          {this.state.price}
                        </span>
                      </div>
                      <div class="is-flex jbetween align-center py--12 px--18">
                        <span class="c-gray-3 fl-item-50">
                          Th??? s??u - Ch??? nh???t
                        </span>
                        <span class="c-gray-3 fl-item-50 pl--12 bold text-right">
                          {this.state.price}
                        </span>
                      </div>
                      <div class="is-flex jbetween align-center py--12 px--18">
                        <span class="c-gray-3 fl-item-50 ">
                          Thu?? theo th??ng
                        </span>
                        <span class="c-gray-3 fl-item-50 pl--12 bold text-right">
                          -10.00 %
                        </span>
                      </div>
                      <div class="is-flex jbetween align-center py--12 px--18">
                        <span class="c-gray-3 fl-item-50">
                          S??? ????m t???i thi???u
                        </span>
                        <span class="c-gray-3 fl-item-50 pl--12 bold text-right">
                          1 ????m
                        </span>
                      </div>
                      <div class="is-flex jbetween align-center py--12 px--18">
                        <span class="c-gray-3 fl-item-50">S??? ????m t???i ??a</span>
                        <span class="c-gray-3 fl-item-50 pl--12 bold text-right">
                          90 ????m
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 class="mt--24 mb--6">Th???i gian nh???n ph??ng</h4>
                    <div class="room-price__wrap">
                      <div class="is-flex jbetween align-center py--12 px--18">
                        <span class="c-gray-3 fl-item-50">Nh???n ph??ng</span>
                        <span class="c-gray-3 fl-item-50 pl--12 bold text-right">
                          02:00 pm
                        </span>
                      </div>
                      <div class="is-flex jbetween align-center py--12 px--18">
                        <span class="c-gray-3 fl-item-50">Tr??? ph??ng</span>
                        <span class="c-gray-3 fl-item-50 pl--12 bold text-right">
                          12:00 pm
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Booking
                price={this.state.price}
                name={this.state.name_hotel}
                id={this.state.id}
              ></Booking>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
