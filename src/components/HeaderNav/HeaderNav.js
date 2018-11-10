import React from 'react';
import logo from './logo.png';
import menuData from './menuData';
import './header-nav.scss';

export default ({ onClick }) => (
    <nav className="header-nav">
        <img className="header-nav__logo" src={ logo } alt="Aerolitos" />
        {
            menuData.map(menu => (
                <button
                    className="header-nav__link"
                    key={ menu.id }
                    onClick={ onClick.bind(null, menu.id ) }
                >
                    { menu.name }
                </button>
                        
            ))
        }
    </nav>
);