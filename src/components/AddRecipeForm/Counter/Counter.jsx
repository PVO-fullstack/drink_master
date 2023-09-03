// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

import { PlusIcon, MinusIcon } from '../../icons';

import style from './Counter.module.scss';

// ###################################################

export const Counter = ({ length, pop, push }) => {
  //
  const addItem = () => {
    push({ title: '', measure: '' });
  };

  const removeItem = () => {
    if (length === 1) throw new Error("Can't make a cocktail out of nothing");
    pop();
  };

  return (
    <div className={style.counterWrapper}>
      <button
        className={style.counterButton}
        type="button"
        onClick={removeItem}
        disabled={length === 1}
        aria-label="Decrement ingredient list by 1"
      >
        <MinusIcon width={16} height={16} />
      </button>

      <div className={style.counter}>{length}</div>

      <button
        className={style.counterButton}
        type="button"
        onClick={addItem}
        aria-label="Increment ingredient list by 1"
      >
        <PlusIcon width={16} height={16} />
      </button>
    </div>
  );
};

Counter.propTypes = {
  length: PropTypes.number.isRequired,
  pop: PropTypes.func.isRequired,
  push: PropTypes.func.isRequired,
};
