import { withRouter } from 'next/router';
import fetch from "isomorphic-unfetch";
import DetailArticle from '../../component/DetailArticle';
import Category from '../../component/Category';
import categories from '../../constants/categories.js';
import classcapitalizeFirstLetter from '../../helper/capitalizeFirstLetter';
import Layout from "../../component/layout";

function Index({ router, article, articles, categoryName, categoryPath, pageNumber }) {
  return (
    <Layout>
      {article && <DetailArticle data={article} />}
      {categoryName && <Category articles={articles} categoryName={categoryName} categoryPath={categoryPath} pageNumber={pageNumber} />}
    </Layout>
  );
}

Index.getInitialProps = async ctx => {
  const { query, asPath } = ctx;
  let pageNumber = asPath && asPath.match(/(\/[-a-z]*)-p(\d*)/) && asPath.match(/(\/[-a-z]*)-p(\d*)/)[2];
  pageNumber = pageNumber && !isNaN(pageNumber) && Number(pageNumber);
  const categoryPath = pageNumber ? asPath.match(/(\/[-a-z]*)-p(\d*)/)[1] : asPath;
  const { category } = query;
  const existCategories = categories.map(category => category.type);
  if (category.includes(".html")) {
    const articleId = category.match(/\-([\da-z]*).html/)[1];
    const resPost = await fetch(`https://pacific-brook-34627.herokuapp.com/api/articles/Trangnhat/${articleId}`);
    const jsonPost = await resPost.json()
    const data = jsonPost.data;
    return { article: data };
  } else if (existCategories.includes(categoryPath)) {
    const categoryName = categories.find(category => category.type === categoryPath).name;
    const typeQuery = classcapitalizeFirstLetter(categoryPath.replace('/', '')).split('-').join("");
    const resPost = await fetch(`https://pacific-brook-34627.herokuapp.com/api/articles/${typeQuery}?page=${pageNumber || 1}&limit=15`);
    const jsonPost = await resPost.json()
    const data = jsonPost.data;
    return { articles: data, categoryName, categoryPath, pageNumber };
  }

  return { data: {} };
}

export default withRouter(Index)