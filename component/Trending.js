
import Article from "../component/Article";
import ArticleCategory from "../component/ArticleCategory";
import convertSizeImageUrl from "../helper/convertSizeImageUrl";

function Trending({ articles }) {
    const firstArticle = articles[0];
    if (firstArticle)  firstArticle.thumb_art = convertSizeImageUrl.toFull(firstArticle.thumb_art);
    const mediumArticles = articles.length && articles.slice(1, 5).map(article => {
        article.thumb_art = convertSizeImageUrl.toLarge(article.thumb_art);
        return article;
    })
    const thumbnailArticles = articles.length && articles.slice(5).map(article => {
        article.thumb_art = convertSizeImageUrl.toThumbnail(article.thumb_art);
        return article;
    })
    return (
        <div className="section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h2 className="title">Trang nhất</h2>
                        </div>
                    </div>
                    <div className="col-md-7 first-article">
                        {firstArticle && <Article article={firstArticle} />}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="tab-content">
                            <div id="tab1" className="tab-pane fade in active">
                                <div className="row">
                                    {mediumArticles.length && mediumArticles.map(article =>
                                        <div className="col-md-3 col-sm-6" key={article._id}>
                                            <Article article={article} />
                                        </div>)
                                    }
                                </div>
                                <div className="row">
                                    <div className="col-md-4 col-sm-6">
                                        <ArticleCategory article={thumbnailArticles[0]} />
                                        <ArticleCategory article={thumbnailArticles[1]} />
                                        <ArticleCategory article={thumbnailArticles[2]} />
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <ArticleCategory article={thumbnailArticles[3]} />
                                        <ArticleCategory article={thumbnailArticles[4]} />
                                        <ArticleCategory article={thumbnailArticles[5]} />
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <ArticleCategory article={thumbnailArticles[6]} />
                                        <ArticleCategory article={thumbnailArticles[7]} />
                                        <ArticleCategory article={thumbnailArticles[8]} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Trending;