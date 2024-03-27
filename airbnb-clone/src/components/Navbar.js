import airbnbLogo from "../images/airbnb-logo.png";

function Navbar() {
    return (
        <div>
            <nav>
                <img className="nav--logo" src={airbnbLogo} alt="airbnb logo" />
            </nav>
        </div>
    );
}

export default Navbar;