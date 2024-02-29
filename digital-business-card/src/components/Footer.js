import githubIcon from "../images/github.png"

function Footer() {
    return (
        <div className="footer--card">
            <a href="https://github.com/zackandcoding1" target="_blank" rel="noreferrer">
                <img className="footer--icon" src={githubIcon} alt="github"/>
            </a>
        </div>
    )
}

export default Footer;