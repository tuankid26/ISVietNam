import { Component } from "react";
import "./promo.scss";
class Promo extends Component {
  state = {
    data: [],
    id1: "",
    id2: "",
    id3: "",
    id4: "",
    length: "",
  };
  componentDidMount() {
    
    fetch("http://localhost/ISVietNam/api/hotel")
      .then((response) => response.json())
      .then((result) => {
        // const rs = result.response.hotel.rows;
        this.setState({ data: result.response.hotel.rows });
        // console.log(this.state.data);
        // var k = 0;
        // var i;
        // for (i = 0; i < this.state.length; i++) {
        //   if (rs[i].ID_place === this.props.id) {
        //     k++;
        //     var tg = "" + i;
        //     // console.log (tg);
        //     if (k === 1) {
        //       this.setState({ id1: tg });
        //     }
        //     // if (k === 2) this.setState({ id2: i });
        //     // if (k === 3) this.setState({ id3: i });
        //     // if (k === 4) {
        //     //   this.setState({ id4: i });
        //     // }
        //   }
        // }
        // console.log(this.state.id1)
      })
      .catch((error) => console.log("error", error));
  }


  render() {
    const data = this.state.data;
    console.log(data[1]);
    return (
      <div className="promo_hotel">
        { data && console.log( data[1].name_hotel) }
        { data ? (
          
          <section class="promos">
            <div class="promo__content container container--pall">
              <h2>Nhà nghỉ quanh đây</h2>

              <div class="promo__grid">
                <a href="/" class="promo__item">
                  <div class="promo__image"></div>
                  <div class="promo__text">
                    <div class="promo__author">Căn hộ</div>
                    <div class="promo__title">{}</div>
                    <div class="promo__price">790,000 đ/đêm</div>
                    <div class="promo__description">
                      Phòng đơn: 1 phòng ngủ, 2 khách <br />
                      Diện tích : 55m2 <br />
                      Vị trí : Ba Đình, Hà Nội
                    </div>
                  </div>
                </a>

                <a href="/" class="promo__item">
                  <div class="promo__image"></div>
                  <div class="promo__text">
                    <div class="promo__author">Căn hộ</div>
                    <div class="promo__title">The Galaxy Home</div>
                    <div class="promo__price">790,000 đ/đêm</div>
                    <div class="promo__description">
                      Phòng đơn: 1 phòng ngủ, 2 khách <br />
                      Diện tích : 55m2 <br />
                      Vị trí : Ba Đình, Hà Nội
                    </div>
                  </div>
                </a>

                <a href="/" class="promo__item">
                  <div class="promo__image"></div>
                  <div class="promo__text">
                    <div class="promo__author">Căn hộ</div>
                    <div class="promo__title">The Galaxy Home</div>
                    <div class="promo__price">790,000 đ/đêm</div>
                    <div class="promo__description">
                      Phòng đơn: 1 phòng ngủ, 2 khách <br />
                      Diện tích : 55m2 <br />
                      Vị trí : Ba Đình, Hà Nội
                    </div>
                  </div>
                </a>

                <a href="/" class="promo__item">
                  <div class="promo__image"></div>
                  <div class="promo__text">
                    <div class="promo__author">Căn hộ</div>
                    <div class="promo__title">The Galaxy Home</div>
                    <div class="promo__price">790,000 đ/đêm</div>
                    <div class="promo__description">
                      Phòng đơn: 1 phòng ngủ, 2 khách <br />
                      Diện tích : 55m2 <br />
                      Vị trí : Ba Đình, Hà Nội
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </section>
        ) : null}
      </div>
    );
  }
}

export default Promo;
