import './Catalog.scss'
import books from '../db/db';

const Catalog = () => {

    return (
        <>
            <h1 className='catalog-heading'>Go through our list of classic book titles</h1>
            
            <section className="catalog-wrapper">

                {books.map((book) => (
                        <section key={book.id} className='book-wrapper'>
                            <div className='img-wrapper'>
                                <img className='book-img' src={book.imgUrl} />
                            </div>
                            <div className='text-wrapper'>
                                <p className='book-author'>Author: {book.author}</p>
                                <p className='book-title'>Book Title: {book.title}</p>
                                <button className='read-more-btn'>Read more</button>
                            </div>
                        </section>
                        )
                )}

            </section>
        </>
    )
}

export default Catalog;