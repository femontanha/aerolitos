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
            <a href="https://api.whatsapp.com/send?phone=5547999464695&text=Ol%C3%A1,%20gostaria%20de%20conversar%20sobre%20o%20meu%20podcast" className="footer-social">
                <FontAwesomeIcon icon={ faWhatsapp } />
            </a>
            <a href="https://www.facebook.com/AerolitosPodcast/" className="footer-social">
                <FontAwesomeIcon icon={ faFacebook } />
            </a>
        </div>
    </footer>
);
