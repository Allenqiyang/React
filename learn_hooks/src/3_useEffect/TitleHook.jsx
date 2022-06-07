import React, {useEffect} from 'react'
import { useState } from 'react'

export default function HookTitle() {
  const [counter, setCounter] = useState(0)

  useEffect(() => {   // 组件的DidMount和DidUpdate生命周期合二为一
    document.title = counter
  })

  return (
    <div>
      <h3>Counter: {counter}</h3>
      <button onClick={() => setCounter(counter + 1)}> +1 </button>
    </div>
  )
}
