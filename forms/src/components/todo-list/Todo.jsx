import './Todo.css'
import { useState } from 'react'

export const Todo = () => {

    const [todos, setTodos] = useState([
        {
            text: 'Go to training',
            isCompleted: false,
            index: 0,
            'text-decoration': false
        },
        {
            text: 'Avoid eating a lot of chocolate',
            isCompleted: false,
            index: 1,
        },
        {
            text: 'Practice React forms',
            isCompleted: false,
            index: 2,
        }
    ])

    const [newTodo, setNewTodo] = useState('')

    function handleDelete(index) {
        const newTodos = [...todos]
        newTodos.splice(index, 1)
        setTodos(newTodos);
    }

    function handleComplete(index) {
        const newTodos = [...todos];
        newTodos[index].isCompleted = true;
        setTodos(newTodos)
    }

    function handleSubmit(e) {

        e.preventDefault()
        
        todos.push({
            text: newTodo,
            isCompleted: false,
            index: todos.length,
        })

        const newTodos = [...todos];
        setTodos(newTodos);
        setNewTodo('')
    }

    return (
        <>
            <ul className='todo-wrapper'>

                {todos.map((todo) => (
                    <div key={todo.index} className='todo-item-wrapper'>
                        <li style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }} className='todo-item' key={todo.index}>{todo.text}</li>

                        <div className='buttons-wrapper'>
                            <button onClick={() => {
                                handleComplete(todo.index)
                            }} className='complete-btn btn'>Complete</button>
                            <button onClick={() => {
                                handleDelete(todo.index)
                            }} index={todo.index} className='delete-btn btn'>Delete</button>
                        </div>
                    </div>
                ))}
            </ul>

            <form className='todo-form' onSubmit={(e) => handleSubmit(e)}>
                <label className='todo-label'>Add Todo</label>
                <input className='todo-input' type="text" value={newTodo} onChange={(e) => { setNewTodo(e.target.value) }} />
                <button className='add-todo-btn'>Add Todo</button>
            </form>
        </>
    )
}