import './ReducerPlayground.css'
import useStateHandler from '../hooks/reducerHook';
import { COMMANDS } from '../hooks/reducerHook';

const ReducerPlayground = () => {

    const { state, dispatch } = useStateHandler();

    return (
        <div className="container">
            <h1>Increase or Decrease your age</h1>
            <div className='buttons__container'>
                <button className='btn' onClick={() => {dispatch({type: COMMANDS.INCREMENT_AGE})}}>+</button>
                <button className='btn' onClick={() => {dispatch({type: COMMANDS.DECREMENT_AGE})}}>-</button>
            </div>
            <p>Hello Pesho, your age is {state.age}</p>
        </div>
    )
}

export default ReducerPlayground;