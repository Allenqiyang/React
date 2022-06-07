import React, {useState, useEffect} from 'react'

export default function MultiUseEffect() {
  const [count, setCount] = useState(0)
  const [login, setLogin] = useState(true)

  useEffect(() => {
    console.log("edit DOM", count)
  }, [count, login])
  // 后面这第二个参数是数组，里面放的是依赖的变量，只有依赖的变量发生改变了才会执行

  useEffect(() => {
    console.log("subscribe")
  }, [])

  useEffect(() => {
    console.log("request")
  }, [])

  return (
    <div>
      <h3>MultiUseEffect</h3>
      <h3>Counter: {count}</h3>
      <button onClick={() => setCount(count + 1)}> +1 </button>
      <h3>{login ? "Allen" : "unauthorized"}</h3>
      <button onClick={() => setLogin(!login)}>login/exit</button>
    </div>
  )
}
