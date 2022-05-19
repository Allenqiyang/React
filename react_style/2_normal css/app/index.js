import React, { PureComponent } from 'react'

import Home from '../home'
import Profile from '../profile'
import './style.css'

// CSS很容易出现覆盖，层级高的会覆盖层级低的

export default class App extends PureComponent {
  render() {
    return (
      <div id="app">
        App
        <h3 className="title">I'm title of App</h3>
        <Home/>
        <Profile/>
      </div>
    )
  }
}
