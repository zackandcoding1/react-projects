import avatarCard from "../images/avatar.jpg";
import emailButtonIcon from "../images/black-email.png"
import linkedinButtonIcon from "../images/linkedin.png"

function Info() {
    return (
        <div className="info--card">
            <img
                src={avatarCard}
                alt="Avatar"
                className="info--avatar_icon"
            />
            <h1 className="info--name">Isaac Gomes</h1>
            <h4 className="info--role">Computer Science student</h4>

            <div className="info--contact_buttons">
                <a href="mailto:isaacnbgomes@gmail.com" className="info--email_button">
                    <img className="info--email_icon" src={emailButtonIcon} alt="email icon"/>
                    <span>Email</span>
                </a>
                <a className="info--linkedin_button" href="https://www.linkedin.com/in/isaac-gomes-1b26bb222/" target="_blank" rel="noreferrer">
                    <img className="info--linkedin_icon" src={linkedinButtonIcon} alt="linkedin icon"/>
                    <span>LinkedIn</span>
                </a>
            </div>
        </div>
    )
}

export default Info;