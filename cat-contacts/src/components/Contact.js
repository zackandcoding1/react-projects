import cat1 from "../images/100.jpg";
//import cat2 from "../images/200.jpg";
//import cat3 from "../images/300.jpg";
//import cat4 from "../images/400.jpg";
import phone from "../images/phone.png";
import email from "../images/email.png";

function Contact() {
    return (
        <div className="contact-card">
            <img src={cat1} alt="Mr. Valentine" />
            <h3>Mr. Valentine</h3>
            <div className="info-group">
                <img src={phone} alt="phone" />
                <p>(91) 9876-1234</p>
            </div>

            <div className="info-group">
                <img src={email} alt="email" />
                <p>meowmail@cat.com</p>
            </div>
        </div>
    );
}

export default Contact;