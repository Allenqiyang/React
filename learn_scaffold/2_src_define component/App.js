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
  constructor() {
    super()

    this.state = {
      count: 0
    }
  }

  render() {
    return (
      <div>
        <h2>The count: {this.state.count}</h2>
        <button> + </button>
        <button> - </button>
      </div>
    )
  }
}