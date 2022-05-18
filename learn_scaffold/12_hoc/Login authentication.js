import React, { PureComponent } from 'react'

class Login extends PureComponent {
  render() {
    return <h3>Login Page</h3>
  }
}

function withAuth(WrappedComponent) {
  return props => {
    const {isLogin} = props
    if(isLogin) {
      return <WrappedComponent {...props} />
    } else {
      return <Login/>
    }
  }
}

class CartPage extends PureComponent {
  render() {
    return <h3>Cart Page</h3>
  }
}

const AuthPage = withAuth(CartPage)

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <AuthPage isLogin={true}/>    {/* 这里ture，false可以决定展示的页面是登录页还是购物车页面 */}
      </div>
    )
  }
}
