// 为Count组件生成action对象
import {inc, dec} from './constant'

export function addAction(data) {
  return {
    type: inc,
    data
  }
}

export function subAction(data) {
  return {
    type: dec,
    data
  }
}