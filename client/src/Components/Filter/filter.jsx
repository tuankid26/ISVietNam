import React, { Component } from "react";
import "./filter.css";
class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      img: [],
      province: this.props.city,
      district: "Tất cả",
    };
    this.handleChangeProvince = this.handleChangeProvince.bind(this);
    this.handleChangeDistrict = this.handleChangeDistrict.bind(this);
  }
  componentDidMount() {
    fetch("http://localhost/ISVietNam/api/place")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          data: data.response.place.rows,
        });
      });
    fetch("http://localhost/ISVietNam/api/iplace")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          img: data.response.iplace.rows,
        });
        // console.log(data.response)
      });
  }
  handleChangeProvince(event) {
    this.setState({
      province: event.target.value,
      district: "Tất cả",
    });
  }
  handleChangeDistrict(event) {
    this.setState({ district: event.target.value });
  }
  render() {
    // console.log(this.state.img)
    const listProvince = [];
    const listDistrict = ["Tất cả"];
    const { data, district, province } = this.state;
    data.map((p) => {
      if (listProvince.indexOf(p.province) === -1) {
        listProvince.push(p.province);
      }
      return null;
    });
    data
      .filter((p) => p.province === this.state.province)
      .map((op) => {
        if (listDistrict.indexOf(op.district) === -1) {
          listDistrict.push(op.district);
        }
        return null;
      });
    const clause =
      district !== "Tất cả"
        ? data.filter((p) => p.district === this.state.district)
        : data.filter((p) => p.province === this.state.province);
    return (
      <div className="filter">
        <p className='filter-text'> 
          <span>
          <img className='icon-filter' src='/images/Icon/filter.png' alt='icon-filter' /></span>
          Bộ lọc
        </p>
        <div className='province'>
        {/* <label htmlFor="">Tỉnh/Thành phố:</label> */}

        <select className='filter-title active' name={province} onChange={this.handleChangeProvince}>
          {listProvince &&
            listProvince.map((p) => (
              <option value={p} selected={province === p}>
                {p}
              </option>
            ))}
        </select>
        </div>
        <div className='district' >
        {/* <label className='district_label' htmlFor="">Quận/Huyện:</label> */}
        <select className='filter-title active' name={this.state.district} onChange={this.handleChangeDistrict}>
          {listDistrict &&
            listDistrict.map((op) => <option value={op}>{op}</option>)}
        </select>
        </div>
        <div class="article__grid">
          {clause.map((r) => (
            <a href={"/place/".concat(r.ID_place)} class="article__item">
              {/* {console.log(this.state.img.filter((p) => p.ID_place === r.ID_place).map((x) => {return x.path})[0])} */}
              {/* {this.state.img.filter((p) => p.ID_place === r.ID_place)} */}
              <div class="article__image">
                <img
                  src={"/images/Image/".concat(
                    this.state.img
                      .filter((p) => p.ID_place === r.ID_place)
                      .map((x) => {
                        return x.path;
                      })[0]
                  )}
                  alt=""
                />
              </div>
              <div class="article__text">
                <div class="article__title">{r.name_place}</div>
                <div class="article__description">
                  {r.destination.substr(0, 100).concat("...")}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    );
  }
}
export default Filter;
