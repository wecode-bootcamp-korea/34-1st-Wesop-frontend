import React from 'react';
import './AdCard.scss';
import UseALink from '../UseALink/UseALink';

const AdCard = ({ topTitle, title, description, plusInfo }) => {
  return (
    <aside className="adCard">
      <article className="adCardArticle">
        <header className="adCardHeader">
          <h3 className="adCardTopTitle">{topTitle}</h3>
          <h2 className="adCardMainTitle ">{title}</h2>
        </header>
        <p className="adStory">{description}</p>
        <UseALink text={plusInfo} />
      </article>
    </aside>
  );
};

export default AdCard;
