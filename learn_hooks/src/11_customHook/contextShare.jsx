import React from 'react'
import useUserContext from '../hooks/user-hook'

export default function ContextShare() {
  const [user, token] = useUserContext()
  console.log(user, token)

  return (
    <div>
      <h3>ContextShare</h3>
    </div>
  )
}
