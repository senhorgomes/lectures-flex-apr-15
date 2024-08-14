import { useState }  from "react"

const useToggle = (defaultValue = false) => {
    const [toggle, setToggle] = useState(defaultValue);

    const toggleState = () => {
        setToggle((prev)=>{
            return !prev;
        })
    }
    // If we are exporting an array, we can rename the variable names
    return [toggle, toggleState];
    // If we are exporting an object, we can't rename the variable names
    // return {toggle, toggleState};

}

export default useToggle;