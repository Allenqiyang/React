import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  render() {
    const pStyle = {
      color: "skyblue",
      textDecoration: "underline"
    }
    return (
      <div>
        <h3 style={{fontSize: "40px", color: "skyblue"}}>I'm title</h3>
        <p style={pStyle}>I'm a passage</p>
      </div>
    )
  }
}
