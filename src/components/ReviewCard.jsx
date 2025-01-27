import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ReviewCard({review}) {

    function stars() {
    
            const starsNum = 5;
    
            let printStars = [];
            for (let i = 0; i < starsNum; i++) {
                if (i < review.vote) {
                    printStars.push(<FontAwesomeIcon className="star" key={i} icon="fa-solid fa-star" />);
                } else {
                    printStars.push(<FontAwesomeIcon className="star" key={i} icon="fa-regular fa-star" />);
                };
            };
            return printStars;
        };

    return (
        <div className="review-card">
            <div className="row card-body">
                <div className="user">
                    <h3>{review.name}</h3>
                    <span>{stars()}</span>
                </div>
                <div className="review-text">
                    <p>{review.text}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;