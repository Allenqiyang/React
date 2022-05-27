// 给某一组元素添加动画时可以用这个

import React, { PureComponent } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './TransitionGroup.css'

export default class TransitionGroupDemo extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      names: ['Allen', 'Tony', 'Tom']
    }
  }

  render() {
    return (
      <TransitionGroup>
        {
          this.state.names.map((item, index) => {
            return (
              <CSSTransition      // 因为这里不需要隐藏所以就不用写in了
                key={item}
                timeout={1000}
                classNames="item"
              >
                <div>
                  {item}
                  <button onClick={() => this.removeName(index)}>remove</button>
                </div>
              </CSSTransition>
            )
          })
        }
        <button onClick={() => this.addName()}>add name</button>
      </TransitionGroup>
    )
  }

  addName() {
    this.setState({
      names: [...this.state.names, 'Jerry']
    })
  }

  removeName(index) {
    this.setState({
      names: this.state.names.filter((item, indey) => index !== indey)
    })
  }
}
