import React, { PureComponent } from 'react'

import About from './pages/about3'
import Home from './pages/home-redux-saga'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <About/>
        <Home/>
      </div>
    )
  }
}
