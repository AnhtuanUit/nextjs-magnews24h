import fetch from "isomorphic-unfetch";
import Trending from "../component/Trending";
import ListArticleCategory from "../component/ListArticleCategory";
import Layout from "../component/layout";

function Index({ articles, data }) {
  return (
    <Layout>
      <Trending articles={articles} />
      <ListArticleCategory />
    </Layout>
  );
}

Index.getInitialProps = async ctx => {
  const res = await fetch('https://45.76.179.13:4043/api/articles/Trangnhat?limit=14')
  const json = await res.json();
  const articles = json.data.articles;
  return { articles }
}

export default Index;