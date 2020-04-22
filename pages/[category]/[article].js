import { withRouter } from 'next/router';
import fetch from "isomorphic-unfetch";
import DetailArticle from '../../component/DetailArticle';
import Category from '../../component/Category';
import { Fragment } from 'react';
import categories from '../../constants/categories.js';
import classcapitalizeFirstLetter from '../../helper/capitalizeFirstLetter';
import Head from 'next/head';

function Index({ article }) {
  return (
    <Fragment>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `  window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'UA-164230711-1');`
          }}
        />
      </Head>
      {article && <DetailArticle data={article} />}
    </Fragment>
  );
}

Index.getInitialProps = async ctx => {
  const { query } = ctx;
  const { article } = query;
  if (article.includes(".html")) {
    const articleId = article.match(/\-([\da-z]*).html/)[1];
    const resPost = await fetch(`http://magnews24h.com:4041/api/articles/Trangnhat/${articleId}`);
    const jsonPost = await resPost.json()
    const data = jsonPost.data;
    return { article: data };
  }
  return { data: {} };
}

export default withRouter(Index)
