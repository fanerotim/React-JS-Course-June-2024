import './ChangeStatusButton.css';
import { BASE_URL } from '../../constants';

const ChangeStatusButton = ({id, isComplete, handleRerender}) => {

    function handleChange() {
        
        fetch(`${BASE_URL}/todos/${id}`, {
            method: 'PUT',
            body: JSON.stringify({isCompleted: !isComplete}),
            headers: {'Content-Type': 'Application/json'}  
        })
            .then(res => res.json())
            .then(data => handleRerender(isComplete))
            .catch(err => console.log(err))
    }

    return (
        <button onClick={handleChange} className="btn todo-btn">Change status</button>
    )
}

export default ChangeStatusButton;