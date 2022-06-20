import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function Detail() {
  const [search, setSearch] = useSearchParams()
  return (
    <ul>
      <button onClick={() => setSearch('id=005&title=yeah&content=wearegood')}>update params</button>
      <li>id: {search.get("id")}</li>
      <li>title: {search.get("title")}</li>
      <li>content: {search.get("content")}</li>
    </ul>
  )
}
