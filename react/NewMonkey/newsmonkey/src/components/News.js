
import React, { Component } from "react";
import Newsitem from "./Newsitem";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
    };
  }

  async componentDidMount() {
    await this.fetchArticles(this.state.page);
  }

  fetchArticles = async (page) => {
    const url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=6412af9a3075415e9b2d7a80cdd62cef&page=${page}&pageSize=${this.props.pageSize}`;

    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log("parsedData", parsedData);

      const articles = Array.isArray(parsedData.articles)
        ? parsedData.articles
        : [];

      this.setState({ articles });
    } catch (error) {
      console.error("Failed to fetch articles:", error);
    }
  };

  handleNext = async () => {
    if(Math.ceil(this.state.totalResults/6)){

    }
    else{

      const nextPage = this.state.page + 1;
      await this.fetchArticles(nextPage);
      this.setState({ page: nextPage });

    }
  };

  handlePre = async () => {
    if (this.state.page > 1) {
      const prevPage = this.state.page - 1;
      await this.fetchArticles(prevPage);
      this.setState({ page: prevPage });
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center">NewsMonkey - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  title={element.title ? element.title.slice(0, 40) : " "}
                  description={
                    element.description
                      ? element.description.slice(0, 100)
                      : " "
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>

        <div className="container d-flex justify-content-between my-4">
          <button
            type="button"
            className="btn btn-dark"
            disabled={this.state.page <= 1}
            onClick={this.handlePre}
          >
            &larr; Previous
          </button>
          <button type="button" className="btn btn-dark" onClick={this.handleNext}>
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
