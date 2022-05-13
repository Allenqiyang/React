import React from "react"

/**
 * 函数式组件的特点：
 *  1.没有this对象
 *  2.没有内部的状态
 */
// export default function App() {
//   return (
//     <div>
//       <span>I'm function component</span>
//       <h2>Hello Allen</h2>
//     </div>
//   )
// }

// 类式组件
export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    )
  }
}

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
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
    return (
      <div>
        <h2>I'm the content of the main page</h2>
        <h2>The count: {this.state.count}</h2>
        <button> + </button>
        <button> - </button>
      </div>
    )
  }
}

class Footer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <h3>I'm Footer</h3>
    )
  }
}