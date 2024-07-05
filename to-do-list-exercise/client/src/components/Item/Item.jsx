import './Item.css'
import { getAll } from '../../services/http'
import { useEffect, useState } from 'react'

const Item = () => {

    const [state, setState] = useState({ data: [], isLoading: true });

    useEffect(() => {
        getAll().then((todos) => {
            // setState((state) => ({ ...state, todos, isLoading: false}))
            const todosArr = Object.entries(todos);
            setState({ todosArr, isLoading: false })
        })
    }, [])

    if (!state.isLoading) {
        console.log(state)
    } else {
        console.log('still fetching data')
    }

    return (
        <>
            {!state.isLoading && state.todosArr.map((data) =>
                <tr key={data[1].id} className="todo is-completed">
                    <td>{data[1].text}</td>
                    <td>{data[1].isCompleted ? 'Complete' : 'Not yet'}</td>
                    <td className="todo-action">
                        <button className="btn todo-btn">Change status</button>
                    </td>
                </tr>
            )}
        </>
    )
}

export default Item;