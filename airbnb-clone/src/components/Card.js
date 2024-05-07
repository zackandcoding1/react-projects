export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div>
            <div className="card--item">
                {badgeText && <div className="card--badge">{badgeText}</div>}
                <img className="card--image" src={props.coverImg} alt="activity"/>
                <span className="card--spacing"></span>
                <img className="card--star" src="./images/star.png" alt="star icon"/>
                <span> {props.stats.rating} </span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location} </span>
                <p>{props.title} </p>
                <p><span className="bold">From ${props.price} </span> / person</p>
            </div>
        </div>
    );
}