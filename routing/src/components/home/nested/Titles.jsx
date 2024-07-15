import books from "../../db/db";

const Titles = () => {
    return (
        <ul style={{textAlign: 'center'}}>
            <h1 style={{marginBottom: '1.5rem'}}>Our list of best book titles</h1>
            {books.map(book => {
                return <li style={{fontSize: '1.3rem'}} key={book.id}>{book.title}</li>
            })}
        </ul>
    )
}

export default Titles;