import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const NavBar = () => {
    const insertLogo = () => {
        return <img src="https://i.imgur.com/3eIveJC.png" alt="logo" />;
    };

    return (
        <nav>
            <ul>
                <li className="link"><Link to="/">Home</Link></li>
                <li className="link"><Link to="/info">Info</Link></li>
                <li className="link"><Link to="/services">Services</Link></li>
                <li className="link"><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;
