import PropTypes from 'prop-types';
import React from 'react';
import shortid from 'shortid';
import s from './FeedbackOptions.module.css';
import colorMaker from '../../helpers/colorMaker';
import theFirstLetterToUpperCase from '../../helpers/theFirstLetterToUpperCase';

export const btnStyle = { backgroundColor: colorMaker() };

const FeedbackOptions = ({ onLeaveFeedback, options }) => (
  <div className={s.buttons}>
    {options.map(option => (
      <button
        key={shortid.generate()}
        className={s.button}
        type="button"
        onClick={() => onLeaveFeedback(option)}
        style={btnStyle}
      >
        {theFirstLetterToUpperCase(option)}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};

export default FeedbackOptions;
