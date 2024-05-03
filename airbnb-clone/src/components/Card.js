function Card(props) {
    return (
        <div>
            <div className="card--item">
                <img className="card--image" src={props.img} alt="activity"/>
                <span className="card--spacing"></span>
                <img className="card--star" src="./images/star.png" alt="star icon"/>
                <span> {props.rating} </span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location} </span>
                <p>{props.title} </p>
                <p><span className="bold">From ${props.price} </span> / person</p>
            </div>
        </div>
    );
}

export default Card;