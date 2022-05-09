import React from "react"

export default class App extends React.Component {
  constructor() {
    super()

    this.state = {
      count: 0
    }
  }

  render() {
    return (
      <div>
        <h2>The count: {this.state.count}</h2>
        <button> + </button>
        <button> - </button>
      </div>
    )
  }
}