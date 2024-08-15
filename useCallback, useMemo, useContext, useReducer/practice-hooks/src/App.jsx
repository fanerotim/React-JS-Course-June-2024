import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReducerPlayground from './components/ReducerPlayground'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ReducerPlayground />
    </>
  )
}

export default App
