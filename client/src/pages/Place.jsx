import React, {Component} from 'react';
import Header from '../Components/header/header'
import Footer from '../Components/footer/footer'
import './css/News.css'
import img1 from "../images/Image/News/1.jpg"
import img2 from "../images/Image/News/2.jpg"
import img3 from "../images/Image/News/3.jpg"
import Promo from '../Components/promo/promo';
class Place extends Component {
    state = {
        News : [],
        title : "",
        content : ""
    }
     
    // componentDidMount() {
    //     // const news = []
    //     fetch('http://localhost/ISVietNam/api/news')
    //         .then(response => response.json())
    //         .then(json => {
    //             const news = json.response.news.rows
    //             this.setState({News : news})
    //             this.setState({title : news[0].title})
    //             this.setState({content : news[0].content})
    //             console.log(this.state.content)
    //         })
    // }

    render() {
        // console.log(this.state.News[1].content);
        return (
            <div >
                <Header></Header>
                <div className = 'news'>
                    <div className = "new_header">
                        <h1 >Hồ Gươm</h1>
                        <p className= "td-post-sub-title"> Tạp chí du lịch Anh, đã chỉ ra những resort đẳng cấp bậc nhất ở Việt Nam, hứa hẹn thỏa mãn mọi nhu cầu của các vị khách khó tính. </p>
                    </div>
                    <div className = "td-post-content">
                        <div className="container container-md">
                            <h3>Tên đoạn 1</h3>
                            <p>Content đoạn 1</p>
                            <img alt="img1" src={img1} style = {{width : "1024px"}}></img>
                        </div>
                        <div className="container container-md ">
                            <h3>Tên đoạn 2</h3>
                            <p>Content đoạn 2</p>
                            <img alt="img2" src={img2} style = {{width : "1024px"}}></img>
                        </div>
                        <div className="container container-md">
                            <h3>Tên đoạn 3</h3>
                            <p>Content đoạn 3</p>
                            <img alt="img3" src={img3} style = {{width : "1024px"}}></img>
                        </div>
                    </div>
                    <Promo></Promo>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default Place;