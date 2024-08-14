import useToggle from "../hooks/useToggle";
import "./Hello.css";
const Hello = () => {

    const [darkMode, toggleDarkMode] = useToggle();

    return (
        // Some conditional CSS
        // If darkMode is true
        // className for the h1 element will be hello-dark-mode
        <h1 className={darkMode ? "hello-dark-mode" : ""}>
            Hello World!
            <button onClick={toggleDarkMode}>
                Toggle Dark Mode
            </button>
        </h1>
    );
}

export default Hello;