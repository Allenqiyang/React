import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Detail() {
  const {state} = useLocation()
  return (
    <ul>
      <li>id: {state.id}</li>
      <li>title: {state.title}</li>
      <li>content: {state.content}</li>
    </ul>
  )
}
