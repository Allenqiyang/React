import React, { Component } from 'react'
import NavBar from './NavBar'
import NavBar2 from './NavBar2'

export default class App extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
        <NavBar>
          <span>yeah</span>
          <strong>Hello</strong>
          <a href="www.tencent.com">Click</a>
        </NavBar>

        <NavBar2 
          leftSlot={<span>yeah</span>} 
          centerSlot={<strong>Hello</strong>}
          rightSlot={<a href="www.tencent.com">Click</a>}
        />
      </div>
    )
  }
}
