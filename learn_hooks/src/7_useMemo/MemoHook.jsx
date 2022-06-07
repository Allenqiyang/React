import React, {useMemo, useState} from 'react'

function calNumber(count) {
  let sum = 0
  for(let i = 0; i <= count; i++) {
    sum += i
  }
  return sum
}

export default function MemoHook() {
  const [count, setCount] = useState(10)
  const [show, setShow] = useState(true)

  // const sum = calNumber(count)
  const sum = useMemo(() => {
    console.log("calNumber")
    return calNumber(count)
  }, [count])

  return (
    <div>
      <h2>sum of count: {sum}</h2>
      <button onClick={() => setCount(count + 1)}> +1 </button>
      <button onClick={() => setShow(!show)}>change</button>
    </div>
  )
}
