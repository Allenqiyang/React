import React, {useRef, forwardRef} from 'react'
import { useImperativeHandle } from 'react'
// 用这个东西可以让子组件不暴露过多属性给父组件

const MyInput = forwardRef((props, ref) => {
  const inputRef = useRef()

  // 后面的回调函数返回一个对象,里面有一些属性，这些属性是父组件可以操控的
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus()
    }
  }), [inputRef.current])

  return <input ref={inputRef} type="text"/>
})

export default function ForwardRef() {
  const inputRef = useRef()

  return (
    <div>
      <MyInput ref={inputRef}/>
      <button onClick={() => inputRef.current.focus()}>focus</button>
    </div>
  )
}
