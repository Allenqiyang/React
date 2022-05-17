import React, { PureComponent } from 'react'

import {EventEmitter} from 'events'

class Home extends PureComponent {
  render() {
    return (
      <div>
        Home
      </div>
    )
  }

  componentDidMount() {
    eventbus.addListener('sayHello',this.handle)
  }

  componentWillUnmount() {
    eventbus.removeListener('sayHello',this.handle)
  }

  handle(...args) {
    console.log(args)
  }
}

const eventbus = new EventEmitter()

class Profile extends PureComponent {
  render() {
    return (
      <div>
        Profile
        <button onClick={() => this.emitEvent()}>Profile</button>
      </div>
    )
  }

  emitEvent() {
    eventbus.emit('sayHello', "Hello Home, I'm Profile!", 123)
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home/>
        <Profile/>
      </div>
    )
  }
}
