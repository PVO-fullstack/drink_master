// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

import { Paragraph } from '../../Typography';

import style from './PopularCard.module.scss';
import { Link } from 'react-router-dom';

// ################################################

export const PopularCard = ({ recipe }) => {
  const { drinkThumb, drink, description, _id: id } = recipe;

  return (
    <Link to={`/recipes/${id}`} className={style.card}>
      <div className={style.thumb}>
        <img
          className={style.image}
          src={drinkThumb}
          alt="drink thumbnail picture"
        />
      </div>

      <div className={style.meta}>
        <Paragraph className={style.title}>{drink}</Paragraph>

        <div className={style.text}>
          {description ? (
            <p>{description}</p>
          ) : (
            <>
              <p>Sorry, this recipe has no description</p>
              <p>That said, why not give it a try anyway? :)</p>
            </>
          )}
        </div>
      </div>
    </Link>
  );
};

PopularCard.propTypes = {
  recipe: PropTypes.object.isRequired,
};
