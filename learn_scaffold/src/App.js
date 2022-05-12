import React, { Component } from 'react'

class Case extends Component {
  render() {
    return <h2>I'm case component</h2>
  }

  componentWillUnmount() {
    console.log('componentWillUnmount executed')
  }
}

export default class App extends Component {

  constructor() {
    super()
    console.log('constructor executed')

    this.state = {
      counter: 0,
      isShow: true
    }
  }

  render() {
    console.log('render executed')
    return (
      <div>
        App
        <h3>count: {this.state.counter}</h3>
        <button onClick={() => this.increase()}>+1</button>
        <hr/>
        <button onClick={() => this.changeDisplay()}>change</button>
        {this.state.isShow && <Case/>}
      </div>
    )
  }

  increase() {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  changeDisplay() {
    this.setState({
      isShow: !this.state.isShow
    })
  }

  componentDidMount() {
    console.log('componentDidMount executed')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate executed')
  }
}
