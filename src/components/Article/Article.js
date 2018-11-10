import React from 'react';
import './article.scss';

export default ({ name, quote, children }) => (
    <article className="article">
        <div className="article-title">
            <h1 className="article-title__name">
                { name }
            </h1>
            <span className="article-title__line" />
            <p className="article-title__quote">
                { quote }
            </p>
        </div>
        { children }
    </article>
);
