import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0,
      message: 'Hello Allen!'
    }
  }

  render() {
    return (
      <div>
        <h3>Counter: {this.state.counter}</h3>
        <button onClick={() => this.increase()}>+</button>
        <h3>{this.state.message}</h3>
        <button onClick={() => this.changeText()}>change</button>
      </div>
    )
  }

  componentDidUpdate() {
    // 这里也可以拿到异步更新以后state的数据
    console.log(this.state.message)
  }

  changeText() {
    // setState是异步更新的 setState(更新的state, 回调函数)
    // 在回调函数里可以拿到异步更新以后的数据
    this.setState({
      message: "Hello Tony!"
    }, () => {
      console.log(this.state.message)   // Hello Tony!
    })
    console.log(this.state.message)   // Hello Allen!
  }

  increase() {
    this.setState({
      counter: this.state.counter + 1
    })
  }
}
