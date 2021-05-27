import React, { Component } from 'react';
import Header from '../Components/header/header'
import Footer from '../Components/footer/footer'
// import './css/place.css'
// import img1 from '/images/Image/News/1.jpg'
// import img2 from '/images/Image/News/2.jpg'
// import img3 from '/images/Image/News/3.jpg'
import Promo from '../Components/promo/promo';
import './css/Place.css'
class Place extends Component {
    state = {
        id: this.props.match.params.id,
        ID_place: '',
        ID_province: '',
        title: "",
        destination: "",
        Paragraph_1: "",
        Paragraph_2: "",
        Paragraph_3: "",
        province: '',
        district: ''
    }
    componentDidMount() {

        fetch('http://localhost/ISVietNam/api/place')
            .then(response => response.json())
            .then(result => {
                const place = result.response.place.rows;
                console.log(place)

                const id = this.state.id - 1;
                console.log(id)
                this.setState({
                    title: place[id].name_place,
                    destination: place[id].destination,
                    ID_place: place[id].ID_place,
                    ID_province: place[id].ID_province,
                    Paragraph_1: place[id].Paragraph_1,
                    Paragraph_2: place[id].Paragraph_2,
                    Paragraph_3: place[id].Paragraph_3,
                    province: place[id].province,
                    district: place[id].district
                })

                console.log(place[id-1]);
            })
    }
    render() {
        return (
            <div >
                <Header></Header>
                <div className='place'>
                    <div className="place_header">
                        <h1 >{this.state.title}</h1>
                        <span style={{marginLeft:'10px',fontStyle:'italic'}}> Vị trí: {this.state.district} , {this.state.province}</span>
                        <p className="td-post-sub-title"> {this.state.destination}</p>
                    </div>
                    <div className="td-post-content">
                        <div className="container container-md">
                            <h3>Sơ lược</h3>
                            <p>{this.state.Paragraph_1}</p>
                            <img alt="img1" src={` ../../images/Image/City/${this.state.ID_place}_1.jpg`} style={{ width: "1024px" }}></img>
                        </div>
                        <div className="container container-md ">
                            <h3>Giới thiệu về địa điểm</h3>
                            <p>{this.state.Paragraph_2}</p>
                            <img alt="img2" src={` ../../images/Image/City/${this.state.ID_place}_2.jpg`} style={{ width: "1024px" }}></img>
                        </div>
                        {/* <div className="container container-md">
                        
                            <p>{this.state.Paragraph_3}</p>
                            <img alt="img3" src={` ../../images/Image/City/${this.state.ID_place}_3.jpg`} style = {{width : "1024px"}}></img>
                        </div> */}
                    </div>
                    <Promo id={this.state.ID_place} province={this.state.province} district={this.state.district}></Promo>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default Place;