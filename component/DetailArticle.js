import React from 'react';

class DetailArticle extends React.Component {
  componentDidMount() {
    document.querySelectorAll('img').forEach((el, i) => {
      var className = el.className;
      var loading = el.getAttribute('loading');
      if (className === "lazy") {
        el.src = el.getAttribute('data-src');
      }
    })
  }
  render() {
    const { article = "", title = "", description = "", time = "" } = this.props.data;
    return (
      <div className="section article-detail">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <article className="article article-post">
                <div className="article-body">
                  <ul className="article-info">
                    <li className="article-category"><a href="#">Tin tức</a></li>
                    <li className="article-type"><i className="fa fa-file-text" /></li>
                  </ul>
                  <h1 className="article-title">{title}</h1>
                  <ul className="article-meta">
                    <li><i className="fa fa-clock-o" /> {time}</li>
                  </ul>
                  <p>{description}</p>
                  <div dangerouslySetInnerHTML={{ __html: article }} />
                </div>
              </article>
              <div className="article-comments">
                <div className="section-title">
                  <h2 className="title">Comments</h2>
                </div>
              </div>
              <div className="article-reply-form">
                <div className="section-title">
                  <h2 className="title">Leave a reply</h2>
                </div>
                <form>
                  <input className="input" placeholder="Name" type="text" />
                  <input className="input" placeholder="Email" type="email" />
                  <input className="input" placeholder="Website" type="url" />
                  <textarea className="input" placeholder="Message" defaultValue={""} />
                  <button className="input-btn">Send Message</button>
                </form>
              </div>
            </div>
            <div className="col-md-4">
              <div className="widget center-block hidden-xs">
                <img className="center-block" src="./img/ad-1.jpg" alt="" />
              </div>
              <div className="widget social-widget">
                <div className="widget-title">
                  <h2 className="title">Giữ liên lạc với tôi</h2>
                </div>
                <ul>
                  <li><a href="https://www.facebook.com/AnhtuanUit" className="facebook"><i className="fa fa-facebook" /><br /><span>Facebook</span></a></li>
                  <li><a href="https://www.linkedin.com/in/%C4%91%E1%BB%97-tu%E1%BA%A5n-1b0445117" className="twitter"><i className="fa fa-linkedin" /><br /><span>Linked-In</span></a></li>
                  <li><a href="https://www.instagram.com/anhtuanuit" className="instagram"><i className="fa fa-instagram" /><br /><span>Instagram</span></a></li>
                  <li><a href="https://www.youtube.com/channel/UCdsR55sf2HO2ga-PX4FagBw" className="youtube"><i className="fa fa-youtube" /><br /><span>Youtube</span></a></li>
                </ul>
              </div>
              <div className="widget subscribe-widget">
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
    );
  }
}

export default DetailArticle;