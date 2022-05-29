// 将网络请求移到redux里面
import React, { PureComponent } from 'react'

// import axios from 'axios'
import { subAction, fetchHomeMultidataAction } from '../store/actionCreators'
import {connect} from 'react-redux'

class Home extends PureComponent {
  componentDidMount() {
    this.props.getHomeMultidata()
  }

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
  },
  getHomeMultidata() {
    // 注意这里是传入函数让其被调用而不是主动调用
    dispatch(fetchHomeMultidataAction)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
