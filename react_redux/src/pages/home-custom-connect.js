import React, { PureComponent } from 'react'

import {subAction} from '../store/actionCreators'
import {connect} from '../utils/connect'

class Home extends PureComponent {
  render() {
    return (
      <div>
        <h2>Home</h2>
        <h3>count: {this.props.counter}</h3>
        <button onClick={() => this.props.decrease(1)}> -1 </button>
        <button onClick={() => this.props.decrease(5)}> -5 </button>
        <hr/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  counter: state.counter
})

const mapDispatchToProps = dispatch => ({
  decrease(num) {
    dispatch(subAction(num))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
