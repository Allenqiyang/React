import React, { PureComponent, createContext } from 'react'

// 定义一个高阶组件
function withUser(WrappedComponent) {
  return props => {
    return (
      <UserContext.Consumer>
        {
          value => {
            return (
              <div>
                <WrappedComponent {...props} {...value} />
              </div>
            )
          }
        }
       </UserContext.Consumer>
    )
  }
}

// 创建Context
const UserContext = createContext({
  name: "user",
  age: 20,
  region: "China"
})


class Home extends PureComponent {
  render() {
    return (
      <div>
        <h3>Home</h3>
        {`name: ${this.props.name} age: ${this.props.age} region: ${this.props.region}`}
      </div>
    )
  }
}

// class Home extends PureComponent {
//   render() {
//     // 那如果别的组件也要用这些数据，都这样写的话非常的重复
//     return (
//       <UserContext.Consumer>
//         {
//           value => {
//             return (
//               <div>
//                 <h3>Home</h3>
//                 {`name: ${value.name} age: ${value.age} region: ${value.region}`}
//               </div>
//             )
//           }
//         }
//       </UserContext.Consumer>
//     )
//   }
// }

class About extends PureComponent {
  render() {
    return (
      <div>
        <h3>About</h3>
        {`name: ${this.props.name} age: ${this.props.age} region: ${this.props.region}`}
      </div>
    )
  }
}

const UserHome = withUser(Home)
const UserAbout = withUser(About)

export default class App extends PureComponent {
  render() {
    return (
      <div>
        App
        <UserContext.Provider value={{name: "Tom", age: 15, region: "China"}}>
          <UserHome/>
          <UserAbout/>
        </UserContext.Provider>
      </div>
    )
  }
}
