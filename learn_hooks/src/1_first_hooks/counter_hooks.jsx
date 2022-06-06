import React, {useState} from 'react'

export default function CounterHook() {
  /**
   * Hook: useState
   * > 本身是一个函数，来自react
   * > 参数和返回值
   *   1. 参数：作用是给创建出来的状态一个默认值
   *   2. 返回值：数组
   *    - 元素1：当前state的值
   *    - 元素2： 设置新的值使用的一个函数
   * 
   * # 只在函数最外层调用Hook，只能在React的函数组件中调用Hook
   */
  
  const arr = useState(0)
  const state = arr[0]
  const setState = arr[1]

  return (
    <div>
      <h3>Counter: {state}</h3>
        <button onClick={() => setState(state + 1)}> +1 </button>
        <button onClick={() => setState(state - 1)}> -1 </button>
    </div>
  )
}
