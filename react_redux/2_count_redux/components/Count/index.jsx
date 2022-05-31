import React, { PureComponent } from 'react'
import store from '../../redux/store'
import { addAction, subAction } from '../../redux/count_action'

export default class Count extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      count: store.getState()
    }
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        count: store.getState()
      })
    })
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
    store.dispatch(addAction(value * 1))
  }
  decrease = () => {
    const {value} = this.selectNumber
    store.dispatch(subAction(value * 1))
  }
  increaseOdd = () => {
    const {value} = this.selectNumber
    const {count} = this.state
    if(count % 2 !== 0){
      store.dispatch(addAction(value * 1))
    }
  }
  increaseAsync = () => {
    const {value} = this.selectNumber
    setTimeout(() => {
      store.dispatch(addAction(value * 1))
    }, 500)
  }
}
