import './Header.css'

const Header = () => {
    return (
    <header class="navigation-header">
        <span class="navigation-logo">
          <img src="../../public/images/todo-icon.png" alt="todo-logo"/>
        </span>
        <span class="spacer"></span>
        <span class="navigation-description">Todo List</span>
    </header> 
    )
}

export default Header;