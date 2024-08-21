import { Component } from "react";
class ClassCounter extends Component {
    constructor(props) {
        super(props);
        // const [count, setCount] = useState(0);
        this.state = { count: 0 }
        // this.handleClick = this.handleClick.bind(this)
    }

    // const handleClick = () => {
    //     setCount((prev) => (prev + 1))
    // }
    handleClick = () => {
        // The reason why this breaks, handleClick doesn't understand what THIS is
        this.setState({count: this.state.count + 1})
    }
    // Something to run once a component has been mounted
    componentDidMount(){
        console.log("Inside ClassCounter")
    }
    // Run something once the component has been updated
    componentDidUpdate(){
        console.log("This component updated!")
    }
    // Run something once the component has been removed from the DOM
    componentWillUnmount(){
        console.log("I have been deleted!")
    }
    render() {
        return (
            <div>
                <h2>Amount of times this button has been clicked {this.state.count}</h2>
                <button onClick={this.handleClick}>Click Me!</button>
            </div>
        );
    }
}

export default ClassCounter;