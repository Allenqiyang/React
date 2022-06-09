import React, {useState} from 'react'
import { useLayoutEffect } from 'react'

export default function LayoutEffect() {
  const [count, setCount] = useState(10)

  useLayoutEffect(() => {
    if(count === 0) {
      setCount(Math.random() * 10)
    }
  }, [count])
  // 这个的话就是一点闪烁都没有，因为这里不会把0渲染上去，useLayoutEffect会阻塞DOM渲染

  return (
    <div>
      <h3>count: {count}</h3>
      <button onClick={() => setCount(0)}>change</button>
    </div>
  )
}
