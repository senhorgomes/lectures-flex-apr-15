import useCounter from '../hooks/useCounter';
const Counter = () => {

    const {count, countUp, reset} = useCounter();
    // Will line 6 break my app?
    // const {count2, countUp2, reset2} = useCounter();

    return (
        <div>
            Current count: {count}
            <button onClick={() => countUp()}>+1</button>
            <button onClick={() => reset()}>Reset</button>
        </div>
    )

}

export default Counter;