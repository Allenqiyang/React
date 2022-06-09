import React, { useRef } from 'react'

class TestCpn extends React.Component {
  render() {
    return <h3>TestCpn</h3>
  }
}

export default function RefHookDemo() {
  // Ref可以用在组件上，不过必须是类组件
  const titleRef = useRef()
  const inputRef = useRef()
  const cpnRef = useRef()

  function changeDOM() {
    titleRef.current.innerHTML = "Hello World"
    inputRef.current.focus()
    console.log(cpnRef.current)
  }

  return (
    <div>
      <h3 ref={titleRef}>useRefDOM</h3>
      <input ref={inputRef} type="text" />
      <TestCpn ref={cpnRef} />

      <button onClick={changeDOM}>change text</button>
    </div>
  )
}
