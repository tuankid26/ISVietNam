import React from 'react'
import {Component} from 'react'
import './Gallery.css'
class Gallery extends Component {
    render () {
        return (
            <div className='gallery'>
                        <div id='headerSlider' className= 'slick-initialized slick-slider' >
                            <div className='slick-list draggable' >
                                <div className ='slick-track'>
                                    <div className="slick-slide">
                                        <img src='https://nghekhachsan.com/upload/Ni-Anh-NKS/Nam-2020/Thang-1/homestay-dep-tai-ha-noi-01.jpg' alt='img1'></img>
                                    </div>
                                    <div className="slick-slide">
                                        <img src='https://nghekhachsan.com/upload/Ni-Anh-NKS/Nam-2020/Thang-1/homestay-dep-tai-ha-noi-03.jpg' alt='img2'></img>
                                    </div>
                                    <div className="slick-slide"></div>
                                    <div className="slick-slide"></div>
                                    <div className="slick-slide"></div>
                                </div>
                            </div>
                        </div>
                        <div className = 'hotel-id'>
                            <div className ='hotel-id__wrapper d-inline-block'>
                                <p className='mb--0 p--small-2 bold text-center'>
                                    Mã chỗ ở
                                    <br></br>
                                    1
                                </p>
                            </div>
                        </div>
                    </div>
        );
    } 
}

export default Gallery ;