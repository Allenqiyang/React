import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Message() {
  const message = [
    {id: "001", title: "message1", content: "Hello Allen"},
    {id: "002", title: "message2", content: "Be happy everyday"},
    {id: "003", title: "message3", content: "Also work hard"},
    {id: "004", title: "message4", content: "Everything is going to be good"}
  ]

  return (
    <div>
      <ul>
        {
          message.map(item => {
            return (
              <li key={item.id}>
                <Link to={`detail/${item.title}/${item.content}`}>{item.title}</Link>
              </li>
            )
          })
        }
      </ul>
      <hr/>
      <Outlet/>
    </div>
  )
}
