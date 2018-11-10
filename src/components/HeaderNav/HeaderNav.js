import React from 'react';
import './header-nav.scss';

export default () => (
    <nav className="header-nav">
        <ul className="header-nav__list">
            <li>
                <a href="#Empresa">
                    Empresa
                </a>
            </li>
            <li>
                <a href="#Clientes">
                    Clientes
                </a>
            </li>
            <li>
                <a href="#Depoimentos">
                    Depoimentos
                </a>
            </li>
            <li>
                <a href="#Orcamento">
                    Faça um orçamento
                </a>
            </li>
        </ul>
    </nav>
);