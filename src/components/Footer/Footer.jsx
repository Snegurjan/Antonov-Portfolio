import React from "react";
import './Footer.sass'
import {faLinkedin, faGithub, faFacebook} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Footer = () => {

    return (
        <footer className='footer'>
            <p className="footer-copyright">
                © {new Date().getFullYear()} Antonov Igor
            </p>
            <div className="footer-social-links">
                <a target='_blank' href="https://www.facebook.com/GagarinGara/" className="footer-social__link">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a target='_blank' href="https://www.linkedin.com/in/developpapa/" className="footer-social__link">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a target='_blank' href="https://github.com/Snegurjan" className="footer-social__link">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>
        </footer>
    )
}

export default Footer