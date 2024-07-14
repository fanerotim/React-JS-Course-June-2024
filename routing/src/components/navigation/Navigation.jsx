import './Navigation.scss'
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <ul className='navigation'>
            <Link to='/' className='navigation__item' >Home</Link>
            <Link to='/catalog' className='navigation__item' >Collection</Link>
        </ul>
    )
}

export default Navigation;