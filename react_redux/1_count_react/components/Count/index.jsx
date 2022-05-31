import React, { PureComponent } from 'react'

export default class Count extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  render() {
    return (
      <div>
        <h3>The sum is: {this.state.count}</h3>
        <select ref={e => this.selectNumber = e}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>&nbsp;
        <button onClick={this.increase}>+</button>&nbsp;
        <button onClick={this.decrease}>-</button>&nbsp;
        <button onClick={this.increaseOdd}>add odd</button>&nbsp;
        <button onClick={this.increaseAsync}>add wait</button>
      </div>
    )
  }

  increase = () => {
    const {value} = this.selectNumber
    const {count} = this.state
    this.setState({
      count: count + value * 1
    })
  }
  decrease = () => {
    const {value} = this.selectNumber
    const {count} = this.state
    this.setState({
      count: count + value * 1
    })
  }
  increaseOdd = () => {
    const {value} = this.selectNumber
    const {count} = this.state
    if(count % 2 !== 0){
      this.setState({
        count: count + value * 1
      })
    }
  }
  increaseAsync = () => {
    const {value} = this.selectNumber
    const {count} = this.state
    setTimeout(() => {
      this.setState({
        count: count + value * 1
      })
    }, 500);
    
  }
}
