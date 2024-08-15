import { useReducer } from "react"

export const COMMANDS = {
    INCREMENT_AGE: 'increment-age',
    DECREMENT_AGE: 'decrement-age'
}

const reducer = (state, action) => {
    switch (action.type) {
        case COMMANDS.INCREMENT_AGE: {
            return {
                age: state.age + 1,
            }  
        }
        case COMMANDS.DECREMENT_AGE: {
            return {
                age: state.age - 1
            }
        }
        default:
            return state;
    }
}

const useStateHandler = () => {
    const [state, dispatch] = useReducer(reducer, {age: 36});
    
    return {
        state,
        dispatch
    }
}

export default useStateHandler;