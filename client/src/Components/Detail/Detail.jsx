import React from 'react'
import {Component} from 'react'
import './Detail.css'
import arrow from './icon-arrow.png'
class Detail extends Component {

    render () {
        return (
            <div className ='detail'>
                <div className ='container container-hotel'>
                    <div className ='section'>
                        <div className ='row'>
                            <div className = 'col col-md-8 col-xs-12' >
                                <div className = 'detail-left'>
                                    <div className = 'section'>
                                        <div className= 'breadcrumbs middle-xs  d-sm-flex'>
                                            <a href='/' className= 'nut-link-active'>ISVietNam</a>
                                                <img src={arrow} width={'18px'} height={'14px'}></img>
                                            <span className='is-flex middle-xs'>
                                                <a href='/'> Hà Nội</a>
                                                <img src={arrow} width={'18px'} height={'14px'}></img>
                                            </span>
                                            <span className='is-flex middle-xs'>
                                                <a href='/'> Hai Bà Trưng</a>
                                                <img src={arrow} width={'18px'} height={'14px'}></img>
                                            </span>
                                            <span className='is-flex middle-xs'>
                                                <a href='/'> Phường Bách Khoa</a>
                                                
                                            </span>
                                        </div>
                                        <section>
                                            <div className = 'row'>
                                                <div className='col-xs-12'>
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
                                                                    <span>1 phòng tắm, </span>
                                                                    <span>1 giường, </span>
                                                                    <span>1 phòng ngủ, </span>
                                                                    <span>2 khách (tối đa 3 khách) </span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className =' d-sm-flex w--100 amenities mt--36'>
                                                            <div className ='detail-intro'>
                                                                <div className ='is-relative'>
                                                                    <div id="short_intro" class="hotel-des dot show" >
                                                                        <p><strong>Căn hộ nằm trên tầng 2 của toà nhà , với ban công nhìn xuống phố cổ</strong></p>
                                                                        <p>Vị trí không thể tốt hơn ! Cách chợ đêm cuối tuần 2 phút đi bộ , Chợ Đồng Xuân chỉ 5 phút , hồ Hoàn Kiếm 10 phút đi bộ</p>
                                                                        <p>Ngoài ra có rất nhiều hàng quán xung quanh. Nổi tiếng bạn có thể tìm thấy cafe trứng, cafe cốt dừa , các loại nước ép ngay trước cửa nhà. Cửa hàng tiện lợi chỉ cách 100m mở 24h . Các món ngon của Hà Nội cũng tập trung nhiều xung quanh khu vực này với vài bước chân thôi ( Bánh Cuốn, Phở, Bún Thang, Bún riêu , Bún chả ect ...)</p>
                                                                        <p>Phòng tắm rộng nằm ngay trong phòng với vách tắm ngăn .</p>
                                                                        <p>Smart TIvi , có netflix ( bạn phải có account riêng của mình nhé :) )</p>
                                                                        <p>Một cái bếp nhỏ trong phòng để bạn có thể nấu những món đơn giản</p>
                                                                        <p>Căn hộ nằm trên tầng 3 của toà nhà và không có thang máy </p>
                                                                        <p>Nếu bạn đi xe máy , có chỗ để xe ban ngày , ngay trước cửa chỗ nghỉ. Ban đêm sẽ có bãi đỗ xe cách 100m ( mất phí)</p><p>Nếu phòng này không không trống ngày bạn muốn đặt, hãy nhắn tin hỏi bọn mình để có các loại phòng khác nhé</p>
                                                                    </div>
                                                                    <a className = 'btn color-i pointer mt--6'>Đọc Thêm </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>      
                                    </div>
                                    <div className ='title mt--60'>
                                        <h3 class='mb--6'> Tiện nghi chỗ ở</h3>
                                        <span>Giới thiệu về các tiện nghi và dịch vụ nơi cư trú</span>
                                    </div>
                                    <div className = 'is-flex'></div>
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