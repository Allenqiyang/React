// 使用context
import React, { Component } from 'react'

// 创建Context对象
const UserContext = React.createContext({
  // 里面放的是默认值
  name: "Tom",
  age: 7
})

const ThemeContext = React.createContext({
  color: "grey"
})

// 函数式组件没有context属性
function ProfileHeader() {
  return (
    <UserContext.Consumer>
      {
        value => {
          return (
            <ThemeContext.Consumer>
              {
                theme => {
                  return (
                    <div>
                      <h3 style={{color: theme.color}}>name: {value.name}</h3>
                      <h3>age: {value.age}</h3>
                      <h3>color: {theme.color}</h3>
                    </div>
                  )
                }
              }
            </ThemeContext.Consumer>
          )
        }
      }
    </UserContext.Consumer>
  )
}

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
          <ThemeContext.Provider value={{color: "skyblue"}}>  {/* 传的数据格式应该是对象的形式 */}
            <Profile/>
          </ThemeContext.Provider>
        </UserContext.Provider>
      </div>
    )
  }
}
