import React from 'react';
import logo from './logo.png';
import './header.scss';

export default () => (
    <header className="header">
        <div className="header__logo">
            <img src={ logo } alt={ 'Aerolitos' } />
        </div>
        <p className="header__mood">
            edição<br />
            podcast
        </p>
    </header>
);
