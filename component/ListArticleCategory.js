import fetch from "isomorphic-unfetch";
import Article from "./Article";
import ArticleCategory from "./ArticleCategory";

import convertSizeImageUrl from "../helper/convertSizeImageUrl";

function ListArticleCategory({ data }) {
  let rowCategory = [];
  const listRowCategory = [];
  data.forEach((category, index) => {
    if(category.type && category.data.length === 3) {
      category.data[0].thumb_art = convertSizeImageUrl.toLarge(category.data[0].thumb_art);
      category.data[1].thumb_art = convertSizeImageUrl.toThumbnail(category.data[1].thumb_art);
      category.data[2].thumb_art = convertSizeImageUrl.toThumbnail(category.data[2].thumb_art);
      rowCategory.push(category);
    }
    if (rowCategory.length === 2 || index === data.length - 1) {
      listRowCategory.push(rowCategory);
      rowCategory = [];
    }
  })
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            {listRowCategory.map(rowCategory =>
              <div className="row">
                {
                  rowCategory.map(category =>
                    <div className="col-md-6 col-sm-6" key={category.type}>
                      <div className="section-title">
                        <h2 className="title">{category.type}</h2>
                      </div>
                      <Article article={category.data[0]} />
                      <ArticleCategory article={category.data[1]} />
                      <ArticleCategory article={category.data[2]} />
                    </div>
                  )
                }
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListArticleCategory;