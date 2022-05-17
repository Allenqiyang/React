import React, { PureComponent, createRef } from 'react'

export default class App extends PureComponent {
  constructor(props){
    super(props)

    this.titleRef = createRef()
    this.titleEl = null
    this.counterRef = createRef()
  }

  /**
   * ref的值根据节点的类型而有所不同
   *  当ref用于 HTML元素时，构造函数中使用React.createRef()创建的ref接收底层DOM元素作为其current属性
   *  当ref用于自定义class组件时，ref对象接收组建的挂载实例作为其current属性
   *  不能在函数式组件上使用ref属性，因为函数式组件没有实例
   */

  render() {
    return (
      <div>
        {/* <h2 ref=字符串/对象/函数>Hello World!</h2> */}
        <h3 ref="titleRef">Hello World!</h3>
        {/* React推荐的方式 */}
        <h3 ref={this.titleRef}>Hello World!</h3>
        {/* 传入函数 */}
        <h3 ref={args => this.titleEl = args}>Hello World!</h3>
        <button onClick={() => this.changeText()}>change text</button>
        <hr/>
        {/* 在自定义组件中使用 */}
        <Counter ref={this.counterRef}/>
        <button onClick={() => this.appClick()}> App </button>
      </div>
    )
  }

  changeText() {
    // 1. 字符串(不推荐)
    this.refs.titleRef.innerHTML = "Hello Allen!"
    // 2. 对象方式
    this.titleRef.current.innerHTML = "Hello Tony!"
    // 3. 函数方式
    this.titleEl.innerHTML = "Hello Tom!"
  }

  appClick() {
    // 这里的this.counterRef.current是根据counter组件创建对象
    this.counterRef.current.increase()
  }
}

class Counter extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0
    }
  }

  render() {
    return (
      <div>
        <h3>Counter: {this.state.counter}</h3>
        <button onClick={() => this.increase()}> +1 </button>
      </div>
    )
  }

  increase() {
    this.setState({
      counter: this.state.counter + 1
    })
  }
}
