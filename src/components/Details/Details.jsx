import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


function Details() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const genres = useSelector(store => store.genres);
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'FETCH_GENRES' });
    }, []);

    return (
        <main>
            <h1>Details Page</h1>
            <button onClick={()=> history.push("/")}>Back to Movie List</button>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title} />
                            
                        </div>
                    );
                })}
                <br></br>
                {genres.map(genre => {
                    return (
                        <div key={genre.id} >
                            <h3>{genre.name}</h3>
                               
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default Details;