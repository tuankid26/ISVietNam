import React, { Component } from "react";
import "./article.scss";
// import { Link } from 'react-router-dom'
// import img from './hanoi1.png'

class Article extends Component {
  constructor() {
    super();
    this.state = {
      news: [],
    }
  }
  componentDidMount() {
    fetch('http://localhost/ISVietNam/api/news')
      .then(response => response.json())
      .then(result => {
        this.setState({
          news: result.response.news.rows,
        })
      })
  }
  render() {
    const { news } = this.state
    return (

      <section class="articles">
        {console.log(news)}
        <div class="article__content container container--pall">
          <h2>Tin Tức Nổi Bật</h2>
          <div class="article__grid">
            {news && news.filter((_,k) => (k < 4)).map((r)=>
              <a href={"/news/".concat(r.ID_news - 1) }class="article__item">
                <div class="article__image"><img src={'/images/Image/'.concat(r.Image_1)} alt="" /></div>
                <div class="article__text">
                  <div class="article__author">{r.author}</div>
                  <div class="article__title">{r.title}
                  </div>
                  <div class="article__description">
                    {r.Paragraph_1.substr(0,100).concat('...')}
                  </div>
                </div>
              </a>
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default Article;
