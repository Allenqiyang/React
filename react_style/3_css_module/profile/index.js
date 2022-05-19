import React, { PureComponent } from 'react'

import profileStyles from './style.module.css'

export default class Profile extends PureComponent {
  render() {
    return (
      <div>
        <h3 className={profileStyles.title}>I'm title of Profile</h3>
        <ul className={profileStyles.list}>
          <li>setting1</li>
          <li>setting2</li>
          <li>setting3</li>
        </ul>
      </div>
    )
  }
}
