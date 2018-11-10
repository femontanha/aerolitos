import React, { PureComponent } from 'react';
import './article.scss';

class Article extends PureComponent {
    articleRef = React.createRef();

    render () {
        return (
            <article ref={ this.articleRef } className="article">
                <div className="article-title">
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
