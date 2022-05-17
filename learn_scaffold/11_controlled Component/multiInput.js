import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      valid: ''
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label>
            User: 
            <input
              type="text" 
              name="username" 
              onChange={e => this.handleChange(e)}
              value={this.state.username}
            />
          </label>
          <br/>
          <label>
            Password:  
            <input
              type="text" 
              name="password" 
              onChange={e => this.handleChange(e)}
              value={this.state.password}
            />
          </label>
          <br/>
          <label>
            Validation: 
            <input
              type="text" 
              name="valid" 
              onChange={e => this.handleChange(e)}
              value={this.state.valid}
            />
          </label>
          <br/>
          <input type="submit" value="submit"></input>
        </form>
      </div>
    )
  }

  handleSubmit(event) {
    event.preventDefault()
    const { username, password, valid } = this.state
    console.log(username, password, valid)
  }

  handleChange(event) {
    console.log(event)
    this.setState({
      // 计算属性名(这样我们就可以动态地给属性传值)
      [event.target.name]: event.target.value
    })
  }
}
