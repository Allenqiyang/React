import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      // 那我们在这里设置初始值就会在页面上显示开始就选中orange了
      fruits: 'Orange'
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <select 
            name="fruits"
            onChange={e => this.handleChange(e)}
            value={this.state.fruits}
          >
            <option value="Apple">Apple</option>
            <option value="Banana">Banana</option>
            <option value="Orange">Orange</option>
          </select>
          <input type="submit" value="submit"></input>
        </form>
      </div>
    )
  }

  handleSubmit(event) {
    // 取消默认行为
    event.preventDefault()
  }

  handleChange(event) {
    this.setState({
      fruits: event.target.value
    })
  }
}
