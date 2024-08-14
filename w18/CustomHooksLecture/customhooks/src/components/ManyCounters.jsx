import useCounter from "../hooks/useCounter";
const ManyCounters = () => {

    // const {count, countUp, reset} = useCounter();
    // If we need to call multiple of the same values from an object thats being returned from a custom hook
    // We can reassign the name of the keys, however the values stay the same
    const {count: count1, countUp: countUp1, reset: reset1} = useCounter();
    // {count1: count}
    const {count: count2, countUp: countUp2, reset: reset2} = useCounter(2, 2);
    const {count: count3, countUp: countUp3, reset: reset3} = useCounter(3, 3);

    return (
        <div>
            <h2>Many counters:</h2>
            {/* Count 1 displayed here */}
            <h3>{count1}</h3>
            <button onClick={()=> countUp1()}>+1</button>
            <button onClick={()=> reset1()}>Reset</button>
            <br />
            {/* Count 2 displayed here */}
            <h3>{count2}</h3>
            <button onClick={()=> countUp2()}>+2</button>
            <button onClick={()=> reset2()}>Reset</button>
            <br />
            {/* Count 3 displayed here */}
            <h3>{count3}</h3>
            <button onClick={()=> countUp3()}>+3</button>
            <button onClick={()=> reset3()}>Reset</button>
        </div>
    )
}

export default ManyCounters;