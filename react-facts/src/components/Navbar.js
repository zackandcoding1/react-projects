import React from "react";

export default function Navbar(props) {
    return (
        <nav className="navbar">
            <img className="nav--logo_icon" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="react logo" />
            <h3 className="nav--logo_text">ReactFacts</h3>
            <div className="toggler">
                <p className="toggler--light">Light</p>
                <div className="toggler--slider" onClick={props.toggleDarkMode}>
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    )
}