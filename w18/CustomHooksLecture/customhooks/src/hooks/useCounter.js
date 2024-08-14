import { useState } from "react";
// Any counter can increment by any number but also have a different initial count
const useCounter = (intialCount=0, incrementBy=1) => {

    const [count, setCount] = useState(intialCount);
    // Button that increments it up by 1
    const countUp = () => {
        setCount((prev) => {
            return prev + incrementBy;
        });
    }
    
    // Reset button
    const reset = () => {
        setCount(intialCount);
    }

    return {
        count,
        countUp,
        reset
    };
}

export default useCounter;