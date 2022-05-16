import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      movies: ['星际穿越', '流浪地球']
    }
  }

  /**
   *  key
   *   是子元素diff算法对比时加入的一个优化方案
   *   当子元素拥有key时，React使用key来匹配原有树上的子元素以及最新树上的子元素
   *  注意：
   *    key应该是唯一的；
   *    key不要使用随机数
   *    使用index作为key对性能没有优化(因为如果在前面插入新元素那后面的index都变了)
  */

  render() {
    return (
      <div>
        <h3>Movie List</h3>
        <ul>
          {
            this.state.movies.map((item, index) => {
              return <li key={item}>{item}</li>
            })
          }
        </ul>
        <button onClick={() => this.insertMovie()}>add movie</button>
      </div>
    )
  }

  // 像这种在最后添加的有没有key都没什么关系，diff算法前面的节点正常比较
  // insertMovie() {
  //   this.setState({
  //     movies: [...this.state.movies, '火星救援']
  //   })
  // }

  // 这里在最前面添加的话key就可以有性能优化了
  insertMovie() {
    this.setState({
      movies: ['火星救援', ...this.state.movies]
    })
  }
}
