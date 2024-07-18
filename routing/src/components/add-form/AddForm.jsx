import './AddForm.scss'
import { useState } from "react";
import books from '../db/db';
import { useNavigate } from 'react-router-dom';

const AddForm = ({data, showForm}) => {
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

    function handleCancel() {
        showForm();
    }

    return (
        <div className='form-wrapper'>
            <form {...data ? {style : {zIndex: 200}} : ''} className='add-form' onSubmit={(e) => handleSubmit(e)}>
                <label>Title</label>
                <input className='add-form__input' name='title' type="text" value={formValues.title} onChange={(e) => handleChange(e)} />
                <label>Author</label>
                <input className='add-form__input' name='author' type="text" value={formValues.author} onChange={(e) => handleChange(e)} />
                <label>Image Url</label>
                <input className='add-form__input' name='imgUrl' value={formValues.imgUrl} onChange={(e) =>  handleChange(e) } />
                <label>Book description</label>
                <textarea className='add-form__textArea' name="description" value={formValues.description} onChange={(e) => handleChange(e)}>Book Description</textarea>
                <label>Author Info</label>
                <textarea className='add-form__textArea' name="authorInfo" id="" value={formValues.authorInfo} onChange={(e) => handleChange(e)}>Author Info</textarea>
                <label>Author Life</label>
                <textarea className='add-form__textArea' name="authorLife" id="" value={formValues.authorLife} onChange={(e) => handleChange(e)}>Author life</textarea>

                <div className='buttons-container'>
                    <button className='btn'>Submit</button>
                    <button onClick={handleCancel} className='btn'>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default AddForm;