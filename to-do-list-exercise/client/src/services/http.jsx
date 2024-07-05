import { BASE_URL } from "../constants"

export const getAll = () => {
        return fetch(`${BASE_URL}/todos`)
            .then(res => res.json())
            .then(todos => todos)
            .catch(err => console.log(err))

}