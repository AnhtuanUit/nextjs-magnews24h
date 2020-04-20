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
                    <p>MAGNEWS 24H, sản phẩm demo cho hệ thống tự động thu thập dữ liệu <a href="https://vnexpress.net">VnExpress</a></p>
                  </div>
                </div>
               
               
              </div>
              <div className="col-md-4">
              <div className="footer-widget social-widget">
                  <div className="widget-title">
                    <h3 className="title">Giữ liên lạc với tôi</h3>
                  </div>
                  <ul>
                    <li><a href="https://www.facebook.com/AnhtuanUit" className="facebook"><i className="fa fa-facebook" /></a></li>
                    <li><a href="https://www.linkedin.com/in/%C4%91%E1%BB%97-tu%E1%BA%A5n-1b0445117/" className="twitter"><i className="fa fa-linkedin" /></a></li>
                    <li><a href="https://www.instagram.com/anhtuanuit/" className="instagram"><i className="fa fa-instagram" /></a></li>
                    <li><a href="https://www.youtube.com/channel/UCdsR55sf2HO2ga-PX4FagBw/" className="youtube"><i className="fa fa-youtube" /></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
              <div className="footer-widget subscribe-widget">
                  <div className="widget-title">
                    <h2 className="title">Đăng ký để nhận tin mới</h2>
                  </div>
                  <form>
                    <input className="input" type="email" placeholder="Enter Your Email" />
                    <button className="input-btn">Đăng ký</button>
                  </form>
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
