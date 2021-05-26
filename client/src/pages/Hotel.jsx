import React, { Component } from 'react'
import Header from '../Components/header/header'
import Gallery from '../Components/Gallery/Gallery'
import Detail from '../Components/Detail/Detail'
import Footer from '../Components/footer/footer'
// import {HOST_URL} from "../config";
// import Booking from '../Components/booking/Booking'
class Hotel extends Component {
    state = {
        id : this.props.match.params.id,
    }


    render () {
        return (
            <div className = '_layout'>
                <Header></Header>
                <div className ='i_hotel'>
                    <Gallery></Gallery>
                    <Detail id={this.state.id}></Detail> 
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default Hotel;