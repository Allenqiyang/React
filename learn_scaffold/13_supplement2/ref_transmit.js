import React, { PureComponent, createRef, forwardRef } from 'react'

class Home extends PureComponent {
  render() {
    return <h3>Home</h3>
  }
}
// 这样才能让函数式组件中的某个元素获得ref
const About = forwardRef(function(props, ref) {
  return <h3 ref={ref}>About</h3>
})

export default class App extends PureComponent {
  constructor(props) {
    super(props)

    this.titleRef = createRef()
    this.homeRef = createRef()
    this.aboutRef = createRef()
  }

  render() {
    return (
      <div>
        <h3 ref={this.titleRef}>Title</h3>
        <Home ref={this.homeRef}/>
        <About ref={this.aboutRef}/>
        <button onClick={() => this.printRef()}>print Ref</button>
      </div>
    )
  }

  printRef() {
    console.log(this.titleRef.current)
    console.log(this.homeRef.current)
    console.log(this.aboutRef.current)
  }
}
