import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      username: ''
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label>
            User: 
            {/* 受控组件 */}
            <input
              type="text" 
              id="username" 
              onChange={e => this.handleChange(e)}
              value={this.state.username}
            />
          </label>
          <input type="submit" value="submit"></input>
        </form>
      </div>
    )
  }

  handleSubmit(event) {
    // 取消默认行为
    event.preventDefault()
  }

  // 上面那个input中onChange触发调用该方法，在方法中setState改变state中的值
  // 然后又把state的username传给value，这里是单向数据流
  handleChange(event) {
    this.setState({
      username: event.target.value
    })
  }
}
