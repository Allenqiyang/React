import React, { PureComponent } from 'react'

class App extends PureComponent {
  render() {
    return (
      <div>
        App {this.props.name}
      </div>
    )
  }
}

function enhanceComponent(WrappedComponent) {
  class NewComponent extends PureComponent {
    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  NewComponent.displayName = 'Allen'

  return NewComponent
}

function enhanceComponent2(WrappedComponent) {
  function NewComponent(props) {
    return <WrappedComponent {...props} />
  }

  NewComponent.displayName = 'Allen'
  return NewComponent
}
const EnhanceComponent = enhanceComponent(App)
const EnhanceComponent2 = enhanceComponent2(App)

export default EnhanceComponent