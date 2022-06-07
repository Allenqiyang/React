import React, {memo, useState, useMemo} from 'react'

const MyInfo = memo(props => {
  console.log("MyInfo render")
  return <h3>name: {props.info.name} age: {props.info.age}</h3>
})

export default function ChildComp() {
  console.log("ChildComp render")
  const [show, setShow] = useState(true)
  // const info = {name: "Allen", age: 18}
  const info = useMemo(() => {
    return {name: "Allen", age: 18}
  }, [])

  return (
    <div>
      <MyInfo info={info}/>
      <button onClick={() => setShow(!show)}>change</button>
    </div>
  )
}
