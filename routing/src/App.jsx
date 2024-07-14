import './App.css'
import Home from './components/home/Home'
import Catalog from './components/catalog/Catalog'
import Navigation from './components/navigation/Navigation'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <h1 className='main-heading'>React Routing</h1>
      <Navigation/>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalog />}></Route>
      </Routes>
    </>
  )
}

export default App
