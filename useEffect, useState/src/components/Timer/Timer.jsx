import { useEffect, useState } from 'react'
import './Timer.css'
import Name from './Name'

export const Timer = () => {

    // const [time, setTime] = useState(0);

    // setInterval(() => {
    //     setTime(time + 1)
    // }, 2000)

    //practicing useEffect 

    // useEffect(() => {
    //     if (time > 5) {
    //         setTime(0)
    //     } else {
    //         return;
    //     }
    // }, [time])

    const test = 3;

    useEffect(() => {
    }, [test])

    return (
        // <section>
        //     <h1 className='heading'>Timer</h1>
        //     <h2>Counter increases on every two seconds</h2>
        //     <h3>{time}</h3>
        // </section>

        <section>
            <h1>The name of our hero is: <Name name={'Pesho'}/></h1>
            <h2>I have a variable {test}</h2>
        </section>
    )
}