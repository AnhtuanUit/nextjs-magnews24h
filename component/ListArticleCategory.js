import Article from "./Article";
import ArticleCategory from "./ArticleCategory";
import convertSizeImageUrl from "../helper/convertSizeImageUrl";
import categories from "../constants/categories.js";
import { Component } from 'react';
import fetch from 'isomorphic-unfetch';

class ListArticleCategory extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    fetch('https://pacific-brook-34627.herokuapp.com/api/articles/post')
      .then(resPost => resPost.json())
      .then(jsonPost => {
        const data = jsonPost.data;
        this.setState({ data });
      })
  }

  render() {
    let rowCategory = [];
    const listRowCategory = [];
    const data = this.state.data;
    data.forEach((category, index) => {
      if (category.type && category.data.length === 3) {
        category.data[0].thumb_art = convertSizeImageUrl.toLarge(category.data[0].thumb_art);
        category.data[1].thumb_art = convertSizeImageUrl.toThumbnail(category.data[1].thumb_art);
        category.data[2].thumb_art = convertSizeImageUrl.toThumbnail(category.data[2].thumb_art);
        rowCategory.push(category);
      }
      if (rowCategory.length === 2 || index === data.length - 1) {
        listRowCategory.push(rowCategory);
        rowCategory = [];
      }
    });

    return (
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              {listRowCategory.length ? listRowCategory.map((rowCategory, index) =>
                <div className="row" key={`rowCategory-${index}`}>
                  {
                    rowCategory.map(category => {
                      let categoryName = categories.find(x => category.type === x.categoryName).name;
                      return (<div className="col-md-6 col-sm-6" key={category.type}>
                        <div className="section-title">
                          <h2 className="title">{categoryName}</h2>
                        </div>
                        <Article article={category.data[0]} />
                        <ArticleCategory article={category.data[1]} />
                        <ArticleCategory article={category.data[2]} />
                      </div>)
                    }
                    )
                  }
                </div>
              ) : <p>Loading ...</p>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListArticleCategory;