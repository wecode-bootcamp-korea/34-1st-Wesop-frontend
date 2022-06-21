import React from 'react';
import './AdCard.scss';

const AdCard = ({ topTitle, title, description, plusInfo }) => {
  return (
    <aside className="adCard">
      <article className="adCardArticle">
        <header className="adCardHeader">
          <h3 className="adCardH3">{topTitle}</h3>
          <h2 className="adCardH2">{title}</h2>
        </header>
        <p>{description}</p>
        <div className="plusButton">
          <a>{plusInfo}</a>
        </div>
      </article>
    </aside>
  );
};

export default AdCard;
