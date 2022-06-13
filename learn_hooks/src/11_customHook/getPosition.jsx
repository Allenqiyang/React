import React from 'react'
import useScorllPosition from '../hooks/scroll-position-hook'

export default function GetPosition() {
  const position = useScorllPosition()

  return (
    <div style={{padding: "1000px 0"}}>
      <h3 style={{postion: "fixed", left: 0, top: 0}}>GetPosition {position}</h3>
    </div>
  )
}
