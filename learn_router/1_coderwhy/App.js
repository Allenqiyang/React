import React, { PureComponent } from 'react'

import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'

import Home from './pages/home'
import About from './pages/about'
import Profile from './pages/profile'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/profile" component={Profile}/>
          </Routes>

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/profile">Profile</Link>
        </BrowserRouter>
      </div>
    )
  }
}
