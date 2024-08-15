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
            <p>Hello! My name is: {state.name}, and I am {state.age} years old.</p>

            <input 
            type="text" 
            value={state.name}
            onChange={(e) => dispatch({type: COMMANDS.CHANGE_NAME, payload: e.target.value})}/>
        </div>
    )
}

export default ReducerPlayground;