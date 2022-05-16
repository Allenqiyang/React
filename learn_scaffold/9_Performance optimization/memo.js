// 那既然全部重新渲染很损害性能，我们就要决定哪些组件应该被渲染
import React, { PureComponent, memo } from 'react'

// 把Header写成函数式组件
const MemoHeader = memo(function Header() {
  console.log('render of Header is called')
  return (
    <h3>I'm Header</h3>
  )
})


// PureComponent 自己已经进行了浅层比较了(只有类组件中才能用)
export default class App extends PureComponent {
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
        <MemoHeader/>
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

class Main extends PureComponent {
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

class Banner extends PureComponent {
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

class Footer extends PureComponent {
  render() {
    console.log('render of Footer is callded')
    return (
      <h3>I'm Footer</h3>
    )
  }
}