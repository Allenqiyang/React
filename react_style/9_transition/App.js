import React, { PureComponent } from 'react'

import CSStransitionDemo from "./transition/CSStransitionDemo"
import SwitchTransitionDemo from './transition/SwitchTransitionDemo'
import TransitionGroupDemo from './transition/TransitionGroupDemo'

export default class App extends PureComponent {
  render() {
    return (
      <div style={{textAlign: 'center', padding: '30px'}}>
        <CSStransitionDemo/>
        <SwitchTransitionDemo/>
        <TransitionGroupDemo/>
      </div>
    )
  }
}
