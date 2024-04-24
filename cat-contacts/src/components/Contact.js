import phone from "../images/phone.png";
import email from "../images/email.png";

function Contact(props) {
    return (
        <div className="contact-card">
            <img src={props.img} alt="profile" />
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src={phone} alt="phone" />
                <p>{props.phone}</p>
            </div>

            <div className="info-group">
                <img src={email} alt="email" />
                <p>{props.email}</p>
            </div>
        </div>
    );
}

export default Contact;