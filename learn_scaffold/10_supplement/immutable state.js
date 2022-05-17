import React, { PureComponent } from 'react'

// 或者是PureComponent，也有浅层比较
export default class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      friends: [
        {name: 'John', age: 16},
        {name: 'Rose', age: 15},
        {name: 'Tom', age: 14}
      ]
    }
  }

  // 由于数组是引用数据类型，所以前后两次比较的结果是一样的，这里不会更新
  // shouldComponentUpdate(newProps, newState) {
  //   if(newState.friends !== this.state.friends) {
  //     return true
  //   }
  //   return false
  // }

  render() {
    return (
      <div>
        <h3>Friend List</h3>
        <ul>
          {
            this.state.friends.map((friend, index) => {
              return(
                <li key={friend.name}>
                  name: {friend.name} 
                  age: {friend.age}&nbsp;
                  <button onClick={() => this.increaseAge(index)}>age+1</button>
                </li>
              )
            })
          }
        </ul>
        <button onClick={() => this.insertData()}>add</button>
      </div>
    )
  }

  increaseAge(index) {
    const newFriends = [...this.state.friends]
    newFriends[index].age += 1
    this.setState({
      friends :newFriends
    })
  }

  insertData() {
    // 1. 开发中极不推荐的方式(如果有比较优化那就会出问题)
    // const newData = {name: 'Jerry', age: 13}
    // this.state.friends.push(newData)
    // this.setState({
    //   friends: this.state.friends
    // })

    // 2. 开发中推荐的方式
    const newFriends = [...this.state.friends]
    newFriends.push({name: 'Jerry', age: 13})
    this.setState({
      friends: newFriends
    })
  }
}
