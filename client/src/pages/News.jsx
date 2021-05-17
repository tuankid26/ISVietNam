import React, {Component} from 'react';
import Header from '../Components/header/header'
import Footer from '../Components/footer/footer'
class News extends Component {
    state = {
        News : [],
        title : "",
        content : ""
    }
     
    componentDidMount() {
        // const news = []
        fetch('http://localhost/ISVietNam/api/news')
            .then(response => response.json())
            .then(json => {
                const news = json.response.news.rows
                this.setState({News : news})
                this.setState({title : news[0].title})
                this.setState({content : news[0].content})
                console.log(this.state.content)
            })
    }

    render() {
        // console.log(this.state.News[1].content);
        return (
            <div >
                <Header></Header>
                <div className = 'news'>
                    {/* <h1 dangerouslySetInnerHTML={{__html: this.state.title}}></h1> */}
                    <div dangerouslySetInnerHTML={{__html: this.state.content}}></div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default News;