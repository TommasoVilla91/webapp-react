function MovieCard({movie}) {

    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    return (
        <div className="col">
            <div className="card">
                <div className="card-img">
                    <img src={`${backendUrl}/${movie.image}`} alt={movie.title} />
                </div>
                <div className="card-text">
                    <h4>{movie.title} ({movie.release_year})</h4>
                    <h5>{movie.director}</h5>
                    <p>{movie.abstract}</p>
                    <div>
                        <button className="btn info-btn">Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;