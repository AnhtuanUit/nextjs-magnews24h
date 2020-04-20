import fetch from "isomorphic-unfetch";
import Trending from "../component/Trending";
import ListArticleCategory from "../component/ListArticleCategory";

function Index({ articles, data }) {
  return (
    <div>
      <Trending articles={articles}/>
      <ListArticleCategory />
    </div>
  );
}

Index.getInitialProps = async ctx => {
  const res = await fetch('http://magnews24h.com:4041/api/articles/Trangnhat?limit=14')
  const json = await res.json();
  const articles = json.data.articles;
  return { articles }
}

export default Index;