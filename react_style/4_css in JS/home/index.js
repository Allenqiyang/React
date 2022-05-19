import React, { PureComponent } from 'react'

import {HomeStyle, TitleStyle} from './style'

export default class Home extends PureComponent {
  render() {
    return (
      <HomeStyle>
        <TitleStyle>I'm title of Home</TitleStyle>
        <div className="banner">
          <span>Banner1</span>
          <span className="active">Banner2</span>
          <span>Banner3</span>
        </div>
      </HomeStyle>
    )
  }
}
