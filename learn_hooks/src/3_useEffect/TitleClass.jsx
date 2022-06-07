import React, { PureComponent } from 'react'

export default class ClassTitle extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0
    }
  }

  componentDidMount() {
    document.title = this.state.counter
  }

  componentDidUpdate() {
    document.title = this.state.counter
  }

  render() {
    return (
      <div>
        <h3>Counter: {this.state.counter}</h3>
        <button onClick={() => this.setState({counter: this.state.counter + 1})}> +1 </button>
      </div>
    )
  }
}
