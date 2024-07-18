import './Navigation.scss'
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <ul className='navigation'>
            <NavLink to='/' className='navigation__item' >Home</NavLink>
            <NavLink to='/catalog' className='navigation__item' >Collection</NavLink>
        </ul>
    )
}

export default Navigation;