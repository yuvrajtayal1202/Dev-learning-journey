import React, { Component } from "react";

export class NewItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl} = this.props
    return (
      <div>
        <div className="card my-3" style={{width: "18rem"}}>
          <img src= {!imageUrl?"https://img.freepik.com/free-vector/news-grunge-text_460848-9369.jpg":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">
              {description}...
            </p>
            <a rel="noreferrer"  href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewItem;
