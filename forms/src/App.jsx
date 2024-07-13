import './App.css'
import Form from './components/form/Form'
import { Todo } from './components/todo-list/Todo'
import { Header } from './components/header/Header'
import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
      <h1 className='heading'>Practice React Forms</h1>
      <h3 className='subheading'>By building a Todo list</h3>
      <Header />
      
    <Routes>
      <Route path="/todo-list" element={<Todo />}></Route>
      <Route path="/" element={<Form/>}></Route>
    </Routes>
    </>
  )
}

export default App
