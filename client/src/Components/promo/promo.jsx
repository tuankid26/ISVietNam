import { Component } from "react";
import "./promo.scss";
// import { Link } from "react-router-dom";
class Promo extends Component {
  state = {
    data: [],
    id1: 0,
    id2: 1,
    id3: 2,
    id4: 3,
    length: "",
  };
  componentDidMount() {
    fetch("http://localhost/ISVietNam/api/hotel")
      .then((response) => response.json())
      .then((result) => {
        // const rs = result.response.hotel.rows;
        this.setState({ data: result.response.hotel.rows });
        // console.log(this.props.id);
        // console.log(this.state.id2);
      })
      .catch((error) => console.log("error", error));
  }

  render() {
    const data = this.state.data;
    // console.log(data[1]);
    return (
      <div className="promo_hotel">
        <section class="promos">
          <div class="promo__content container container--pall">
            <h2>Nhà nghỉ quanh đây</h2>

            <div class="promo__grid">
              {data &&
                data.filter((p, key) => key<4).map((p) => 
                  <a href={`/hotel/${p.ID_hotel}`} class="promo__item">
                    <div class="promo__image">
                      <img
                        alt="id1"
                        src={`../../images/Image/Hotel/${p.ID_hotel}.jpg`}
                        style={{ width: "316px", height: "250px" }}
                      ></img>
                    </div>
                    <div class="promo__text">
                      <div class="promo__author">Căn hộ</div>
                      <div class="promo__title">
                        {p?.name_hotel}
                      </div>
                      <div class="promo__price">
                        {p?.price} /đêm
                      </div>
                      <div class="promo__description">
                        {/* Vị trí : {this.props.district} , {this.props.province} */}
                        Phòng đơn: 1 phòng ngủ, 2 khách <br />
                        Khoảng cách : {p?.distance} <br />
                      </div>
                    </div>
                  </a>
                )}

              {/* <a href={`/hotel/${this.state.id2}`} class="promo__item">
                  <div class="promo__image">
                  <img alt='id2' src='../../images/Image/Hotel/2.jpg' style={{width:'348px', height:'250px'}}></img>
                  </div>
                  <div class="promo__text">
                    <div class="promo__author">Căn hộ</div>
                    <div class="promo__title">{data[this.state.id2]?.name_hotel}</div>
                    <div class="promo__price">{data[this.state.id2]?.price} /đêm</div>
                    <div class="promo__description">
                      Phòng đơn: 1 phòng ngủ, 2 khách <br />
                      Diện tích : 35m2 <br />
                    </div>
                  </div>
                </a> */}

              {/* <a href={`/hotel/${this.state.id3}`} class="promo__item">
                  <div class="promo__image">
                  <img alt='id3' src='../../images/Image/Hotel/3.jpg' style={{width:'348px', height:'250px'}}></img>
                  </div>
                  <div class="promo__text">
                    <div class="promo__author">Căn hộ</div>
                    <div class="promo__title">{data[this.state.id3]?.name_hotel}</div>
                    <div class="promo__price">{data[this.state.id3]?.price} /đêm</div>
                    <div class="promo__description">
                      Phòng đơn: 1 phòng ngủ, 2 khách <br />
                      Diện tích : 40m2 <br />
                    </div>
                  </div>
                </a>

                <a href={`/hotel/${this.state.id4}`} class="promo__item">
                  <div class="promo__image">
                    <img alt='id4' src='../../images/Image/Hotel/4.jpg' style={{width:'348px', height:'250px'}}></img>
                  </div>
                  <div class="promo__text">
                    <div class="promo__author">Căn hộ</div>
                    <div class="promo__title">{data[this.state.id4]?.name_hotel}</div>
                    <div class="promo__price">{data[this.state.id4]?.price}/đêm</div>
                    <div class="promo__description">
                      Phòng đơn: 1 phòng ngủ, 2 khách <br />
                      Diện tích : 45m2 <br />
                    </div>
                  </div>
                </a> */}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Promo;
