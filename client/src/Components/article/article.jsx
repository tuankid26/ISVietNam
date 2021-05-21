import React, { Component } from "react";
import "./article.scss";
// import img from './hanoi1.png'

class Article extends Component {
  render() {
    return (
      <section class="articles">
        <div class="article__content container container--pall">
          <h2>Tin Tức</h2>

          <div class="article__grid">
            <a href="/" class="article__item">
              <div class="article__image"></div>
              <div class="article__text">
                <div class="article__author">By Tuấn Nguyễn</div>
                <div class="article__title">
                  Receive money in any currency with no fees
                </div>
                <div class="article__description">
                  The world is getting smaller and we’re becoming more mobile.
                  So why should you be forced to only receive money in a single
                  …
                </div>
              </div>
            </a>

            <a href="/" class="article__item">
              <div class="article__image"></div>
              <div class="article__text">
                <div class="article__author">By Wilson Hutton</div>
                <div class="article__title">
                  Treat yourself without worrying about money
                </div>
                <div class="article__description">
                  Our simple budgeting feature allows you to separate out your
                  spending and set realistic limits each month. That means you …
                </div>
              </div>
            </a>

            <a href="/" class="article__item">
              <div class="article__image"></div>
              <div class="article__text">
                <div class="article__author">By Wilson Hutton</div>
                <div class="article__title">
                  Take your Easybank card wherever you go
                </div>
                <div class="article__description">
                  We want you to enjoy your travels. This is why we don’t charge
                  any fees on purchases while you’re abroad. We’ll even show you
                  …
                </div>
              </div>
            </a>

            <a href="/" class="article__item">
              <div class="article__image"></div>
              <div class="article__text">
                <div class="article__author">By Claire Robinson</div>
                <div class="article__title">
                  Our invite-only Beta accounts are now live!
                </div>
                <div class="article__description">
                  After a lot of hard work by the whole team, we’re excited to
                  launch our closed beta. It’s easy to request an invite through
                  the site …
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Article;
