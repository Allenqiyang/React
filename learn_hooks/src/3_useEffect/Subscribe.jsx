import React, { useState } from 'react'
import { useEffect } from 'react'

export default function Subscribe() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log("subscribe!")

    return () => {
      console.log("unsubscribe!")
    }
  }, [])

  return (
    <div>
      <h3>Subscribe</h3>
      <h3>Counter: {count}</h3>
      <button onClick={() => setCount(count + 1)}> +1 </button>
    </div>
  )
}
