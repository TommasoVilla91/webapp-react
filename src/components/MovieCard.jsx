import { Link } from "react-router-dom";

function MovieCard({movie}) {

    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    return (
        <div className="col">
            <div className="card">
                <div className="card-img">
                    <img src={`${backendUrl}/${movie.image}`} alt={movie.title} />
                </div>
                <div className="card-text">
                    <h4>{movie.title}</h4>
                    <div>
                        <Link className="btn info-btn" to={`/movies/${movie.slug}`}>Info</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;