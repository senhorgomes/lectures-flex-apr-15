import { useState } from "react";

const Mood = () => {
    const [mood, setMood] = useState(false)

    const handleClick = () => {
        // if(mood === false) {
        //     setMood(true)
        // } else {
        //     setMood(false)
        // }
        setMood((prev)=> {
            // It is changing prev to be the opposite of what it currently is.
            return !prev;
        })
    }

    return (
        <div>
            {mood ? '😁' : '😭'}
            <button onClick={()=> handleClick()}>Change Mood</button>
        </div>
    );

}

export default Mood;