// 使用props逐层传递
import React, { Component } from 'react'

function ProfileHeader(props) {
  return (
    <div>
      <h3>name: {props.name}</h3>
      <h3>age: {props.age}</h3>
    </div>
  )
}

// 不用保存状态的组件就写成函数式
function Profile(props) {
  return (
    <div>
      {/* <ProfileHeader name={props.name} age={props.age}/> */}
      <ProfileHeader {...props}/>
      <ul>
        <li>set1</li>
        <li>set2</li>
        <li>set3</li>
        <li>set4</li>
      </ul>
    </div>
  )
}

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "Tony",
      age: 15
    }
  }

  render() {
    return (
      <div>
        <Profile {...this.state} />
      </div>
    )
  }
}
