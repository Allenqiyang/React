import React, {useRef, forwardRef} from 'react'

const MyInput = forwardRef((props, ref) => {
  return <input ref={ref} type="text"/>
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
