import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    // Button that increments it up by 1
    const countUp = () => {
        setCount((prev) => {
            return prev + 1;
        });
    }
    
    // Reset button
    const reset = () => {
        setCount(0);
    }
    return (
        <div>
            Current count: {count}
            <button onClick={() => countUp()}>+1</button>
            <button onClick={() => reset()}>Reset</button>
        </div>
    )

}

export default Counter;