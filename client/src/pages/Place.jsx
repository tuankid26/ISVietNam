import React, {Componnet} from 'react';
import Header from '../Components/header/header'
import Footer from '../Components/footer/footer'
class Place extends Componnet {

    render() {
        return (
            <div >
                <Header></Header>
                <div className = 'place'>
                      
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default Place;