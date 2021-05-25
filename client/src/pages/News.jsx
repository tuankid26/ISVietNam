import React, {Component} from 'react';
import Header from '../Components/header/header'
import Footer from '../Components/footer/footer'
import './css/News.css'
// import img1 from '../images/Image/News/3.jpg'
// import img2 from "../images/Image/News/4.jpg"
// import img3 from "../images/Image/News/5.jpg"
class News extends Component {
    state = {
        id :  this.props.match.params.id,
        title : "",
        Paragraph_1 : "",
        Paragraph_2 : "",
        Paragraph_3 : "",
        author : ""
    }
     
    componentDidMount() {
        fetch('http://localhost/ISVietNam/api/news')
            .then(response => response.json())
            .then(result => {
                const news = result.response.news.rows;
                const id = this.state.id;
                this.setState({
                    title : news[id].title,
                    Paragraph_1 : news[id].Paragraph_1,
                    Paragraph_2 : news[id].Paragraph_2,
                    Paragraph_3 : news[id].Paragraph_3,
                    author : news[id].author
                })
                
                console.log(news[id]);
            })
    }

    render() {
        // console.log(this.state.News[1].content);
        return (
            <div >
                <Header></Header>
                <div className = 'news'>
                    <div className = "new_header container-md">
                        <h1 >{this.state.title}</h1>
                        <p className= "td-post-sub-title"> Tạp chí du lịch Anh, đã chỉ ra những resort đẳng cấp bậc nhất ở Việt Nam, hứa hẹn thỏa mãn mọi nhu cầu của các vị khách khó tính. </p>
                        <div className= "td-module-meta-info">
                            <div className = "td-author-name">
                                <div className= "td-author-by">
                                    Đăng tải bởi : <div className="name-post" > {this.state.author}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = "td-post-content">
                        <div className="container container-md">
                            {/* <h3>Tên đoạn 1</h3> */}
                            <p>{this.state.Paragraph_1}</p>
                            <img alt="img1" src='../../images/Image/News/3.jpg' style = {{width : "auto"}}></img>
                        </div>
                        <div className="container container-md ">
                            {/* <h3>Tên đoạn 2</h3> */}
                            <p>{this.state.Paragraph_2}</p>
                            <img alt="img2" src='../../images/Image/News/4.jpg' style = {{width : "auto"}}></img>
                        </div>
                        <div className="container container-md">
                            {/* <h3>Tên đoạn 3</h3> */}
                            <p>{this.state.Paragraph_3}</p>
                            <img alt="img3" src='../../images/Image/News/5.jpg' style = {{width : "auto"}}></img>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default News;