import React, { useState } from 'react'
import './Counter.css'

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div className='container'>
            <div className="counter">
                <button onClick={() => setCount(prev => (prev > 0 ? prev - 1 : 0))} disabled={count === 0}>-</button>
                <h1>{count}</h1>
                <button onClick={() => setCount(count + 1)}>+</button>
            </div>
            <div className='reset'>
                <button onClick={() => setCount(0)}>Reset</button>
            </div>
        </div>
    )
}

export default Counter
