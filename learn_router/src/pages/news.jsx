import React from 'react'
import { useNavigationType } from 'react-router-dom'
// 判断到当前页面是用什么方式

export default function News() {
  console.log(useNavigationType())
  return (
    <ul>
      <li>news001</li>
      <li>news002</li>
      <li>news003</li>
    </ul>
  )
}
