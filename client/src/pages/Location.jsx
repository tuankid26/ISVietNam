import React, { Component } from 'react';
import Header from '../Components/header/header';
import Footer from '../Components/footer/footer';
import './css/location.css'
import Filter from '../Components/Filter/filter';
class Location extends Component {

    render() {
        return (
            <div >
                <Header></Header>
                <div className = 'location'>
                      <div id='mapWrap' className='wapper'>
                            <div className= 'container container--md'>
                                <Filter></Filter>
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