import person1 from "../images/person1.png";
import person2 from "../images/person2.png";
import bike from "../images/bike.png";
import star from "../images/star.png";

function Card() {
    return (
        <div className="card">
            <div className="card--item">
                <img className="card--image" src={person1} alt="person 1" />
                <span className="card--spacing"></span>
                <img className="card--star" src={star} alt="star icon" />
                <span> 5.0</span>
                <span className="gray">(6) •</span>
                <span className="gray">USA</span>
                <p>Life lessons with Katie Zaferes</p>
                <p><span className="bold">From $136</span> / person</p>
            </div>

            <div className="card--item">
                <img className="card--image" src={person2} alt="person 2" />
                <img className="card--star" src={star} alt="star icon" />
                <span> 5.0</span>
                <span className="gray">(30) •</span>
                <span className="gray">USA</span>
                <p>Learn wedding photography</p>
                <p><span className="bold">From $125</span> / person</p>
            </div>

            <div className="card--item">
                <img className="card--image" src={bike} alt="bike" />
                <img className="card--star" src={star} alt="star icon" />
                <span> 4.8</span>
                <span className="gray">(2) •</span>
                <span className="gray">USA</span>
                <p>Group Mountain Biking</p>
                <p><span className="bold">From $50</span> / person</p>
            </div>
        </div>
    );
}

export default Card;