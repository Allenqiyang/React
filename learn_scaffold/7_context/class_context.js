// 使用context
import React, { Component } from 'react'

// 创建Context对象
const UserContext = React.createContext({
  // 里面放的是默认值
  name: "Tom",
  age: 7
})

class ProfileHeader extends Component {
  render() {
    console.log(this.context)
    return (
      <div>
        <h3>name: {this.context.name}</h3>
        <h3>age: {this.context.age}</h3>
      </div>
    )
  }
}

// 把 Usercontext放进去
ProfileHeader.contextType = UserContext

// 不用保存状态的组件就写成函数式
function Profile(props) {
  return (
    <div>
      <ProfileHeader/>
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
        {/* 这里把要传的数据放进去 */}
        <UserContext.Provider value={this.state}>
          <Profile/>
        </UserContext.Provider>
      </div>
    )
  }
}
