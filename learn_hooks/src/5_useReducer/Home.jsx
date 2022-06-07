import React, {useState, useReducer} from 'react'

// 这个useReducer不能在不同组件之间共享数据
import reducer from './reducer'

export default function Home() {
  // const [count, setCount] = useState(0)
  const [state, dispatch] = useReducer(reducer, 0)

  return (
    <div>
      <h3>Home Count: {state}</h3>
      <button onClick={() => dispatch({type: "increment"})}> +1 </button>
      <button onClick={() => dispatch({type: "decrement"})}> -1 </button>
    </div>
  )
}
