import React from 'react'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'


export default function About() {
  const [sum, setSum] = useState(1)
  return (
    <div>
      <h3>About</h3>
      {sum === 2 ? <Navigate to="/home" replace={true}/> : <h4>Sum is: {sum}</h4>}
      <button onClick={() => setSum(sum + 1)}> +1 </button>
    </div>
  )
}
