import './AddForm.scss'
import { useState } from "react";
import books from '../db/db';
import { useNavigate } from 'react-router-dom';

const AddForm = () => {
    const navigate = useNavigate();

    const [formValues, setFormValues] = useState({
        title: '',
        author: '',
        imgUrl: '',
        description: '',
        authorInfo: '',
        authorLife: ''
    });

    function handleChange(e) {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        })
    }

    function handleSubmit(e) {
        e.preventDefault();

        const newBook = {
            title: formValues.title,
            author: formValues.author,
            imgUrl: formValues.imgUrl,
            id: books.length + 1,
            details: {
                description: formValues.description,
                authorInfo: formValues.authorInfo,
                authorLife: formValues.authorLife
            }
        };
        
        books.push(newBook);
        navigate('/catalog')
    }

    return (
        <form className='add-form' onSubmit={(e) => handleSubmit(e)}>
            <label>Title</label>
            <input name='title' type="text" value={formValues.title} onChange={(e) => handleChange(e)} />
            <label>Author</label>
            <input name='author' type="text" value={formValues.author} onChange={(e) => handleChange(e)} />
            <label>Image Url</label>
            <input name='imgUrl' value={formValues.imgUrl} onChange={(e) => { handleChange(e) }} />
            <label>Book description</label>
            <textarea name="description" value={formValues.description} onChange={(e) => handleChange(e)}>Book Description</textarea>
            <label>Author Info</label>
            <textarea name="authorInfo" id="" value={formValues.authorInfo} onChange={(e) => handleChange(e)}>Author Info</textarea>
            <label>Author Life</label>
            <textarea name="authorLife" id="" value={formValues.authorLife} onChange={(e) => handleChange(e)}>Author life</textarea>

            <div className='buttons-container'>
                <button className='btn'>Submit</button>
                <button className='btn'>Cancel</button>
            </div>
        </form>
    )
}

export default AddForm;