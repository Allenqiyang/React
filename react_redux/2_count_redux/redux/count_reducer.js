/*
  创建为count组件服务的reducer，本质是一个函数
  接收两个参数，之前的状态(preState)，动作对象(action)
*/

import { dec, inc } from "./constant"

const initialState = 0

export default function countReducer(preState = initialState, action) {
  const {type, data} = action
  switch (type) {
    case inc:
      return preState + data
    case dec:
      return preState - data
    default:
      return preState
  }
}