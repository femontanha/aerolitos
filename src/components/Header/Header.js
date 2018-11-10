import React from 'react';
import HeaderNav from '../HeaderNav/HeaderNav';
import logo from './logo.png';
import './header.scss';

export default () => (
    <header className="header">
        <div className="header-grid">
            <div className="header__logo">
                <img src={ logo } alt={ 'Aerolitos' } />
            </div>
            <HeaderNav />
        </div>
    </header>
);
