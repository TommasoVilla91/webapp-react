function MovieCard({movie}) {

    return (
        <div className="col">
            <div className="card">
                <div className="card-img">
                    <img src={`/${movie.image}`} alt={movie.title} />
                </div>
                <div className="card-text">
                    <h4>{movie.title}</h4>
                    <p>{movie.abstract}</p>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;