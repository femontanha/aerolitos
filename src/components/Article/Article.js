import React, { PureComponent } from 'react';
import classNames from 'classnames';
import './article.scss';

class Article extends PureComponent {
    articleRef = React.createRef();

    render () {
        const articleCSS = classNames(
            'article',
            { 'article--dark': this.props.theme === 'dark' }
        );

        const articleTitleCSS = classNames(
            'article-title',
            { 'article-title--dark': this.props.theme === 'dark' }
        );

        return (
            <article ref={ this.articleRef } className={ articleCSS }>
                <div className={ articleTitleCSS }>
                    <h1 className="article-title__name">
                        { this.props.name }
                    </h1>
                    <span className="article-title__line" />
                    <p className="article-title__quote">
                        { this.props.quote }
                    </p>
                </div>
                { this.props.children }
            </article>
        );
    }
}

export default Article;
