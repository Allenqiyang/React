import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: 'Hello Allen!'
    }
  }

  render() {
    return (
      <div>
        <h3>{this.state.message}</h3>
        <button onClick={() => this.changeText()}>change</button>
        <button id="btn">change</button>
      </div>
    )
  }

  /**
   * setState:
   *  1.在组建生命周期或者React合成事件(比如JSX中的button的onClick)中，setState是异步
   *  2.在setTimeout或者原生dom事件中，setState是同步的
  */

  componentDidMount() {
    document.getElementById("btn").onclick = () => {
      this.setState({
        message: "Hello Tony!"
      })
      console.log(this.state.message)   // Hello Tony!
    }
  }

  changeText() {
    // 将setState放入定时器中
    setTimeout(() => {
      this.setState({
        message: "Hello Tony!"
      })
      console.log(this.state.message)   // Hello Tony!
    }, 0);
  }
}
