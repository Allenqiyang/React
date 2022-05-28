import React, { PureComponent } from 'react'

import store from '../store'
import {subAction} from '../store/actionCreators'

export default class Home extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      counter: store.getState().counter
    }
  }

  componentDidMount() {
    // 订阅
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        counter: store.getState().counter
      })
    })
  }

  componentWillUnmount() {
    // 取消订阅
    this.unsubscribe()
  }

  render() {
    return (
      <div>
        <h2>Home</h2>
        <h3>count: {this.state.counter}</h3>
        <button onClick={() => this.decrease(1)}> -1 </button>
        <button onClick={() => this.decrease(5)}> -5 </button>
        <hr/>
      </div>
    )
  }

  decrease(num) {
    store.dispatch(subAction(num))
  }
}
