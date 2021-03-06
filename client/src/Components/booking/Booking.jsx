import { Component } from "react";
import "./Booking.css";
import Popup from "../Confirm/Confirm";
class Booking extends Component {
  state = {
    id: this.props.id,
    isOpen: false,
    name_hotel: this.props.name,
    price: this.props.price,
    Name: "",
    Phone: "",
    Customer: 0,
    TimeTo: "",
    TimeOut: "",
    data: [],
    data_hotel: [],
  };

  componentDidMount() {
    fetch("http://localhost/ISVietNam/api/hotel")
      .then((response) => response.json())
      .then((result) => {
        const rs = result.response.hotel.rows;
        const id = this.state.id;
        this.setState({ data_hotel: rs[id] });
        console.log(rs[id]);
      })
      .catch((error) => console.log("error", error));
  }
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

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ isOpen: true });
    // const data = [
    //   { ID_hotel: this.state.id},
    //   { Name: this.state.Name },
    //   { Phone: this.state.Phone },
    //   { Customer: this.state.Customer },
    //   { TimeTo: this.state.TimeTo },
    //   { TimeOut: this.state.TimeOut },
    // ];
    // this.setState({ data: data });
    // console.log(data)
  };

  togglePopup = () => {
    this.setState({ isOpen: false });
  };

  handleConfirm = () => {
    const data = {
      ID_hotel: this.state.id,
      Name: this.state.Name,
      Phone: this.state.Phone,
      Customer: this.state.Customer,
      TimeTo: this.state.TimeTo,
      TimeOut: this.state.TimeOut,
    };
    // console.log(data);
    fetch("http://localhost/ISVietNam/api/booking", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(response => { return response.json() })
      // .then((text) => console.log(text.))
      .then( (data) => {
        console.log("Success:", data.response);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

      this.setState({ isOpen: false });
      alert ("X??c nh???n th??nh c??ng !")
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
                  <span className="p--small">/1 ????m</span>
                </p>
              </div>
              <div class="room-discount">
                <span class="label label--cool-red">Gi???m 25% t??? ch??? nh??</span>{" "}
                <p class="mb--0 mt--6 p--small-2">
                  Gi???m <strong>25%</strong> cho ?????t ph??ng c?? checkin t???{" "}
                  <strong>23/03</strong> ?????n <strong>31/05</strong>
                </p>
              </div>
              <form onSubmit = {this.handleSubmit}>
                <div className="input-group input-group__custom">
                  <input
                    placeholder="T??n Kh??ch h??ng"
                    data-vv-as="T??n Kh??ch h??ng"
                    name="Name"
                    onChange={this.handleChange}
                    className="input"
                    aria-required="true"
                    aria-invalid="true"
                    required
                  />{" "}
                </div>
                <div className="input-group input-group__custom">
                  <div className="phone-input input">
                    <div className="phone-input__wrapper fl-item-stretch">
                      <input
                        pattern="(84|0[3|5|7|8|9])+([0-9]{8})"
                        type="text"
                        name="Phone"
                        onChange={this.handleChange}
                        className="input"
                        placeholder="S??? ??i???n tho???i"
                        data-vv-as="S??? ??i???n tho???i"
                        required
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
                        placeholder="S??? kh??ch"
                        data-vv-as="S??? kh??ch"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="input-group input-group__custom">
                  <div className="time-input input">
                    <div className="time-input__wrapper fl-item-stretch">
                      <span className="time">Ng??y ?????n</span>
                      <input
                        type="Date"
                        name="TimeTo"
                        className="time"
                        onChange={this.handleChange}
                        placeholder= "Ng??y / th??ng / n??m"
                        data-vv-as= "Ng??y ?????n"
                        required
                      />
                    </div>
                    <div className="time-input__wrapper fl-item-stretch">
                      <span className="time">Ng??y ??i</span>
                      <input
                        type="Date"
                        name="TimeOut"
                        onChange={this.handleChange}
                        className="TimeOut"
                        placeholder="Ng??y / th??ng / n??m"
                        data-vv-as="Ng??y ??i"
                        required
                      />
                    </div>
                  </div>
                </div>

                <button
                  // onClick={this.handleSubmit}
                  className="btn btn-grad--primary px--6 mb--12 btn--sm btn--full bold rounded btn--shadow-primary"
                >
                  <span>?????t ngay</span>
                </button>
              </form>
            </div>
            {this.state.isOpen && (
              <Popup
                content={
                  <>
                    <b>
                      X??c nh???n ?????t ph??ng {this.state.data_hotel?.name_hotel}
                    </b>
                    <p className="fadeIn">
                      Gi?? Ph??ng:
                      <span className="extra-bold">
                        {" "}
                        {this.state.data_hotel?.price}
                      </span>
                      <span className="p--small">/1 ????m</span>
                    </p>
                    <p> T??n kh??ch h??ng: {this.state.Name} </p>
                    <p> S??? ??i???n tho???i: {this.state.Phone} </p>
                    <p> S??? kh??ch: {this.state.Customer} </p>
                    <p> Ng??y ?????n: {this.state.TimeTo}</p>
                    <p> Ng??y ??i: {this.state.TimeOut}</p>
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
