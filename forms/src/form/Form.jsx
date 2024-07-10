import './Form.css'

import { useState } from "react";

const Form = () => {

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [author, setAuthor] = useState('');

    function submitHandler(e) {
        e.preventDefault();
        console.log(email, message, author)
        console.log(e.target.value)
    }

    return (
        <form className='practice-form' action="" onSubmit={submitHandler}>
            <div className='input-wrapper'>
                <label className='form-label' htmlFor="email">Email</label>
                <input
                    className='form-input'
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className='input-wrapper'>
                <label className='form-label' htmlFor="email">Message</label>
                <textarea
                    className='form-input'
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)}>
                </textarea>
            </div>

            <div className='input-wrapper'>
                <label className='form-label' htmlFor="author">Author</label>
                <select 
                    className='form-input'
                    name="name"
                    onChange={(e) => setAuthor(e.target.value)}
                    value={author}
                    >
                    <option></option>
                    <option>Me</option>
                    <option>John Steinbeck</option>
                </select>
            </div>
            
            <input type="Submit" />

        </form>
    )
}

export default Form;