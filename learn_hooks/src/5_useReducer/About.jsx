import React, {useReducer} from 'react'

import reducer from './reducer'

export default function About() {
  const [state, dispatch] = useReducer(reducer, 0)

  return (
    <div>
      <h3>About Count: {state}</h3>
      <button onClick={() => dispatch({type: "increment"})}> +1 </button>
      <button onClick={() => dispatch({type: "decrement"})}> -1 </button>
    </div>
  )
}
