import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import UserPage from './pages/UserPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>
  },
  {
    path : '/user/:username',
    element: <UserPage/>
  },
  {
    path: '/login',
    element: <LoginPage/>
  },
  {
    path: '/register',
    element: <RegisterPage/>
  }
])

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App