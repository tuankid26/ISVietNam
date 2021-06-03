import React, { Component } from 'react';
import Header from '../Components/header/header'
import Footer from '../Components/footer/footer'
import './css/News.css'
class News extends Component {
    state = {
        news: [],
        id: this.props.match.params.id,
        title: "",
        Paragraph_1: "",
        Paragraph_2: "",
        Paragraph_3: "",
        author: ""
    }

    componentDidMount() {
        fetch('http://localhost/ISVietNam/api/news')
            .then(response => response.json())
            .then(result => {
                const data = result.response.news.rows;
                const id = this.state.id;
            //     const id1 = 1 
            //    this.setState({id : id1})
                console.log(this.state.id)
                if (id)
                    this.setState({
                        title: data[id].title,
                        Paragraph_1: data[id].Paragraph_1,
                        Paragraph_2: data[id].Paragraph_2,
                        Paragraph_3: data[id].Paragraph_3,
                        author: data[id].author
                    })
                this.setState({ news: data, })
                // console.log(data[id]);
            })
    }

    render() {
        const { news } = this.state
        if (this.state.id)
            return (
                <div >
                    <Header></Header>
                    <div className='news'>
                        <div className="new_header container-md">
                            <h1 >{this.state.title}</h1>
                            <p className="td-post-sub-title"> Tạp chí du lịch Anh, đã chỉ ra những thông tin đẳng cấp bậc nhất ở Việt Nam, hứa hẹn thỏa mãn mọi nhu cầu của các vị khách khó tính. </p>
                            <div className="td-module-meta-info">
                                <div className="td-author-name">
                                    <div className="td-author-by">
                                        Đăng tải bởi : <div className="name-post" > {this.state.author}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="td-post-content">
                            <div className="container container-md container-new">
                                {/* <h3>Tên đoạn 1</h3> */}
                                <p>{this.state.Paragraph_1}</p>
                                <img className="img-new" alt="img1" src={`../../images/Image/News/${parseInt(this.state.id)+1}_1.jpg`} ></img>
                            </div>
                            <div className="container container-md container-new">
                                {/* <h3>Tên đoạn 2</h3> */}
                                <p>{this.state.Paragraph_2}</p>
                                <img className="img-new" alt="img2" src={`../../images/Image/News/${parseInt(this.state.id)+1}_2.jpg`} ></img>
                            </div>
                            <div className="container container-md container-new">
                                {/* <h3>Tên đoạn 3</h3> */}
                                <p>{this.state.Paragraph_3}</p>
                                <img className="img-new" alt="img3" src={`../../images/Image/News/${parseInt(this.state.id)+1}_3.jpg`} ></img>
                            </div>
                        </div>
                    </div>
                    <Footer></Footer>
                </div>
            );
        else
            return (
                <div>
                    <Header></Header>
                    <section class="articles">
                        {console.log('full list')}
                        {/* {console.log(news)} */}
                        <div class="article__content container container--pall">
                            <h2>Tin Tức</h2>
                            <div class="article__grid">
                                {news && news.map((r) =>
                                    <a href={"/news/".concat(r.ID_news - 1)} class="article__item">
                                        <div class="article__image"><img src={'/images/Image/'.concat(r.Image_1)} alt="" /></div>
                                        <div class="article__text">
                                            <div class="article__author">{r.author}</div>
                                            <div class="article__title">{r.title}
                                            </div>
                                            <div class="article__description">
                                                {r.Paragraph_1.substr(0, 100).concat('...')}
                                            </div>
                                        </div>
                                    </a>
                                )}
                            </div>

                        </div>
                    </section>
                    <Footer></Footer>
                </div>

            )
    }
}

export default News;