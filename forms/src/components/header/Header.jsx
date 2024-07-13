import { Link } from "react-router-dom"
import './Header.css'

export const Header = () => {

    return (
        <ul className="navigation">
            <Link className='navigation-item' to='/' >Home</Link>
            <Link className='navigation-item' to='/todo-list'>Todo List</Link>
        </ul>
    )
}

