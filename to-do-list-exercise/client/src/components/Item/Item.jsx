import './Item.css'
import { getAll } from '../../services/http'
import { useEffect, useState } from 'react'
import ChangeStatusButton from '../ChangeStatusButton/ChangeStatusButton'

const Item = ({checkLoading, shouldRerender}) => {

    const [state, setState] = useState({ data: [], isLoading: true });

    function handleRerender() {
        shouldRerender(false)
    }

    useEffect(() => {
        getAll().then((todos) => {
            const todosArr = Object.entries(todos);
            setState({ todosArr, isLoading: false })
            checkLoading(state.isLoading)
        })
    }, [state.isLoading])

    return (
        <>  
            {!state.isLoading && state.todosArr.map((data) =>
                <tr key={data[1]._id} className={data[1].isCompleted === true ? 'todo is-completed' : 'todo'}>
                    <td>{data[1].text}</td>
                    <td>{data[1].isCompleted ? 'Complete' : 'Incomplete'}</td>
                    <td className="todo-action">
                        {/* <button className="btn todo-btn">Change status</button> */}
                        <ChangeStatusButton handleRerender={handleRerender} id={data[1]._id} isComplete={data[1].isCompleted}/>
                    </td>
                </tr>
            )}
        </>
    )
}

export default Item;