import './Section.css'
import Button from '../Button/Button';
import TableWrapper from '../TableWrapper/TableWrapper';

const Section = () => {
    return (
        <section className='todo-list-container'>
            <h1>Todo List</h1>
            <Button/>
            <TableWrapper/>
        </section>
    )
}

export default Section;