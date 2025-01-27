import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReviewCard from "../components/ReviewCard";

function MovieDetailsPage() {

    // grazie a router-dom uso useParams per prelevare solamente l'id dei singoli film
    const {id} = useParams();
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    // stato per il singolo libro
    const [movie, setMovie] = useState(null);

    // useEffect per far comparire all'avvio della pagina le recensioni
    useEffect(() => {
        axios.get(`${backendUrl}/movies/${id}`).then((resp) => {
            setMovie(resp.data.data);
        });
    }, []);

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
