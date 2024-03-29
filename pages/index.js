import fetch from "isomorphic-unfetch";
import Trending from "../component/Trending";
import ListArticleCategory from "../component/ListArticleCategory";
import Layout from "../component/layout";
import config from "../config/config";
function Index({ articles, data }) {
  return (
    <Layout>
      <Trending articles={articles} />
      <ListArticleCategory />
    </Layout>
  );
}

Index.getInitialProps = async ctx => {
  const res = await fetch(`${config.baseApiUrl}/api/articles/Trangnhat?limit=14`)
  const json = await res.json();
  const articles = json.data.articles;
  return { articles }
}

export default Index;