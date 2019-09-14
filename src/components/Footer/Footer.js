import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';
import './footer.scss';

export default () => (
    <footer className="footer">
        <div className="footer-grid">
            Feito com 
            <span className="footer-love"><FontAwesomeIcon icon={ faHeart } /></span>
            por -
            <a href="https://github.com/femontanha" className="footer-author">femontanha</a>
            <a href="https://twitter.com/leobruski" className="footer-social">
                <FontAwesomeIcon icon={ faTwitter } />
            </a>
            <a href="http://bit.ly/WhatsappAerolitosNovo" className="footer-social">
                <FontAwesomeIcon icon={ faWhatsapp } />
            </a>
            <a href="https://www.facebook.com/aerolitosedicaointeligente/" className="footer-social">
                <FontAwesomeIcon icon={ faFacebook } />
            </a>
        </div>
    </footer>
);
