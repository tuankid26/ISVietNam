import React, {Component} from 'react';
import Header from '../Components/header/header'
import Footer from '../Components/footer/footer'
class Place extends Component {

    render() {
        return (
            <div >
                <Header></Header>
                <div className = 'place'>
                      <p> Place</p>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default Place;