import React from 'react'
import { useEffect } from 'react'

function Home() {
  useLifeShow("Home")
  return <h3>Home</h3>
}

function About() {
  useLifeShow("About")
  return <h3>About</h3>
}

export default function CustomLifeHook() {
  useLifeShow("CustomLifeHook")
  return (
    <div>
      <Home/>
      <About/>
      <h3>CustomLifeHook</h3>
    </div>
  )
}

// 在原来的函数名前面加一个use就是自定义hook了
function useLifeShow(name) {
  useEffect(() => {
    console.log(`${name} is created`)

    return () => {
      console.log(`${name} is destoryed`)
    }
  }, [])
}
