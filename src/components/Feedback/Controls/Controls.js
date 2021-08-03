import React from 'react';
import PropTypes from 'prop-types';

import styles from './Controls.module.scss';

const Controls = ({ incrementFeedback, options }) => {
  return (
    <div className={styles.controls}>
      {options.map(option => {
        return (
          <button
            key={option}
            className={styles.button}
            type="button"
            onClick={incrementFeedback(option)}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};
Controls.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  incrementFeedback: PropTypes.func.isRequired,
};
export default Controls;
