import { useEffect, useState } from 'react'
import './Timer.css'

export const Timer = () => {

    const [time, setTime] = useState(0);

    setInterval(() => {
        setTime(time + 1)
    }, 2000)

    //practicing useEffect 
    useEffect(() => {
        if (time > 5) {
            console.log('time is more than 5')
        } else {
            return;
        }
    }, [time])

    return (
        <section>
            <h1 className='heading'>Timer</h1>
            <h2>Counter increases on every two seconds</h2>
            <h3>{time}</h3>
        </section>
    )
}