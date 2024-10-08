import './Header.css'

const Header = () => {
    return (
    <header className="navigation-header">
        <span className="navigation-logo">
          <img src="../../public/images/todo-icon.png" alt="todo-logo"/>
        </span>
        <span className="spacer"></span>
        <span className="navigation-description">Todo List</span>
    </header> 
    )
}

export default Header;