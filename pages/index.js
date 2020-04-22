import fetch from "isomorphic-unfetch";
import Trending from "../component/Trending";
import ListArticleCategory from "../component/ListArticleCategory";
import Head from "next/head";

function Index({ articles, data }) {
  return (
    <div>
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
      <Trending articles={articles} />
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