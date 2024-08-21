// useEffect -> This will use fetch to grab information from an api, and save it in state.
import { useEffect, useState } from "react";
function Fetch() {
    const [movieData, setMovieData] = useState([]);
    // Need information from an api
    // If we need a function to run once when the component is mounted, useEffect will help us achieve this
    useEffect(()=> {
        // https://swapi-37eac-default-rtdb.firebaseio.com/movies.json
        fetch('https://swapi-37eac-default-rtdb.firebaseio.com/movies.json')
        .then((response)=> response.json())
        // Store it in state
        .then((data)=> setMovieData(data))
        // Only run this once and no more than that
    }, [])
    // Then display it on our page

    return ( 
        <section>
            {movieData.map((movie)=> 
                <li key={movie.id}>{movie.alternate_title}</li>
            )}
        </section>
     );
}

export default Fetch;