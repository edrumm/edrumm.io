import React from "react";
import './styles/footer.scss';

const Footer = () => {
    return (
        <footer>
            <ul className="footer-items">
                <li>Icons</li>
                <li>|</li>
                <li>&copy; Ewan Drummond {new Date().getUTCFullYear()}</li>
            </ul>
        </footer>
    );
};

export default Footer;