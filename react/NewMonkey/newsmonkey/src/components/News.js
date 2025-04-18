import React, { Component } from "react";
import Newsitem from "./Newsitem";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1
    };
  }

  async componentDidMount() {
    let url =
      "https://newsdata.io/api/1/latest?apikey=pub_81185bc9a9e9cbd86b15c7b33a7e0ddb2dbfd&country=in&language=en";
    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log("API Response:", parsedData);

      // Ensure results is an array
      const results = Array.isArray(parsedData.results)
        ? parsedData.results
        : [];

      this.setState({ articles: results });
    } catch (error) {
      console.error("Failed to fetch articles:", error);
    }
  }

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center">NewsMonkey - Top Headlines</h2>
        <div className="row">
          {Array.isArray(this.state.articles) &&
            this.state.articles.map((element) => {
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

        <div className="container d-flex justify-content-between">
          <button type="button" className="btn btn-dark">Previous</button>
          <button type="button" className="btn btn-dark">Next</button>
        </div>
      </div>
    );
  }
}
