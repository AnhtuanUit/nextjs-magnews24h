import generateLink from '../helper/generateLink.js';
import Link from 'next/link';

function Article({ article = {} }) {
    const { title = "", description = "", time = "", thumb_art = "", _id = "", categoryName = "" } = article;
    return (
        <article className="article">
            <div className="article-img">
                <Link  href="/[category]/[article]" as={generateLink({ title, id: _id, categoryName })}>
                    <a>
                        <img src={thumb_art} alt="" />
                    </a>
                </Link>
            </div>
            <div className="article-body">
                <h3 className="article-title"><Link href="/[category]/[article]" as={generateLink({ title, id: _id, categoryName })}><a>{title}</a></Link></h3>
                <ul className="article-meta">
                    <li><i className="fa fa-clock-o" /> {time}</li>
                </ul>
                <p>{description}</p>
            </div>
        </article>
    );
};

export default Article;