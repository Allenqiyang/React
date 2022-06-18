import { Navigate } from 'react-router-dom'
import About from '../pages/about'
import Profile from '../pages/profile'

export default[
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/profile",
    element: <Profile/>
  },
  {
    path: "/",
    element: <Navigate to="/about" />
  }
]