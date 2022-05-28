import React, { PureComponent } from 'react'

import axios from 'axios'
import {changeBannersAction, changeRecommendAction, subAction} from '../store/actionCreators'
import {connect} from 'react-redux'

class Home extends PureComponent {
  componentDidMount() {
    axios({
      url: "http://123.207.32.32:8000/home/multidata",
    }).then(res => {
      const data = res.data.data
      this.props.changeBanners(data.banner.list)
      this.props.changeRecommends(data.recommend.list)
    })
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
  changeBanners(banners) {
    dispatch(changeBannersAction(banners))
  },
  changeRecommends(recommends) {
    dispatch(changeRecommendAction(recommends))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
