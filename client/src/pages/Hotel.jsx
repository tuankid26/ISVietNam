import React, { Component } from 'react'
import Header from '../Components/header/header'
import Gallery from '../Components/Gallery/Gallery'
import Detail from '../Components/Detail/Detail'
import Footer from '../Components/footer/footer'
class Hotel extends Component {
    
    render () {
        return (
            <div className = '_layout'>
                <Header></Header>
                <div className ='i_hotel'>
                    <Gallery></Gallery>
                    <Detail></Detail>
                    
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default Hotel;