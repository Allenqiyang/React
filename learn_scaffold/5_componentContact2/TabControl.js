import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './TabControl.css'

export default class TabControl extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentIndex: 0
    }
  }

  render() {
    const {titles} = this.props
    const {currentIndex} = this.state

    return (
      <div className="tab-control">
        {
          titles.map((title, index) => {
            return (
              <div
                className={'tab-title ' + (index === currentIndex ? 'active' : '')}
                onClick={() => this.titleClick(index)}>
                <span>{title}</span>
              </div>
            )
          })
        }
      </div>
    )
  }

  titleClick(index) {
    this.setState({
      currentIndex: index
    })

    const {titleChange} = this.props
    titleChange(index)
  }
}

TabControl.propTypes = {
  titles: PropTypes.array.isRequired
}
