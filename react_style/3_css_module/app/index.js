import React, { PureComponent } from 'react'

import Home from '../home'
import Profile from '../profile'
import appStyle from './style.module.css'

// module解决了作用域的问题，不过要动态添加样式的话还是要用内联样式
export default class App extends PureComponent {
  render() {
    return (
      <div id="app">
        App
        <h3 className={appStyle.title}>I'm title of App</h3>
        <Home/>
        <Profile/>
      </div>
    )
  }
}
