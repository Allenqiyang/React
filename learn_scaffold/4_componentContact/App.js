// 父子组件间通信   父组件 -> 子组件

import React, { Component } from 'react'
import PropTypes from 'prop-types'

function Child2(props) {
  const {name, age} = props
  return (
    <h3>{`name: ${name} age: ${age}`}</h3>
  )
}

class Child extends Component {
  // props里就是父组件传来的数据
  constructor(props) {
    super(props)
    this.props = props
  }
  // 这里的constructor也可以全部删掉不用写也能正常运行 (这里tmd挺复杂的，不写他自己也会保存在实例里)

  render() {
    const {name, age} = this.props
    const {things} = this.props
    return (
      <div>
        <h3>Data in child component: {`name: ${name} age: ${age}`}</h3>
        <ul>
          {
            things.map(thing => {
              return <li>{thing}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

// 数据类型检测
Child.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  things: PropTypes.array
}

// 没传数据默认的值
Child.defaultProps = {
  name: 'default',
  age: 20,
  things: ['book']
}

export default class App extends Component {
  render() {
    return (
      <div>
        App
        <Child name="Allen" age={18} things={['book', 'pen']}/>
        <Child name="Tony" age={15} things={['book', 'pen']}/>
        <Child2 name="John" age="16"/>
      </div>
    )
  }
}
