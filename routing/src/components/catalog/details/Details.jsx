import './Details.scss';
import { useParams } from "react-router-dom";
import books from "../../db/db";

const Details = () => {
    const { bookId } = useParams();
    
    // this simulates API call
    const curBook = books.find(book => book.id == bookId)

    return (
        <section className='details-wrapper'>
            <div className='book-info'> 
                <h1 className='book-info__title'>{curBook.title}</h1>
                <h3 className='book-info__author'>{curBook.author}</h3>
            </div>
            
            <h1 className='about-author'><span className='about-author__span'>Author Information</span>{curBook.details.authorLife}</h1>
            <h1 className='author-life'><span className='author-life__span'>Author Life</span>{curBook.details.authorLife}</h1>
            <h1 className='description'><span className='description__span'>Description</span> {curBook.details.description}</h1>
        </section>
    )
}

export default Details;