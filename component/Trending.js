
import Article from "../component/Article";
import ArticleCategory from "../component/ArticleCategory";
import convertSizeImageUrl from "../helper/convertSizeImageUrl";

function Trending({ articles }) {
    const firstArticle =  articles[0];
    firstArticle.thumb_art = convertSizeImageUrl.toFull(firstArticle.thumb_art);
    const mediumArticles =  articles.slice(1, 5).map(article => {
        article.thumb_art = convertSizeImageUrl.toLarge(article.thumb_art);
        return article;
    })
    const thumbnailArticles =  articles.slice(5).map(article => {
        article.thumb_art = convertSizeImageUrl.toThumbnail(article.thumb_art);
        return article;
    })
    return (
        <div className="section">
            <div className="container">
                <div className="row">
                    <div className="col-md-7 first-article">
                        <Article article={firstArticle}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h2 className="title">Trending Posts</h2>
                        </div>
                        <div className="tab-content">
                            <div id="tab1" className="tab-pane fade in active">
                                <div className="row">
                                    {mediumArticles.map(article =>
                                        <div className="col-md-3 col-sm-6" key={article._id}>
                                            <Article article={article} />
                                        </div>)
                                    }
                                </div>
                                <div className="row">
                                    {
                                        thumbnailArticles.map(article =>
                                            <div className="col-md-4 col-sm-6" key={article._id}>
                                                <ArticleCategory article={article} />
                                            </div>
                                        )
                                    }
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