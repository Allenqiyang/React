import React, { PureComponent } from 'react'

import homeStyles from './style.module.css'

export default class Home extends PureComponent {
  render() {
    return (
      <div>
        <h3 className={homeStyles.title}>I'm title of Home</h3>
        <div className={homeStyles.banner}>
          <span>Banner</span>
        </div>
      </div>
    )
  }
}
