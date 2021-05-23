import { Component } from "react";
import "./Booking.css";
class Booking extends Component {
  state = {
    name_hotel: "",
  };
  render() {
    return (
      <div className="col-xs-4 col-sm-2 col-md-3">
        <div className="booking">
          <div className="booking__content mb--18">
            <div className="booking__wrap pt--24 px--12 px--lg--24">
              <div className="booking__pricing">
                <p className="fadeIn">
                  <span className="extra-bold"> 800,000 đ</span>
                  <span className="p--small">/1 đêm</span>
                </p>
              </div>
              <div class="room-discount">
                <span class="label label--cool-red">Giảm 25% từ chủ nhà</span>{" "}
                <p class="mb--0 mt--6 p--small-2">
                  Giảm <strong>25%</strong> cho đặt phòng có checkin từ{" "}
                  <strong>23/03</strong> đến <strong>31/05</strong>
                </p>
              </div>
              <div className="input-group input-group__custom">
                <input
                  placeholder="Tên Khách hàng"
                  data-vv-as="Tên Khách hàng"
                  name="name"
                  className="input"
                  aria-required="true"
                  aria-invalid="true"
                />{" "}
              </div>
              <div className="input-group input-group__custom">
                <div className="phone-input input">
                  <div className="phone-input__wrapper fl-item-stretch">
                    <input
                      type="number"
                      name="phone"
                      min="1"
                      className="input"
                      placeholder="Số điện thoại"
                      data-vv-as="Số điện thoại"
                    />
                  </div>
                </div>
              </div>
              <div className="input-group input-group__custom">
                <div className="customer-input input">
                  <div className="customer-input__wrapper fl-item-stretch">
                    <input
                      type="number"
                      name="customer"
                      min="1"
                      className="input"
                      placeholder="Số khách"
                      data-vv-as="Số khách"
                    />
                  </div>
                </div>
              </div>
              <div className="input-group input-group__custom">
                <div className="time-input input">
                  <div className="time-input__wrapper fl-item-stretch">
                    <span className="time">Ngày đến</span>
                    <input
                      type="text"
                      name="time"
                      className="time"
                      placeholder="Ngày / tháng / năm"
                      data-vv-as="Ngày đến"
                    />
                  </div>
                  <div className="time-input__wrapper fl-item-stretch">
                    <span className="time">Ngày đi</span>
                    <input
                      type="text"
                      name="time"
                      className="time"
                      placeholder="Ngày / tháng / năm"
                      data-vv-as="Ngày đi"
                    />
                  </div>
                </div>
              </div>

              <button className="btn btn-grad--primary px--6 mb--12 btn--sm btn--full bold rounded btn--shadow-primary">
                <span>Đặt ngay</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Booking;
