import Article from '../component/Article';
import convertSizeImageUrl from "../helper/convertSizeImageUrl";
import Link from 'next/link';
import generateLink from '../helper/generateLink.js';
import Router from 'next/router'
import { Component } from 'react';
import ReactPaginate from 'react-paginate';

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            offset: 0,
        };
    }

    handlePageClick = data => {
        let selected = data.selected;
        let offset = Math.ceil(selected * this.props.perPage);

        this.setState({ offset: offset }, () => {
            Router.push('/[category]', `${this.props.categoryPath}-p${selected + 1}`);
            window.scroll({top: 0, left: 0, behavior: 'smooth' })
        });
    };

    render() {
        const { articles: listArticles, pages = 1 } = this.props.articles;
        const categoryName = this.props.categoryName;
        const firstArticle = listArticles.length && listArticles[0];
        if (firstArticle) firstArticle.thumb_art = convertSizeImageUrl.toFull(firstArticle.thumb_art);
        const ortherArticles = listArticles.slice(1);
        return (
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="section-title">
                                <h2 className="title">{categoryName}</h2>
                            </div>
                            <div className="first-article">
                                {firstArticle && <Article article={firstArticle} />}
                            </div>
                            {
                                ortherArticles.length && ortherArticles.map(article =>
                                    <article className="article row-article" key={article._id}>
                                        <div className="article-img">
                                            <Link href="/[category]/[article]" as={generateLink({ title: article.title, id: article._id, categoryName: article.categoryName })}>
                                                <a>
                                                    <img src={convertSizeImageUrl.toMedium(article.thumb_art)} alt="" />
                                                </a>
                                            </Link>

                                        </div>
                                        <div className="article-body">
                                            <h3 className="article-title"><Link href="/[category]/[article]" as={generateLink({ title: article.title, id: article._id, categoryName: article.categoryName })}><a>{article.title}</a></Link></h3>
                                            <ul className="article-meta">
                                                <li><i className="fa fa-clock-o" /> {article.time}</li>
                                            </ul>
                                            <p>{article.description}</p>
                                        </div>
                                    </article>
                                )
                            }
                            <div className="article-pagination">
                                <ReactPaginate
                                    previousLabel={'<'}
                                    nextLabel={'>'}
                                    breakLabel={'...'}
                                    breakClassName={'break-me'}
                                    initialPage={this.props.pageNumber ? this.props.pageNumber - 1 : 0}
                                    disableInitialCallback={true}
                                    pageCount={pages}
                                    marginPagesDisplayed={2}
                                    pageRangeDisplayed={3}
                                    onPageChange={this.handlePageClick}
                                    // containerClassName={'pagination'}
                                    // subContainerClassName={'pages pagination'}
                                    activeClassName={'active'}
                                />
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

export default Category;