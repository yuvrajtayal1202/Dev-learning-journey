import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinners";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      loading: false,
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });
    setTimeout(async () => {
      await this.fetchArticles(this.state.page);
    }, 500); // 1 second loading delay on initial load
  }

  fetchArticles = async (page) => {
    // const url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=6412af9a3075415e9b2d7a80cdd62cef&page=${page}&pageSize=${this.props.pageSize}&country=${this.props.country}`;
    const url = `https://newsapi.org/v2/everything?country=us?q=bitcoin&apiKey=6412af9a3075415e9b2d7a80cdd62cef&page=${page}&pageSize=${this.props.pageSize}`;

    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      const articles = Array.isArray(parsedData.articles)
        ? parsedData.articles
        : []; 

      this.setState({
        articles,
        loading: false,
      });
    } catch (error) {
      console.error("Failed to fetch articles:", error);
      this.setState({ loading: false });
    }
  };

  handleNext = async () => {
    this.setState({ loading: true });
    const nextPage = this.state.page + 1;

    setTimeout(async () => {
      await this.fetchArticles(nextPage);
      this.setState({ page: nextPage });
    }, 500); // 1 second loading delay on Next
  };

  handlePre = async () => {
    if (this.state.page > 1) {
      const prevPage = this.state.page - 1;
      await this.fetchArticles(prevPage);
      this.setState({ page: prevPage });
      // No loading delay on Previous
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center">NewsMonkey - Top Headlines</h2>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
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
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNext}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
