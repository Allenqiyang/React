import React, { Component } from 'react'
import TabControl from './TabControl'

export default class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      currentTitle: 'Popular',
      titles: ['Popular', 'Normal', 'Unpopular']
    }
  }

  render() {
    const {titles, currentTitle} = this.state
    return (
      <div>
        <TabControl titleChange={index => this.titleClick(index)} titles={titles}/>
        <h3>{currentTitle}</h3>
      </div>
    )
  }

  titleClick(index) {
    const {titles} = this.state
    this.setState({
      currentTitle: titles[index]
    })
  }
}
