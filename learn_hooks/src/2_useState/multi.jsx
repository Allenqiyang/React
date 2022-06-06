import React, {useState} from 'react'

export default function MultiHookState() {
  const [count, setCount] = useState(0)
  const [age, setAge] = useState(18)
  const [friends, setFriends] = useState(["Allen", "Tony"])

  return (
    <div>
      <h3>Counter: {count}</h3>
      <h3>Age: {age}</h3>
      <ul>
        {
          friends.map(item => {
            return <li key={item}>{item}</li>
          })
        }
      </ul>
    </div>
  )
}
