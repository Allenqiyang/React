import React, { PureComponent } from 'react'

import './style.css'

export default class Profile extends PureComponent {
  render() {
    return (
      <div className="profile">
        <h3 className="title">I'm title of Profile</h3>
        <ul className="settings">
          <li>setting1</li>
          <li>setting2</li>
          <li>setting3</li>
        </ul>
      </div>
    )
  }
}
