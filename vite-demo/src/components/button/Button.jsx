import './Button.scss'
import { useState } from 'react'



const Button = (props) => {

    let [count, setCount] = useState(0);

    const add = () => {
        count = setCount(count + 1);
    }

    const subtract = () => {
        count = setCount(count - 1);
    }

    return (
        <>
        <button className='btn' onClick={add}>+</button>
        <button className='btn' onClick={subtract}>-</button>
        <h3>You clicked me {count} {count === 1 || count === -1 ? 'time' : 'times'}!</h3>
        </>
    )  
} 





export default Button;