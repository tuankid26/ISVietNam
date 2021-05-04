import React, { Component } from 'react';
import Header from '../Components/header/header';
import Footer from '../Components/footer/footer';
import './css/location.css';
class Location extends Component {

    render() {
        return (
            <div >
                <Header></Header>
                <div className = 'location'>
                      <div id='mapWrap' className='wapper'>
                            {/* <div className='shadow-2'>
                              //Bộ lọc<p>Bộ lọc</p>
                             </div> */}
                            <div className="container container--md mt--30">
                                <div class="row mt--30">
                                    <div class="col-lg-12">
                                        <div class="title mb--30 d-flex">
                                            <img  alt="" class="float-left mg__right--10 icon-alarm" />
                                            <p class="float-left m--0 text--justify" >
                                              <b>Trước khi đặt phòng, hãy kiểm tra những địa điểm bị hạn chế du lịch trong thời gian này.</b> 
                                              Sức khỏe và sự an toàn của cộng đồng luôn được đặt hàng đầu. Vì vậy, vui lòng làm theo chỉ thị của chính phủ bởi điều đó thực sự cần thiết.
                                            </p>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className= 'container container--md'>
                                <div className='el-row' >
                                    <div className='section mt--30'>
                                        <div>
                                            <div className='row'>
                                                <h2 className='extra-bold col-xs-12 col-md-9'>50 hotel tại Hà Nội</h2>
                                                <div className='col-xs-12 col-md-3 is-flex jend'>
                                                    <div className='el-seclect is-square'>
                                                        <div className='el-input el-input--prefix el-input--suffix'>
                                                            <input type='text' readOnly='readonly' autoComplete='off' placeholder='Lựa chọn' className='el-input__prefix'></input>
                                                            <span className='el-input__prefix'>
                                                                <span>Sắp xếp:</span>
                                                            </span>
                                                            <span class="el-input__suffix">
                                                                <span class="el-input__suffix-inner">
                                                                    <i class="el-select__caret el-input__icon el-icon-arrow-up"></i>
                                                                </span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                      </div>

                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default Location;