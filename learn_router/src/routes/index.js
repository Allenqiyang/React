import { Navigate } from 'react-router-dom'
import About from '../pages/about'
import Detail from '../pages/detail'
import Message from '../pages/message'
import News from '../pages/news'
import Profile from '../pages/profile'

export default[
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/profile",
    element: <Profile/>,
    children: [
      {
        path: "news",
        element: <News/>
      },
      {
        path: "message",
        element: <Message/>,
        children: [
          {
            path: "detail",
            element: <Detail/>
          }
        ]
      }
    ]
  },
  {
    path: "/",
    element: <Navigate to="/about" />
  }
]