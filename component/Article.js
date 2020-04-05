function Article({ article = {} }) {
    const { title = "", description = "", time = "", thumb_art = "" } = article;
    return (
        <article className="article">
            <div className="article-img">
                <a href="#">
                    <img src={thumb_art} alt="" />
                </a>
            </div>
            <div className="article-body">
                <h3 className="article-title"><a href="#">{title}</a></h3>
                <ul className="article-meta">
                    <li><i className="fa fa-clock-o" /> {time}</li>
                </ul>
                <p>{description}</p>
            </div>
        </article>
    );
};

export default Article;