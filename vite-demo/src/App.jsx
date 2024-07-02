import './App.css'
import Header from './components/header/Header'
import Button from './components/button/Button'

const sport = {
  type: 'running',
  event: '5000m',
  location: 'veliko turnovo'
}

function App() {
  return (
    <>
      <Header/>
      <h1>My First React App</h1>
      <Button/>
    </>
  )
}

export default App
