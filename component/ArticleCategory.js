function ArticleCategory({ article = {} }) {
    const { title = "", description = "", time = "", thumb_art = "" } = article;
    return (

        <article className="article row-article">
            <div className="article-img">
                <a href="#">
                    <img src={thumb_art} alt="" />
                </a>
            </div>
            <div className="article-body">
                <h5 className="article-title"><a href="#">{title}</a></h5>
                <ul className="article-meta">
                    <li><i className="fa fa-clock-o" /> {time}</li>
                </ul>
            </div>
        </article>
    );
}

export default ArticleCategory;