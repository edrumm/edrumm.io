import React from "react";
import './styles/header.scss';

const Header = () => {
    return (
        <header>
            <nav className="nav-bar">
                <ul className="nav-list">
                    <li>Item 1</li>
                    <li>Item 2</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;