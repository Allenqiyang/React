import React, { PureComponent, StrictMode } from 'react'

class Home extends PureComponent {
  UNSAFE_componentWillMount() {
    console.log('Home component will mount')
  }

  render() {
    return <div ref="title">Home</div>
  }
}

/**
 * 严格模式会检查：
 *  1. 不安全的生命周期
 *  2. 过期的ref API
 *  3. 检查意外的副作用(组件的constructor会被调用两次)
 *  4. 废弃的findDOMNode方法
 *  5. 检查过时的context API
 */

class Profile extends PureComponent {
  UNSAFE_componentWillMount() {
    console.log('Profile component will mount')
  }

  render() {
    return <div>Profile</div>
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <StrictMode>
          <Home/>
        </StrictMode>
        <Profile/>
      </div>
    )
  }
}
