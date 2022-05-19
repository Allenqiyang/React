import React, { PureComponent } from 'react'

import styled from 'styled-components'

const SInput = styled.input.attrs({
  placeholder: 'Enter something',
  bColor: "grey"
})`
  background-color: lightskyblue;
  border-color: ${props => props.bColor};
  color: ${props => props.color};
`

export default class Profile extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      color: "purple"
    }
  }
  render() {
    return (
      <div>
        <input type="text" style={{color: 'orchid'}}/>
        <SInput color={this.state.color}/>    {/* 这里是传递数据进去，不是直接设置颜色 */}
        <h3>I'm title of Profile</h3>
        <ul>
          <li>setting1</li>
          <li>setting2</li>
          <li>setting3</li>
        </ul>
      </div>
    )
  }
}
