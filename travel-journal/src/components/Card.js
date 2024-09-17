export default function Card(props) {
    return (
        <div>
            <div className="card--item">
                <div className="card--img-box">
                    <img className="place--image" src={props.imageUrl} alt="place" />
                </div>

                <div className="card--infos">
                    <img className="location--pointer" src="./images/location-pointer.png" alt="location pointer"/>
                    <span className="card--title">{props.title} </span>
                    <a href={props.googleMapsUrl} target="_blank">View on Google Maps</a>
                    <span className="card--location">{props.location} </span>
                    <span className="card--description">{props.description}</span>
                </div>
            </div>
        </div>
    );
}