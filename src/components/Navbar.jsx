import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/navbar.css";
import { GiHamburgerMenu } from 'react-icons/gi';

function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);

    const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false);
    }, [location]);

    return (
        <div className="navbar" id={expandNavbar ? "open" : "close"}>
            <div className="toggleButton">
                <button
                onClick={() => {
                    setExpandNavbar((prev) => !prev);
                }}
                >
                    <GiHamburgerMenu />
                </button>
            </div>
            <div className="links">
                <Link to="/"> Home </Link>
                <Link to="/education"> Education </Link>
                <Link to="/projects"> Projects </Link>
                <Link to="/contact"> Contact </Link>
            </div>
            <div className="line-nav"></div>
        </div>
    );
}

export default Navbar;