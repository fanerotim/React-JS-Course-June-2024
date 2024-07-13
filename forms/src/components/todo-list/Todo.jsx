import './Todo.css'
import { useState } from 'react'

export const Todo = ({ todo }) => {

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

    if (todo) {
        todos.push({
            text: todo,
            isCompleted: false,
            index: todos.length,
        })
    }

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

    return (
        <ul className='todo-wrapper'>

            {todos.map((todo) => (
                <div key={todo.index} className='todo-item-wrapper'>
                    <li style={{textDecoration: todo.isCompleted ? 'line-through' : ''}} className='todo-item' key={todo.index}>{todo.text}</li>

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
    )
}