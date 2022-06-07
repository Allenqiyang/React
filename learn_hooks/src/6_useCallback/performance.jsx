import React, { memo } from 'react'
import { useMemo } from 'react'
import { useState, useCallback } from 'react'

// useCallback在什么时候使用?
// 在一个组件中的函数，传递给子元素进行回调使用时，使用useCallback对函数进行处理

const MyButton = memo((props) => {
  console.log("MyButton Rerender " + props.title)
  return <button onClick={props.increment}> +1 </button>
})

export default function Callback() {
  console.log("callback Rerender")

  const [count, setCount] = useState(0)
  const [show, setShow] = useState(true)

  const increment1 = () => {
    console.log("increment1")
    setCount(count + 1)
  }

  const increment2 = useCallback(() => {
    console.log("increment2")
    setCount(count + 1)
  }, [count])

  // 这样就是用useMemo实现和useCallback一样的效果
  const increment3 = useMemo(() => {
    return () => {
      console.log("increment3")
      setCount(count + 1)
    }
  }, [count])

  return (
    <div>
      <h3>CallbackDemo: {count}</h3>
      {/* <button onClick={increment1}> +1 </button>
      <button onClick={increment2}> +1 </button> */}
      <MyButton title="btn1" increment={increment1}/>
      <MyButton title="btn2" increment={increment2}/>

      <button onClick={() => setShow(!show)}>change</button>
    </div>
  )
}
