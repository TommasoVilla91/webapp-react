import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import axios from "axios";

function MoviesPage() {

    const [movies, setMovies] = useState([]);
    const [title, setTitle] = useState("");
    const [genre, setGenre] = useState("");
    const [year, setYear] = useState("");
    const [hasSearched, setHasSearched] = useState(false);
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const printMovies = () => {

        // creo oggetto di supporto per raccoglere i parametri
        const params = {};

        // stampare in base al titolo
        if (title.length > 0) {
            params.title = title
        }
        // stampare in base al genere
        if (genre) {
            params.genre = genre
        }
        // stampare in base all'anno
        if (year) {
            params.year = year
        }
        // inserisco l'oggetto params nei parametri della chiamata 
        axios.get(`${backendUrl}/movies`, {params}).then((resp) => {
            setMovies(resp.data.data);
            setHasSearched(true);
        });
    };

    useEffect(() => {
        printMovies()
    }, []);

    function handleEnterKey(event) {
        if (event.key === "Enter") {
            printMovies();            
            setTitle("");
            setGenre("");
            setYear("");
        };
    };

    return (
        <div className="movie-page">
            <section className="container movie-hero">
                <h1>In quest'area troverai tutti i film disponibili</h1>
                <h3>Dacci un'occhiata!</h3>
            </section>
            <section className="movie-area">
                <h2>Film a tua disposizione</h2>
                <div className="form">
                    <label htmlFor="">Titolo</label>
                    <input 
                        className="search-bar title-bar" 
                        value={title} 
                        onChange={(event) => setTitle(event.target.value)} 
                        type="search" 
                        aria-label="Cerca titolo"
                        placeholder="Cerca per il titolo del film"
                        onKeyUp={handleEnterKey}
                    />
                    <label htmlFor="">Genere</label>
                    <input 
                        className="search-bar genre-bar" 
                        value={genre} 
                        onChange={(event) => setGenre(event.target.value)} 
                        type="search" 
                        aria-label="Cerca genere"
                        placeholder="Cerca per il genere del film"
                        onKeyUp={handleEnterKey}
                    />
                    <label htmlFor="">Anno di pubblicazione</label>
                    <input 
                        className="search-bar year-bar" 
                        value={year} 
                        onChange={(event) => setYear(event.target.value)} 
                        type="search" 
                        aria-label="Cerca anno di pubblicazione"
                        placeholder="Cerca per per l'anno del film"
                        onKeyUp={handleEnterKey}
                    />
                    <div>
                        <button onClick={printMovies} className="btn search-bnt">Cerca</button>
                    </div>
                </div>
                <div className="movie-list">
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
        </div>
    );
};

export default MoviesPage;