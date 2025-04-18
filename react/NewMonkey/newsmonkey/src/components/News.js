import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
  render() {
    return (
      <div >
        <div className="container my-3">
          <div className="row">

          <div className="col-md-4">
            <Newsitem title = ""/>
          </div>
          <div className="col-md-4">
            <Newsitem title = ""/>
          </div>
          <div className="col-md-4">
            <Newsitem title = ""/>
          </div>
          </div>
        </div>
      </div>
    )
  }
}

export default News
