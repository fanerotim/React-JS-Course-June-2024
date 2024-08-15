import { useReducer } from "react"

export const COMMANDS = {
    INCREMENT_AGE: 'increment-age',
    DECREMENT_AGE: 'decrement-age',
    CHANGE_NAME: 'change-name'
}

const reducer = (state, action) => {
    switch (action.type) {
        case COMMANDS.INCREMENT_AGE: {
            return {
                ...state,
                age: state.age + 1,
            }  
        }
        case COMMANDS.DECREMENT_AGE: {
            return {
                ...state,
                age: state.age - 1
            }
        }
        case COMMANDS.CHANGE_NAME: {
            console.log('change-name')
            return {
                ...state,
                name: action.payload
            }
        }
        default:
            return state;
    }
}

const useStateHandler = () => {
    const [state, dispatch] = useReducer(reducer, {age: 36, name: 'Petar'});
    
    return {
        state,
        dispatch
    }
}

export default useStateHandler;