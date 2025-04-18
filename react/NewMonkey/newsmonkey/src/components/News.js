import React, { Component } from "react";
import Newsitem from "./Newsitem";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
    };
  }

  async componentDidMount() {
    let url =
      "https://newsdata.io/api/1/latest?apikey=pub_81185bc9a9e9cbd86b15c7b33a7e0ddb2dbfd&country=in&language=en";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.results });
  }

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center">NewsMonkey - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.article_id}>
                <Newsitem
                  title={element.title ? element.title.slice(0, 40) : " "}
                  description={
                    element.description
                      ? element.description.slice(0, 100)
                      : " "
                  }
                  imageUrl={element.image_url}
                  newsUrl={element.link}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
