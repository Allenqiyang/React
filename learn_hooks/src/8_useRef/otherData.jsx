import React, { useRef, useState, useEffect } from 'react'

export default function OtherData() {
  const [count, setCount] = useState(0)
  const numRef = useRef(count)

  // 因为useEffect有ComponentDidUpdata生命周期的效果
  useEffect(() => {
    numRef.current = count
  }, [count])

  // useRef返回的ref对象在组件的整个生命周期中保持不变
  return (
    <div>
      {/* <h3>numRef: {numRef.current}</h3>
      <h3>count: {count}</h3> */}
      <h3>count last time: {numRef.current}</h3>
      <h3>count this time: {count}</h3>
      <button onClick={() =>{setCount(count + 10)}}> +10 </button>
    </div>
  )
}
