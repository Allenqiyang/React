import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0,
      message: "Hello ALlen!"
    }
  }

  render() {
    // 页面上没有message
    console.log('render of App is called')
    return (
      <div>
        <h2>The count: {this.state.counter}</h2>
        <button onClick={() => this.increase()}> + </button>
        {/* <h3>{this.state.message}</h3> */}
        <button onClick={() => this.changeText()}>change</button>
      </div>
    )
  }

  shouldComponentUpdate(nextProps, nextState) {   // 该生命周期默认返回true
    if(this.state.counter !== nextState.counter){
      return true
    }
    return false
  }

  increase() {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  changeText() {
    this.setState({
      message: "Hello Tony!"
    })
  }
}