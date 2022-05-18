import React, { PureComponent } from 'react'

// class Home extends PureComponent {
//   UNSAFE_componentWillMount() {
//     this.beginTime = Date.now()
//   }

//   render() {
//     return <h3>Home</h3>
//   }

//   componentDidMount() {
//     this.endTime = Date.now()
//     const interval = this.endTime - this.beginTime
//     console.log("Home render time: " + interval)
//   }
// }

function getRenderTime(WrappedComponent) {
  return class extends PureComponent {
    UNSAFE_componentWillMount() {
      this.beginTime = Date.now()
    }
  
    render() {
      return <WrappedComponent {...this.props} />
    }
  
    componentDidMount() {
      this.endTime = Date.now()
      const interval = this.endTime - this.beginTime
      console.log(`${WrappedComponent.name} render time: ${interval}`)
    }
  }
}

class Home extends PureComponent {
  render() {
    return <h3>Home</h3>
  }
}

class About extends PureComponent {
  render() {
    return <h3>About</h3>
  }
}

const RenderHome = getRenderTime(Home)
const RenderAbout = getRenderTime(About)

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <RenderHome/>
        <RenderAbout/>
      </div>
    )
  }
}
