import './Catalog.scss'
import books from '../db/db';
import { Link } from 'react-router-dom';
import AddForm from '../add-form/AddForm';
import { useState } from 'react';

const Catalog = () => {

    const [show, setShow] = useState(false);

    // this function will be used to show and hide form modal
    // have to work on css to beautify the form
    function showForm() {
        setShow(!show);
    }

    return (
        <>
            <h1 className='catalog-heading'>Go through our list of classic book titles</h1>
            {/* <Link to='/catalog/add-new' className='add-btn'>Add Book</Link> */}

            <button onClick={showForm} className='add-btn'>Add Book</button>
            {show ? <AddForm data={true} showForm={showForm}/> : ''}

            <section className="catalog-wrapper">

                {books.map((book) => (
                    <section key={book.id} className='book-wrapper'>
                        <div className='img-wrapper'>
                            <img className='book-img' src={book.imgUrl} />
                        </div>
                        <div className='text-wrapper'>
                            <p className='book-author'>Author: {book.author}</p>
                            <p className='book-title'>Book Title: {book.title}</p>
                            <Link to={`/catalog/details/${book.id}`} className='read-more-btn'>Read more</Link>
                        </div>
                    </section>
                )
                )}

            </section>


        </>
    )
}

export default Catalog;