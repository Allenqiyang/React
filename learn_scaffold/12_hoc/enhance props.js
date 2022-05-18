import React, { PureComponent } from 'react'

// 定义一个高阶组件
function enhanceRegionProps(WrappedComponent) {
  return props => {
    return <WrappedComponent {...props} region="China"/>
  }
}

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

const EnhanceHome = enhanceRegionProps(Home)
const EnhanceAbout = enhanceRegionProps(About)

export default class App extends PureComponent {
  render() {
    return (
      <div>
        App
        <EnhanceHome name="Allen" age={18}/>
        <EnhanceAbout name="John" age={24}/>
      </div>
    )
  }
}
