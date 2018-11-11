import React from 'react';
import menuData from './menuData';
import './header-nav.scss';

export default ({ onClick }) => (
    <nav className="header-nav">
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