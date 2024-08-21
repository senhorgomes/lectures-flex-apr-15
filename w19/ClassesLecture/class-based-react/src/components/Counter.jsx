import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount((prev) => (prev + 1))
    }

    return ( 
        <div>
            <h2>Amount of times this button has been clicked {count}</h2>
            <button onClick={handleClick}>Click Me!</button>
        </div>
     );
}

export default Counter;