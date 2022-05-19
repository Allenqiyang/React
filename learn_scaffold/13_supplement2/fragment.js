import React, { Fragment, PureComponent } from 'react'

export default class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0,
      friends: [
        {name: "Allen", age: 18},
        {name: "Tony", age: 15},
        {name: "Tom", age: 16}
      ]
    }
  }

  render() {
    return (
      // <Fragment>
      //   <h3>Counter: {this.state.counter}</h3>
      //   <button onClick={() => this.increase()}> +1 </button>
      // </Fragment>

      // fragment短语法
      <>
        <h3>Counter: {this.state.counter}</h3>
        <button onClick={() => this.increase()}> +1 </button>
        <div>
          {
            this.state.friends.map(friend => {
              return (
                // <key={friend.name}>  短语法不能添加属性
                <Fragment key={friend.name}>
                  <p>{friend.name}</p>
                  <p>{friend.age}</p>
                  <hr/>
                </Fragment>
              )
            })
          }
        </div>
      </>
    )
  }

  increase() {
    this.setState({
      counter: this.state.counter + 1
    })
  }
}
