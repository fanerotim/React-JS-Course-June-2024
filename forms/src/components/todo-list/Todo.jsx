import './Todo.css'

export const Todo = ({ todo, submitted }) => {

    const todos = [
        {
            text: 'Go to training',
            isCompleted: false
        },
        {
            text: 'Avoid eating a lot of chocolate',
            isCompleted: false
        },
        {
            text: 'Practice React forms',
            isCompleted: false
        }
    ]

    if (todo) {
        todos.push({
            text: todo,
            isCompleted: false
        })
    }

    

    return (
        <ul className='todo-wrapper'>
            {todos.map((todo, index) => {
                return <li className='todo-item' key={index}>{todo.text}</li>
            })}
        </ul>
    )
}