import React from 'react'
import useLocalStorage from '../hooks/local-store-hook'

export default function LocalStorage() {
  const [name, setName] = useLocalStorage("name")

  return (
    <div>
      <h3>localStorage: {name}</h3>
      <button onClick={() => setName("Allen")}>setName</button>
    </div>
  )
}
