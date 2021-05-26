import { Component } from "react";
import "./Booking.css";
import Popup from "../Confirm/Confirm";
class Booking extends Component {
  state = {
    isOpen: false,
    name_hotel: this.props.name,
    price: this.props.price,
    Name: "",
    Phone: 0,
    Customer: 0,
    TimeTo: "",
    TimeOut: "",
    data: [],
  };

  handleChange = (event) => {
    if (event.target.name === "Name")
      this.setState({ Name: event.target.value });
    if (event.target.name === "Phone")
      this.setState({ Phone: event.target.value });
    if (event.target.name === "Customer")
      this.setState({ Customer: event.target.value });
    if (event.target.name === "TimeTo")
      this.setState({ TimeTo: event.target.value });
    if (event.target.name === "TimeOut")
      this.setState({ TimeOut: event.target.value });
    // if (event.target.name === 'repeatPassword') this.setState({ repeatPassword: event.target.value })
  };

  handleSubmit = () => {
    this.setState({ isOpen: true });
    const data = [
      { Name: this.state.Name },
      { Phone: this.state.Phone },
      { Customer: this.state.Customer },
      { TimeTo: this.state.TimeTo },
      { TimeOut: this.state.TimeOut },
    ];
    this.setState({ data: data });
  };

  togglePopup = () => {
    this.setState({ isOpen: false });
  };

  handleConfirm = () => {
    fetch("http://localhost/ISVietNam/api/booking", {
      method: "PUT", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  render() {
    return (
      <div className="col-xs-4 col-sm-2 col-md-3">
        <div className="booking">
          <div className="booking__content mb--18">
            <div className="booking__wrap pt--24 px--12 px--lg--24">
              <div className="booking__pricing">
                <p className="fadeIn">
                  <span className="extra-bold"> {this.props.price}</span>
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
                  name="Name"
                  onChange={this.handleChange}
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
                      name="Phone"
                      onChange={this.handleChange}
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
                      name="Customer"
                      onChange={this.handleChange}
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
                      name="TimeTo"
                      className="time"
                      onChange={this.handleChange}
                      placeholder="Ngày / tháng / năm"
                      data-vv-as="Ngày đến"
                    />
                  </div>
                  <div className="time-input__wrapper fl-item-stretch">
                    <span className="time">Ngày đi</span>
                    <input
                      type="text"
                      name="TimeOut"
                      onChange={this.handleChange}
                      className="TimeOut"
                      placeholder="Ngày / tháng / năm"
                      data-vv-as="Ngày đi"
                    />
                  </div>
                </div>
              </div>

              <button
                onClick={this.handleSubmit}
                className="btn btn-grad--primary px--6 mb--12 btn--sm btn--full bold rounded btn--shadow-primary"
              >
                <span>Đặt ngay</span>
              </button>
            </div>
            {this.state.isOpen && (
              <Popup
                content={
                  <>
                    <b>Xác nhận đặt phòng {this.state.name_hotel}</b>
                    <p className="fadeIn">Giá Phòng:
                      <span className="extra-bold"> {this.state.price}</span>
                      <span className="p--small">/1 đêm</span>
                    </p>
                    <p> Tên khách hàng: {this.state.Name} </p>
                    <p> Số điện thoại: {this.state.Phone} </p>
                    <p> Số khách: {this.state.Customer} </p>
                    <p> Ngày đến: {this.state.TimeTo}</p>
                    <p> Ngày đi: {this.state.TimeOut}</p>
                  </>
                }
                handleClose={this.togglePopup}
                handleConfirm={this.handleConfirm}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Booking;
