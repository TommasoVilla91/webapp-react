import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import axios from "axios";

function MoviesPage() {

    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");
    const [hasSearched, setHasSearched] = useState(false);
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const printMovies = () => {

        const params = {};
        if (search.length > 0) {
            params.search = search
        }

        axios.get(`${backendUrl}/movies`, {params}).then((resp) => {
            setMovies(resp.data.data);
            setHasSearched(true);
        });
    };

    useEffect(() => {
        // printMovies()
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
                    <input 
                        className="search-bar" 
                        value={search} 
                        onChange={(event) => setSearch(event.target.value)} 
                        type="search" 
                        aria-label="Cerca titolo per parola chiave"
                        placeholder="Cerca il titolo del film che stai cercando"
                    />
                    <button onClick={printMovies} className="btn">Cerca</button>
                </div>
                <div className="container">
                    {!hasSearched ? (
                        <div className="empty">
                            <p>Ancora nessun film selezionato</p>
                        </div>
                    ) : movies.length > 0 ? (
                        <div className="row">
                            {movies.map((curMovie) => (
                                <MovieCard
                                    key={curMovie.id}
                                    movie={curMovie}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="not-found">
                            <h4>Non c'è nessun film che corrisponde alla tua richerca...</h4>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default MoviesPage;