import React, { PureComponent } from 'react'
import { createPortal } from 'react-dom'

// portals可以让组件独立出来，而不是默认渲染在其父组件上
class Modal extends PureComponent {
  render() {
    return createPortal(
      this.props.children,
      document.getElementById('modal')
    )
  }
}

class Home extends PureComponent {
  render() {
    return (
      <div>
        <h3>Home</h3>
        <Modal>
          <h3>Title</h3>
        </Modal>
      </div>
    )
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home/>
      </div>
    )
  }
}
