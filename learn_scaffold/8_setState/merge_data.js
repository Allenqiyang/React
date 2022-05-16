import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: 'Hello Allen!',
      name: "Rose"
    }
  }

  render() {
    return (
      <div>
        <h3>{this.state.message}</h3>
        <h3>{this.state.name}</h3>
        <button onClick={() => this.changeText()}>change</button>
      </div>
    )
  }

  changeText() {
    this.setState({
      message: "Hello Tony!"
    })

    // Object.assign({}, prevstate, newstate) 
    // 把后面两个对象合并做一个拷贝到最前面的空对象
    // 所以setState里面放的新对象若没有原state的属性，设置之后原state该属性不会消失
  }
}
