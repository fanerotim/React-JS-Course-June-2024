import { useState, useEffect } from 'react'
import './Home.css'

const Home = () => {

    const [inputValue, setInputValue] = useState('');
    const [name, setName] = useState(false);

    useEffect(() => {
        console.log('Component re-rendered')
    }, [inputValue])

    function handleShowNameClick() {
        setInputValue(inputValue)
        setName(!name)
    }

    return (
        <section>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <br />
            <button onClick={handleShowNameClick} className='btn'>{name ? 'Hide name' : 'Show name'}</button>
            {name && <h3>Your name is {inputValue}</h3>}
        </section>
    )
}

export default Home;