import React, {useState} from 'react'

export default function ComplexHookState() {
  const [friends, setFriends] = useState(["Allen", "Tony"])
  const [students, setStudents] = useState([
    {id: 1, name: "Jerry", age: 15},
    {id: 2, name: "John", age: 14},
    {id: 3, name: "Rose", age: 16},
  ])

  function increaseAge(index) {
    const newStudents = [...students]
    newStudents[index].age += 1
    setStudents(newStudents)
  }

  return (
    <div>
      <h3>Friends</h3>
      <ul>
        {
          friends.map(item => {
            return <li key={item}>{item}</li>
          })
        }
      </ul>
      <button onClick={() => setFriends([...friends, "Tom"])}>add friend</button>

      <h3>Students</h3>
      <ul>
        {
          students.map((item, index) => {
            return (
              <li key={item.id}>
                <span>Name: {item.name} Age: {item.age}</span>
                <button onClick={() => increaseAge(index)}>age+1</button>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
