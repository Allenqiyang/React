import React from 'react'

import {addAction} from '../store/counter/actionCreators'
// import {connect} from '../utils/connect'
import {connect} from 'react-redux'

function About(props) {
  return (
    <div>
      <h2>About</h2>
      <h3>count: {props.counter}</h3>
      <button onClick={() => props.increase(1)}> +1 </button>
      <button onClick={() => props.increase(5)}> +5 </button>
      <h3>Banners</h3>
      <ul>
        {
          props.banners.map(item => {
            return <li key={item.acm}>{item.title}</li>
          })
        }
      </ul>
      <h3>Recommends</h3>
      <ul>
        {
          props.recommends.map(item => {
            return <li key={item.acm}>{item.title}</li>
          })
        }
      </ul>
      <hr/>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    counter: state.counterInfo.counter,
    banners: state.homeInfo.banners,
    recommends: state.homeInfo.recommends
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
