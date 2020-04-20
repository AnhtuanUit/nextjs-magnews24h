import generateLink from '../helper/generateLink.js';
import Link from 'next/link';

function ArticleCategory({ article = {} }) {
    const { title = "", description = "", time = "", thumb_art = "", _id } = article;
    return (

        <article className="article row-article">
            <div className="article-img">
            <Link href="/[category]" as={generateLink({ title, id: _id })}>
                    <a>
                        <img src={thumb_art} alt="" />
                    </a>
                </Link>
            </div>
            <div className="article-body">
                <h5 className="article-title"><Link href="/[category]" as={generateLink({ title, id: _id })}><a>{title}</a></Link></h5>
                <ul className="article-meta">
                    <li><i className="fa fa-clock-o" /> {time}</li>
                </ul>
            </div>
        </article>
    );
}

export default ArticleCategory;