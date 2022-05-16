// 组件嵌套的render调用
import React, { Component } from 'react'

/**
 * 在这个组件嵌套的代码中可以发现，页面首次渲染会把调用各个组件的render函数
 * 但是我们App组件setState将counter变了一下，全部组件又重新渲染了
 * 这样的话非常的浪费性能，需要进行优化
 */

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0
    }
  }

  render() {
    console.log('render of App is called')
    return (
      <div>
        <h2>The count: {this.state.counter}</h2>
        <button onClick={() => this.increase()}> + </button>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    )
  }

  increase() {
    this.setState({
      counter: this.state.counter + 1
    })
  }
}

class Header extends React.Component {
  render() {
    console.log('render of Header is called')
    return (
      <h3>I'm Header</h3>
    )
  }
}

class Main extends React.Component {
  constructor() {
    super()
    
    this.state = {
      count: 0
    }
  }

  render() {
    console.log('render of Main is call')
    return (
      <div>
        <Banner/>
        <h2>I'm the content of the main page</h2>
        <ProductList/>
      </div>
    )
  }
}

class Banner extends Component {
  render() {
    console.log('render of Banner is called')
    return <h3>I'm Banner</h3>
  }
}

function ProductList() {
  console.log('ProductList is called')
  return (
    <ul>
      <li>goods1</li>
      <li>goods2</li>
      <li>goods3</li>
      <li>goods4</li>
      <li>goods5</li>
    </ul>
  )
}

class Footer extends React.Component {
  render() {
    console.log('render of Footer is callded')
    return (
      <h3>I'm Footer</h3>
    )
  }
}