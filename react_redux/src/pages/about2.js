import React from 'react'

import {addAction} from '../store/actionCreators'
import {connect} from '../utils/connect'

function About(props) {
  return (
    <div>
      <h2>About</h2>
      <h3>count: {props.counter}</h3>
      <button onClick={() => props.increase(1)}> +1 </button>
      <button onClick={() => props.increase(5)}> +5 </button>
      <hr/>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increase: function(num) {
      dispatch(addAction(num))
    }
  }
}

// connect返回的是一个函数，直接调用
export default connect(mapStateToProps, mapDispatchToProps)(About)
