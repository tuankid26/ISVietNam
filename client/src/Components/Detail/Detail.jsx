import React from 'react'
import {Component} from 'react'
import './Detail.css'
import arrow from './icon-arrow.png'
class Detail extends Component {

    render () {
        return (
            <div className ='detail'>
                <div className ='container container--hotel'>
                    <div className ='section'>
                        <div className ='row'>
                            <div className = 'col col-md-8 col-xs-12' >
                                <div className = 'detail-left'>
                                    <div className = 'section'>
                                        <div className= 'breadcrumbs middle-xs  d-sm-flex'>
                                            <a href='/' className= 'nut-link-active'>ISVietNam</a>
                                                <i className = 'icon-arrow-right'></i>
                                            <span className='is-flex middle-xs'>
                                                <a href='/'> Hà Nội</a>
                                                <i className = 'icon-arrow-right'></i>
                                            </span>
                                            <span className='is-flex middle-xs'>
                                                <a href='/'> Hai Bà Trưng</a>
                                                <i className = 'icon-arrow-right'></i>
                                            </span>
                                            <span className='is-flex middle-xs'>
                                                <a href='/'> Phường Bách Khoa</a>
                                                
                                            </span>
                                        </div>
                                        <section>
                                            <div className = 'row'>
                                                <div className='col-xs-12 col-sm-10'>
                                                    <div>
                                                        <div className ='title'>
                                                            <div className= 'row'>
                                                                <h1 className='mb-12 break-word'>The Pankiz Home</h1>
                                                            </div>
                                                        </div>
                                                        <div className ='detail-location is-flex middle-xs start-md mt--18'>
                                                            <div>
                                                                <svg version='1.1' viewBox='0 0 24' className='svg-icon svg-fill' width='24px' height='24px'></svg>
                                                                <span className='ml--6 bold'>Trực Ninh, Nam Định, Việt Nam </span>
                                                            </div>
                                                        </div>
                                                        <div className ='detail__type is-short-intro is-flex' >
                                                            <div>
                                                                <p className='mb--0'>
                                                                    <span>Phòng riêng:</span>
                                                                    <span> 1 phòng tắm, </span>
                                                                    <span> 1 giường, </span>
                                                                    <span> 1 phòng ngủ, </span>
                                                                    <span> 2 khách (tối đa 3 khách) </span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className =' d-sm-flex w--100 amenities mt--36'>
                                                            <div className ='detail-intro'>
                                                                <div className ='is-relative'>
                                                                    <div id="short_intro" class="hotel-des dot show"  >
                                                                        <p><strong>Tóm tắt về The Pankiz House</strong></p>
                                                                        <p>+ Căn hộ nằm trên tầng 2 của toà nhà , với ban công nhìn xuống phố cổ</p>
                                                                        <p>+ Vị trí không thể tốt hơn ! Cách chợ đêm cuối tuần 2 phút đi bộ , Chợ Đồng Xuân chỉ 5 phút , hồ Hoàn Kiếm 10 phút đi bộ</p>
                                                                        <p>+ Ngoài ra có rất nhiều hàng quán xung quanh. Nổi tiếng bạn có thể tìm thấy cafe trứng, cafe cốt dừa , các loại nước ép ngay trước cửa nhà. Cửa hàng tiện lợi chỉ cách 100m mở 24h . Các món ngon của Hà Nội cũng tập trung nhiều xung quanh khu vực này với vài bước chân thôi ( Bánh Cuốn, Phở, Bún Thang, Bún riêu , Bún chả ect ...)</p>
                                                                        <p>+ Phòng tắm rộng nằm ngay trong phòng với vách tắm ngăn .</p>
                                                                        <p>+ Smart TIvi , có netflix ( bạn phải có account riêng của mình nhé :) )</p>
                                                                        <p>+ Một cái bếp nhỏ trong phòng để bạn có thể nấu những món đơn giản</p>
                                                                        <p>+ Căn hộ nằm trên tầng 3 của toà nhà và không có thang máy </p>
                                                                        <p>+ Nếu bạn đi xe máy , có chỗ để xe ban ngày , ngay trước cửa chỗ nghỉ. Ban đêm sẽ có bãi đỗ xe cách 100m ( mất phí)</p><p>Nếu phòng này không không trống ngày bạn muốn đặt, hãy nhắn tin hỏi bọn mình để có các loại phòng khác nhé</p>
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
                                    <div id='price'></div>
                                    <div className ='title mt--60'>
                                        <h3 class='mb--6'> Tiện nghi chỗ ở</h3>
                                        <span>Giới thiệu về các tiện nghi và dịch vụ nơi cư trú</span>
                                    </div>
                                    <div className = 'is-flex amenities'>
                                        <div className='d-sm-flex w--100'>
                                            <div className='fl-item-stretch'>
                                                <div item='[object object] '>
                                                    <h4 className='mt--24 mb--0'>Tiện ích</h4>
                                                    <ul className='list list--3 is-flex'>
                                                        <li className='mt--12'><span>Wifi</span></li>
                                                        <li className='mt--12'><span>TV</span></li>
                                                        <li className='mt--12'><span>Điều hòa</span></li>
                                                        <li className='mt--12'><span>Máy giặt</span></li>
                                                        <li className='mt--12'><span>Ti vi</span></li>
                                                        <li className='mt--12'><span>Tủ Lạnh</span></li>
                                                    </ul>
                                                </div>
                                                <div item='[object object] '>
                                                    <h4 class="mt--24 mb--0">Tiện ích bếp</h4>
                                                    <ul class="list list--3 is-flex">
                                                        <li class="mt--12">
                                                            <span>Tủ lạnh</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div item='[object object] '>
                                                    <h4 class="mt--24 mb--0">Tiện ích phòng</h4>
                                                        <ul class="list list--3 is-flex">
                                                            <li class="mt--12">
                                                                <span>Ban Công</span>
                                                            </li>
                                                        </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='d-block d-sm-none fl-item-stretch mt--24'></div>
                                    </div>
                                    <div>
                                        <div class="title mt--60 mb--24">
                                            <h3 class="mb--6">Giá phòng</h3> 
                                            <span>Giá có thể tăng vào cuối tuần hoặc ngày lễ</span>
                                        </div> 
                                        <div class="room-price__wrap">
                                            <div class="is-flex jbetween align-center py--12 px--18">
                                                <span class="c-gray-3 fl-item-50">Thứ hai - Thứ năm</span> 
                                                <span class="c-gray-3 fl-item-50 pl--12 bold text-right">790,000₫</span>
                                            </div> 
                                            <div class="is-flex jbetween align-center py--12 px--18">
                                                <span class="c-gray-3 fl-item-50">Thứ sáu - Chủ nhật</span> 
                                                <span class="c-gray-3 fl-item-50 pl--12 bold text-right">790,000₫</span>
                                                </div> 
                                            <div class="is-flex jbetween align-center py--12 px--18">
                                                <span class="c-gray-3 fl-item-50">Phí trẻ em tăng thêm</span> 
                                                <span class="c-gray-3 fl-item-50 pl--12 bold text-right">125,000₫ (sau 2 khách)</span>
                                                </div>
                                            <div class="is-flex jbetween align-center py--12 px--18">
                                                <span class="c-gray-3 fl-item-50 ">Thuê theo tháng</span> 
                                                <span class="c-gray-3 fl-item-50 pl--12 bold text-right">-10.00 %</span>
                                                </div> 
                                            <div class="is-flex jbetween align-center py--12 px--18">
                                                <span class="c-gray-3 fl-item-50">Số đêm tối thiểu</span> 
                                                <span class="c-gray-3 fl-item-50 pl--12 bold text-right">1 đêm</span>
                                                </div> 
                                            <div class="is-flex jbetween align-center py--12 px--18">
                                                <span class="c-gray-3 fl-item-50">Số đêm tối đa</span> 
                                                <span class="c-gray-3 fl-item-50 pl--12 bold text-right">90 đêm</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className = 'col col-md-4 col-xs-4 d-none d-md-block' ></div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Detail ;