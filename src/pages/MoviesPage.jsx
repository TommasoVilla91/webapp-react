import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import axios from "axios";

function MoviesPage() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/movies").then((resp) => {
            setMovies(resp.data.data);            
        });
    }, []);

    return (
        <>
            <section>
                <h1>In quest'area troverai tutti i film disponibili</h1>
                <h3>Dacci un'occhiata!</h3>
            </section>
            <section>
                <h2>Film a tua disposizione</h2>
                <div className="container">
                    <div className="row">
                        {movies.map((curMovie) => ( 
                            <MovieCard 
                                key={curMovie.id}
                                movie={curMovie}
                            />
                        ))}                       
                    </div>
                </div>
            </section>
        </>
    );
};

export default MoviesPage;