import fetch from "isomorphic-unfetch";
import Trending from "../component/Trending";
import ListArticleCategory from "../component/ListArticleCategory";

function Index({ articles, data }) {
  return (
    <div>
      <Trending articles={articles}/>
      <ListArticleCategory data={data} />
    </div>
  );
}

Index.getInitialProps = async ctx => {
  const res = await fetch('http://45.76.179.13:4041/api/articles/Trangnhat?limit=14')
  const json = await res.json();
  const articles = json.data.articles;

  const resPost = await fetch('http://45.76.179.13:4041/api/articles/post')
  const jsonPost = await resPost.json()
  const data = jsonPost.data;

  return { articles, data }
}

export default Index;