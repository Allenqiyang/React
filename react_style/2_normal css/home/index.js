import React, { PureComponent } from 'react'

import './style.css'

export default class Home extends PureComponent {
  render() {
    return (
      <div className="home">
        <h3 className="title">I'm title of Home</h3>
        <div className="banner">
          <span>Banner</span>
        </div>
      </div>
    )
  }
}
