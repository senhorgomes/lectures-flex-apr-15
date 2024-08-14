import useToggle from '../hooks/useToggle';
const Mood = () => {

    // const [toggle, toggleState] = useToggle();
    const [mood, handleClick] = useToggle();

    return (
        <div>
            {mood ? '😁' : '😭'}
            <button onClick={()=> handleClick()}>Change Mood</button>
        </div>
    );

}

export default Mood;