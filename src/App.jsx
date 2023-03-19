import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { RouterProvider } from 'react-router-dom'
import { routes } from './components/Routes/Routes/Routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <RouterProvider router={routes}/>
    </div>
  )
}

export default App
