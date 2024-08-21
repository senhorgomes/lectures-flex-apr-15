import { Component } from "react";

class ClassFetch extends Component {
    constructor() {
        super();
        this.state = {
            films: []
        }
    }
    componentDidMount(){
        console.log("Inside ClassFetch")
        setTimeout(()=>{
            fetch('https://swapi-37eac-default-rtdb.firebaseio.com/movies.json')
            .then((response)=> response.json())
            // Store it in state
            .then((data)=> this.setState({films:data}))

        }, 3000)
    }
    // Create the class based component version of useEffect
    render() {
        return (
            <section>
                {this.state.films.map((movie) =>
                    <li key={movie.id}>{movie.alternate_title}</li>
                )}
            </section>
        );
    }
}

export default ClassFetch;