import './App.css'
import Home from './components/home/Home'
import Catalog from './components/catalog/Catalog'
import Navigation from './components/navigation/Navigation'
import Details from './components/catalog/details/Details'
import Authors from './components/home/nested/Authors'
import Titles from './components/home/nested/Titles'
import { Routes, Route } from 'react-router-dom'
import AddForm from './components/add-form/AddForm'

function App() {

  return (
    <>
      <h1 className='main-heading'>React Routing</h1>
      <Navigation />

      <Routes>
        <Route path='/' element={<Home />}> 
          {/* index specifies the default route - the one that will show on first render of component */}
          <Route index element={<Authors/>}></Route>
          <Route path='authors' element={<Authors/>}></Route>
          <Route path='titles' element={<Titles/>}></Route>
        </Route>
        <Route path='/catalog/' element={<Catalog />}></Route>
        <Route path='/catalog/details/:bookId' element={<Details />}></Route>
        <Route path='/catalog/add-new' element={<AddForm/>}></Route>
      </Routes>
      
    </>
  )
}

export default App
