import './Form.css'
import { Todo } from '../todo-list/Todo';

import { useState } from "react";

const Form = () => {

    const [formValues, setFormValues] = useState({
        email: '',
        message: '',
        author: '',
    });

    const handleChange = (e) => {

        setFormValues((oldValues) => (
            {
                ...oldValues,
                [e.target.name]: e.target.value
            }
        ))
    }

    function submitHandler(e) {
        e.preventDefault();

        // This is test form that does nothing, just logs the user input

        if (!formValues.email || !formValues.message || !formValues.author) {
            return;
        }

        console.log(formValues);

        setFormValues({
            email: '',
            message: '',
            author: ''
        })
    }

    return (
        <>
            <form className='practice-form' action="" onSubmit={submitHandler}>
                <div className='input-wrapper'>
                    <label
                        className='form-label'
                        htmlFor="email">Email</label>
                    <input
                        name='email'
                        className='form-input'
                        type="email"
                        value={formValues.email}
                        onChange={handleChange}
                    />
                </div>

                <div className='input-wrapper'>
                    <label
                        className='form-label'
                        htmlFor="email">Message</label>
                    <textarea
                        className='form-input'
                        name='message'
                        value={formValues.message}
                        onChange={handleChange}>
                    </textarea>
                </div>

                <div className='input-wrapper'>
                    <label className='form-label' htmlFor="author">Author</label>
                    <select
                        className='form-input'
                        name="author"
                        onChange={handleChange}
                        value={formValues.author}
                    >
                        <option></option>
                        <option>Me</option>
                        <option>John Steinbeck</option>
                    </select>
                </div>

                <input type="Submit" />

            </form>
        </>
    )
}

export default Form;