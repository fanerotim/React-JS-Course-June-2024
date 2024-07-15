import books from "../../db/db";

const Authors = () => {
    
    return (
        <ul style={{textAlign: 'center', margin: '2rem 0'}}>
            <h1 style={{marginBottom: '1.5rem'}}>Our list of best book authors</h1>
            {books.map(book => {
                return <li style={{fontSize: '1.3rem'}} key={book.id}>{book.author}</li>
            })}
        </ul>
    )
}

export default Authors;