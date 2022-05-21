import React, { PureComponent } from 'react'

import classNames from 'classnames'

export default class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      isActive: true
    }
  }

  render() {
    const {isActive} = this.state
    const isFoo = false, isBar = true
    const errorClass = "error", warnClass = null
    return (
      <div>
        {/* 原生方法 */}
        <h3 className={"foo bar active title"}>I'm title1</h3>
        <h3 className={"title" + (isActive ? " active" : "")}>I'm title2</h3>
        <h3 className={["title", (isActive ? "active" : "")].join(" ")}>I'm title3</h3>

        {/* classnames方法 */}
        <h3 className='foo bar active title'>I'm title</h3>
        <h3 className={classNames("foo", "bar", "active", "title")}>I'm title</h3>
        <h3 className={classNames({"active": isActive, "foo": isFoo})}>I'm title</h3>
        <h3 className={classNames({"active": isActive, "foo": isFoo}, "title")}>I'm title</h3>
        <h3 className={classNames("foo", errorClass, warnClass, {"active": isActive})}>I'm title</h3>

        <h3 className={classNames(["active", "foo"])}>I'm title</h3>
        <h3 className={classNames(["active", "foo", {"bar": isBar}])}>I'm title</h3>
        <h3>I'm title</h3>
      </div>
    )
  }
}


