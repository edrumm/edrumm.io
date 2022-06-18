import React, { useState } from "react";
import classNames from "classnames";
import './styles/header.scss';

const Header = () => {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownIcon, setDropdownIcon] = useState('☰');

    const toggleDropdown = () => {
        dropdownIcon === '☰' ? setDropdownIcon('×') : setDropdownIcon('☰');
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <header>
            <nav className="nav-bar">
                <ul className={classNames('nav-list', {
                    'open-list': dropdownOpen
                })}>
                    <span className="dropdown-icon">
                        <li onClick={toggleDropdown}>{dropdownIcon}</li>
                    </span>
                    <li className="nav-option">Home Icon</li>
                    <li className="nav-option">About</li>
                    <li className="nav-option">Projects</li>
                    <li className="nav-option">Contact</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;