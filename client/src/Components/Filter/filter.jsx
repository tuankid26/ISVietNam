import React, {Component} from 'react'
import './filter.css'

class Filter extends Component {

    render() {
        return(
            <div className = 'mt--4'>
                <h5 className='text-primary'>
                    <icon className= 'icon-filter small'></icon>
                    "Bộ lọc"
                </h5>
                <div className='filters'>
                    <div className = 'form-row filter-group'>
                    <div class="mt-3 mt-lg-0 col-lg-2 filter-parent">
                        <div class="filter-title active">
                            <span class="filter-notice">Chọn</span> Thành phố
                        </div>
                        <div class="filter-menu none" >
                                        <div>
                            <div class="form-check mb-2">
                                <input type="checkbox" name="fl[]" value="Hà Nội"/>
                                <span class="checkmark"></span>
                                <span>Hà Nội</span>
                            </div>
                            </div>
                                        <div>
                            <div class="form-check mb-2">
                                <input type="checkbox" name="fl[]" value="Hồ Chí Minh"/>
                                <span class="checkmark"></span>
                                <span>Hồ Chí Minh</span>
                            </div>
                            </div>
                                        <div>
                            <div class="form-check mb-2">
                                <input type="checkbox" name="fl[]" value="Đà Nẵng"/>
                                <span class="checkmark"></span>
                                <span>Đà Nẵng</span>
                            </div>
                            </div>
                                        <div>
                            <div class="form-check mb-2">
                                <input type="checkbox" name="fl[]" value=""/>
                                <span class="checkmark"></span>
                                <span>Ninh Bình</span>
                            </div>
                            </div>
                                        <div>
                            <div class="form-check mb-2">
                                <input type="checkbox" name="fl[]" value="Người đi làm"/>
                                <span class="checkmark"></span>
                                <span>Nha Trang</span>
                            </div>
                            </div>
                                        <hr class="mt-2 mb-1"/>
                            <div class="filter-action">
                                <span class="filter-clear">Clear</span>
                                <span class="filter-shortened">Thu gọn <icon class="icon-angle-up ml-1"></icon></span>
                            </div>
                        </div>
                    </div>
                        <div className="mt-3 mt-lg-0 col-lg-3 filter-parent">
                            <div className="filter-title">
                                <span className="filter-notice">Chọn</span> khu vực
                            </div>
                            <div className="filter-menu none" >
                                <div className="filter-menu-ct mr-5 mr-lg-0">
                                    <div className="form-check mb-2">
                                        <input type="checkbox" name="fd[]" value="Quận Ba Đình"/>
                                        <span className="checkmark"></span>
                                        <span>Quận Ba Đình</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input type="checkbox" name="fd[]" value="Quận Bắc Từ Liêm"/>
                                        <span className="checkmark"></span>
                                        <span>Quận Bắc Từ Liêm</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input type="checkbox" name="fd[]" value="Quận Cầu Giấy"/>
                                        <span className="checkmark"></span>
                                        <span>Quận Cầu Giấy</span>
                                
                                    </div>                                         
                                    <div className="form-check mb-2">
                                        <input type="checkbox" name="fd[]" value="Quận Đống Đa"/>
                                        <span className="checkmark"></span>
                                        <span>Quận Đống Đa</span>
                                    
                                    </div>          
                                    <div className="form-check mb-2">
                                        <input type="checkbox" name="fd[]" value="Quận Hà Đông"/>
                                        <span className="checkmark"></span>
                                        <span>Quận Hà Đông</span>
                                    </div>          
                                    <div className="form-check mb-2">
                                        <input type="checkbox" name="fd[]" value="Quận Hai Bà Trưng"/>
                                        <span className="checkmark"></span>
                                        <span>Quận Hai Bà Trưng</span>
                                    
                                    </div>                   
                                    <div className="form-check mb-2">
                                        <input type="checkbox" name="fd[]" value="Quận Hoàn Kiếm"/>
                                        <span className="checkmark"></span>
                                        <span>Quận Hoàn Kiếm</span>
                                    </div>                                  
                                    <div className="form-check mb-2">
                                        <input type="checkbox" name="fd[]" value="Quận Hoàng Mai"/>
                                        <span className="checkmark"></span>
                                        <span>Quận Hoàng Mai</span>
                                    </div>                           
                                    <div className="form-check mb-2">
                                        <input type="checkbox" name="fd[]" value="Quận Long Biên"/>
                                        <span className="checkmark"></span>
                                        <span>Quận Long Biên</span>
                                    </div>                               
                                    <div className="form-check mb-2">
                                        <input type="checkbox" name="fd[]" value="Quận Nam Từ Liêm"/>
                                        <span className="checkmark"></span>
                                        <span>Quận Nam Từ Liêm</span>
                                    </div>                              
                                    <div className="form-check mb-2">
                                        <input type="checkbox" name="fd[]" value="Quận Tây Hồ"/>
                                        <span className="checkmark"></span>
                                        <span>Quận Tây Hồ</span>
                                    </div>         
                                    <div className="form-check mb-2">
                                        <input type="checkbox" name="fd[]" value="Quận Thanh Xuân"/>
                                        <span className="checkmark"></span>
                                        <span>Quận Thanh Xuân</span>
                                    </div>        
                                    <hr className="mt-2 mb-1"/>
                                    <div className="filter-action">
                                    <span className="filter-clear">Clear</span>
                                    <span className="filter-shortened">Thu gọn <icon className="icon-angle-up ml-1"></icon></span>
                                </div>
                                </div>
                            
                            </div>
                        </div> 
                        <div class="mt-3 mt-lg-0 col-lg-2 mb-3 text-right text-lg-left">
                            <button class="btn btn-purple"><icon class="icon-filter"></icon> Tiến hành lọc</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Filter;