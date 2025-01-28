import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReviewCard from "../components/ReviewCard";
import ReviewForm from "../components/ReviewForm";

function MovieDetailsPage() {

    // grazie a router-dom uso useParams per prelevare solamente l'id dei singoli film
    const {slug} = useParams();
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    // stato per il singolo libro
    const [movie, setMovie] = useState(null);

    // funzione per far comparire i dettagli del singolo libro (sulla base dello slug)
    const printMovie = () => {
        axios.get(`${backendUrl}/movies/${slug}`).then((resp) => {
            setMovie(resp.data.data);
        });
    };

    // useEffect per far comparire i dettagli all'avvio della pagina
    useEffect(() => {
        printMovie()
    }, []);

    // funzione con chiamata axios per far stampare in pagina i dati aggiornati delle recensioni, quindi aggiungendo quella nuova
    const submitReview = (formData) => {
        axios.post(`${backendUrl}/movies/${movie.id}/reviews`, formData).then((resp) => {
            console.log(resp);
            
            printMovie();
        });
    };

    // funzione per creare stelle in base al voto
    function stars() {

        const starsNum = 5;

        let printStars = [];
        for (let i = 0; i < starsNum; i++) {
            if (i < movie.vote_avg) {
                printStars.push(<FontAwesomeIcon className="star" key={i} icon="fa-solid fa-star" />);
            } else {
                printStars.push(<FontAwesomeIcon className="star" key={i} icon="fa-regular fa-star" />);
            };
        };
        return printStars;
    };

    return (
        <>
            {movie && (
                <>
                    <div className="container">
                        <section>

                            {/* dettagli principali della card */}
                            <div className="details-card">
                                <div className="row">
                                    <img src={`${backendUrl}/${movie.image}`} alt={movie.title} />
                                    <div className="details-infos">
                                        <h1>{movie.title} ({movie.release_year})</h1>
                                        <h3>{movie.director}</h3>
                                        <p>{movie.genre}</p>
                                        <span>{stars()}</span>
                                        <p>{movie.abstract}</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section>

                            {/* form per recensioni */}
                            <ReviewForm 
                                onSubmitFunction={submitReview}
                            />
                            <div className="review-list">

                                {/* recensioni */}
                                {movie.reviews.map((curReview) => (
                                    <ReviewCard 
                                        key={curReview.id}
                                        review={curReview}
                                    />
                                ))}
                            </div>
                        </section>
                    </div>
                </>
            )}
        </>
    );
};

export default MovieDetailsPage;
