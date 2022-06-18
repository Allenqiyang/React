import React from 'react'
import { useParams } from 'react-router-dom'

export default function Detail() {
  const {title, content} = useParams()
  return (
    <ul>
      <li>title: {title}</li>
      <li>content: {content}</li>
    </ul>
  )
}
