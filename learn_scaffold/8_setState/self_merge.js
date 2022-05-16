import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0
    }
  }

  render() {
    return (
      <div>
        <h3>Counter: {this.state.counter}</h3>
        <button onClick={() => this.increase()}>+</button>
      </div>
    )
  }

  increase() {
    // 1. setState本身的合并  这里写了3次点击一次还是加 1而不是 3
    // this.setState({
    //   counter: this.state.counter + 1
    // })
    // this.setState({
    //   counter: this.state.counter + 1
    // })
    // this.setState({
    //   counter: this.state.counter + 1
    // })

    // 2. setState累计操作  这里点一次加 3
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1
      }
    })
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1
      }
    })
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1
      }
    })
  }
}
