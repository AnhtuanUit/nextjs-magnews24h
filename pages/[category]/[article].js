import { withRouter } from 'next/router';
import fetch from "isomorphic-unfetch";
import DetailArticle from '../../component/DetailArticle';
import Layout from "../../component/layout";


function Index({ article }) {
  return (
    <Layout>
      {article && <DetailArticle data={article} />}
    </Layout>
  );
}

Index.getInitialProps = async ctx => {
  const { query } = ctx;
  const { article } = query;
  if (article.includes(".html")) {
    const articleId = article.match(/\-([\da-z]*).html/)[1];
    const resPost = await fetch(`https://pacific-brook-34627.herokuapp.com/api/articles/Trangnhat/${articleId}`);
    const jsonPost = await resPost.json()
    const data = jsonPost.data;
    return { article: data };
  }
  return { data: {} };
}

export default withRouter(Index)
