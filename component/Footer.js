import Link from 'next/link'

function Footer () {
    return (
        <footer id="footer">
        <div id="top-footer" className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="footer-widget about-widget">
                  <div className="footer-logo">
                    <Link href="/">
                      <a className="logo"><img src="./img/logo-alt.png" alt="" /></a>
                    </Link>
                    <p>Populo tritani laboramus ex mei, no eum iuvaret ceteros euripidis, ne alia sadipscing mei. Te inciderint cotidieque pro, ei iisque docendi qui.</p>
                  </div>
                </div>
                <div className="footer-widget social-widget">
                  <div className="widget-title">
                    <h3 className="title">Follow Us</h3>
                  </div>
                  <ul>
                    <li><a href="#" className="facebook"><i className="fa fa-facebook" /></a></li>
                    <li><a href="#" className="twitter"><i className="fa fa-twitter" /></a></li>
                    <li><a href="#" className="google"><i className="fa fa-google" /></a></li>
                    <li><a href="#" className="instagram"><i className="fa fa-instagram" /></a></li>
                    <li><a href="#" className="youtube"><i className="fa fa-youtube" /></a></li>
                    <li><a href="#" className="rss"><i className="fa fa-rss" /></a></li>
                  </ul>
                </div>
                <div className="footer-widget subscribe-widget">
                  <div className="widget-title">
                    <h2 className="title">Subscribe to Newslatter</h2>
                  </div>
                  <form>
                    <input className="input" type="email" placeholder="Enter Your Email" />
                    <button className="input-btn">Subscribe</button>
                  </form>
                </div>
              </div>
              <div className="col-md-4">
                <div className="footer-widget">
                  <div className="widget-title">
                    <h2 className="title">Featured Posts</h2>
                  </div>
                  <article className="article widget-article">
                    <div className="article-img">
                      <a href="#">
                        <img src="./img/img-widget-1.jpg" alt="" />
                      </a>
                    </div>
                    <div className="article-body">
                      <h4 className="article-title"><a href="#">Duis urbanitas eam in, tempor consequat.</a></h4>
                      <ul className="article-meta">
                        <li><i className="fa fa-clock-o" /> January 31, 2017</li>
                        <li><i className="fa fa-comments" /> 33</li>
                      </ul>
                    </div>
                  </article>
                  <article className="article widget-article">
                    <div className="article-img">
                      <a href="#">
                        <img src="./img/img-widget-2.jpg" alt="" />
                      </a>
                    </div>
                    <div className="article-body">
                      <h4 className="article-title"><a href="#">Duis urbanitas eam in, tempor consequat.</a></h4>
                      <ul className="article-meta">
                        <li><i className="fa fa-clock-o" /> January 31, 2017</li>
                        <li><i className="fa fa-comments" /> 33</li>
                      </ul>
                    </div>
                  </article>
                  <article className="article widget-article">
                    <div className="article-img">
                      <a href="#">
                        <img src="./img/img-widget-3.jpg" alt="" />
                      </a>
                    </div>
                    <div className="article-body">
                      <h4 className="article-title"><a href="#">Duis urbanitas eam in, tempor consequat.</a></h4>
                      <ul className="article-meta">
                        <li><i className="fa fa-clock-o" /> January 31, 2017</li>
                        <li><i className="fa fa-comments" /> 33</li>
                      </ul>
                    </div>
                  </article>
                </div>
              </div>
              <div className="col-md-4">
                <div className="footer-widget galery-widget">
                  <div className="widget-title">
                    <h2 className="title">Flickr Photos</h2>
                  </div>
                  <ul>
                    <li><a href="#"><img src="./img/img-widget-3.jpg" alt="" /></a></li>
                    <li><a href="#"><img src="./img/img-widget-4.jpg" alt="" /></a></li>
                    <li><a href="#"><img src="./img/img-widget-5.jpg" alt="" /></a></li>
                    <li><a href="#"><img src="./img/img-widget-6.jpg" alt="" /></a></li>
                    <li><a href="#"><img src="./img/img-widget-7.jpg" alt="" /></a></li>
                    <li><a href="#"><img src="./img/img-widget-8.jpg" alt="" /></a></li>
                    <li><a href="#"><img src="./img/img-widget-9.jpg" alt="" /></a></li>
                    <li><a href="#"><img src="./img/img-widget-10.jpg" alt="" /></a></li>
                  </ul>
                </div>
                <div className="footer-widget tweets-widget">
                  <div className="widget-title">
                    <h2 className="title">Recent Tweets</h2>
                  </div>
                  <ul>
                    <li className="tweet">
                      <i className="fa fa-twitter" />
                      <div className="tweet-body">
                        <p><a href="#">@magnews</a> Populo tritani laboramus ex mei, no eum iuvaret ceteros euripidis <a href="#">https://t.co/DwsTbsmxTP</a></p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="bottom-footer" className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-md-push-6">
              </div>
              <div className="col-md-6 col-md-pull-6">
                <div className="footer-copyright">
                  Copyright © All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                </div>
              </div>
            </div>
          </div>
        </div></footer>
    );
}

export default Footer;
