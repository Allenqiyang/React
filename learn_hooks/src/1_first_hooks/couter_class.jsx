import React, { PureComponent } from 'react'

export default class CounterClass extends PureComponent {
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
        <button onClick={() => this.increase()}> +1 </button>
        <button onClick={() => this.decrease()}> -1 </button>
      </div>
    )
  }

  increase() {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  decrease() {
    this.setState({
      counter: this.state.counter - 1
    })
  }
}
