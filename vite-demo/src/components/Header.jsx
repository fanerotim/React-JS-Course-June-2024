import './Header.scss'

const Header = () => {
    return (
        <nav className='nav__wrapper'>
            <ul className='nav__container'>
                <li className='nav__container__item'>Home</li>
                <li className='nav__container__item'>Gallery</li>
                <li className='nav__container__item'>About</li>
            </ul>
        </nav>
    )
}

export default Header;