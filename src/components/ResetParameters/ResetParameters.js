import PropTypes from 'prop-types';
import React from 'react';
import s from './ResetParameters.module.css';
import { btnStyle } from '../FeedbackOptions/FeedbackOptions';

const ResetParameters = ({ reset }) => (
  <button className={s.button} type="button" onClick={reset} style={btnStyle}>
    Reset
  </button>
);

ResetParameters.propTypes = {
  reset: PropTypes.func.isRequired,
};

export default ResetParameters;
