import React, {useState} from 'react'
import { useEffect } from 'react'

export default function UseEffect() {
  const [count, setCount] = useState(10)

  useEffect(() => {
    if(count === 0) {
      setCount(Math.random() * 10)
    }
  }, [count])
  // 这个会闪烁一下，因为会先把0渲染上去

  return (
    <div>
      <h3>count: {count}</h3>
      <button onClick={() => setCount(0)}>change</button>
    </div>
  )
}
