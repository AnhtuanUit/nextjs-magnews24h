import fetch from "isomorphic-unfetch";

function Index({ stars }) {
  return (
    <div>
      <p>Hello Next.js</p>
      <p>{JSON.stringify(stars)}</p>
    </div>
  );
}

Index.getInitialProps = async ctx => {
  const res = await fetch('http://45.76.179.13:4041/api/articles/Trangnhat?limit=14')
  const json = await res.json()
  return { stars: json.data.articles }
}

export default Index;