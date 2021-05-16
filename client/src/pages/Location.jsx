import React, { Component } from 'react';
import Header from '../Components/header/header';
import Footer from '../Components/footer/footer';
import './css/location.css'
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
                                        
                                    </div>
                                </div>
                            </div>
                            <div className= 'container container--md'>
                                <div className='el-row' >
                                    <div className='section mt--30'>
                                        <div className='row'>
                                            <h2 className='extra-bold col-xs-12 col-md-9'>50 hotel tại Hà Nội</h2>
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