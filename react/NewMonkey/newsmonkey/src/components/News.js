import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <div className="container my-3">
            <Newsitem title = ""/>
            <Newsitem title = ""/>
            <Newsitem title = "vb"/>
        </div>
      </div>
    )
  }
}

export default News
